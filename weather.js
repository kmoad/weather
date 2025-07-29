import convert from "https://cdn.jsdelivr.net/npm/convert@5";
// import coronadoCA from './data.js';

function detectMobile() { //AI
  // 1) Client Hints
  if (navigator.userAgentData && typeof navigator.userAgentData.mobile === 'boolean') {
    return navigator.userAgentData.mobile;
  }
  // 2) Pointer/Touch
  if (window.matchMedia('(pointer: coarse)').matches) {
    return true;
  }
  // 3) Screen size
  if (Math.min(window.innerWidth, window.innerHeight) <= 768) {
    return true;
  }
  // 4) UA string fallback
  return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
    .test(navigator.userAgent);
}

async function getPosition() {
	return new Promise((resolve, reject) => {
    	navigator.geolocation.getCurrentPosition(resolve, reject);
  	});
}

function setTitle(text) {
	document.getElementById('title').textContent = text;
}

async function getData() {
	setTitle('Getting location');
	const location = await getPosition();
	const lat = location.coords.latitude;
	const lon = location.coords.longitude;
	setTitle('Finding NWS station');
	const NWSLocURL = `https://api.weather.gov/points/${lat},${lon}`
	const NWSLocResponse = await fetch(NWSLocURL);
	const NWSLocData = await NWSLocResponse.json();
	setTitle('Fetching forecast');
	const gridResponse = await fetch(NWSLocData.properties.forecastGridData);
	const gridData = await gridResponse.json();
	// const NWSLocData = coronadoCA.NWSLocData;
	// const gridData = coronadoCA.gridData;
	const gridProps = gridData.properties;
	const out = {
		location: {
			city: NWSLocData.properties.relativeLocation.properties.city,
			state: NWSLocData.properties.relativeLocation.properties.state,
		},
		series: {}
	};
	const tempSeries = expandGridSeries(gridProps.temperature.values);
	out.series.startTime = tempSeries.startTimes;
	out.series.temperature = tempSeries.values.map(p => 
		p === null ? p : convert(p, 'celsius').to('fahrenheit')
		);
	out.series.heatIndex = expandGridSeries(gridProps.heatIndex.values).values.map(p => 
		p === null ? p : convert(p, 'celsius').to('fahrenheit')
		);
	out.series.dewpoint = expandGridSeries(gridProps.dewpoint.values).values.map(p => 
		p === null ? p : convert(p, 'celsius').to('fahrenheit')
		);
	out.series.humidity = expandGridSeries(gridProps.relativeHumidity.values).values;
	out.series.precipitation = expandGridSeries(gridProps.probabilityOfPrecipitation.values).values;
	out.series.skyCover = expandGridSeries(gridProps.skyCover.values).values;
	out.series.windSpeed = expandGridSeries(gridProps.windSpeed.values).values.map(p =>
		p === null ? p : convert(p, 'kilometer').to('mile')
	);
	out.series.windGust = expandGridSeries(gridProps.windGust.values).values.map(p =>
		p === null ? p : convert(p, 'kilometer').to('mile')
	);
	out.series.windDirection = expandGridSeries(gridProps.windDirection.values).values;
	return out;
}

function expandGridSeries(gridProperty) {
	const curTime = new Date();
	curTime.setMinutes(0, 0, 0); // Include current hour
	let startTimes = [];
	let values = [];
	for (let entry of gridProperty) {
		for (let rangeStart of expandTimeRange(entry.validTime)) {
			if (rangeStart >= curTime) {
				startTimes.push(rangeStart);
				values.push(entry.value);
			}
		}
	}
	return {startTimes: startTimes, values: values}
}

function expandTimeRange(timeRange) {
	const timeString = timeRange.split('/')[0];
	const validRange = timeRange.split('/')[1];
	const startDt =  new  Date(timeString);
	const numHours = parseInt(validRange.slice(2,-1));
	let rangeStarts = [];
	for (let i=0; i<numHours; i++) {
		let rangeStart = new Date(startDt.getTime()+i*(1000*60*60));
		rangeStarts.push(rangeStart);
	}
	return rangeStarts
}

function makeLabel(date) {
	if (date.getHours() === 0) {
		return date.toLocaleTimeString([], { hour: 'numeric', month: 'short', day: 'numeric'});
	} else {
		return date.toLocaleTimeString([], {hour: 'numeric'});
	}
}

function makeArrowIcon(size = 20, color = 'purple') {
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const ctx = c.getContext('2d');

  const shaftWidth     = 2;
  const headLength     = size * 0.25; // length of the arrowhead
  const headWidth      = headLength * 0.8; // width of the arrowhead base
  const centerX        = size / 2;
  const tipY           = 2;            // leave a tiny margin at the top
  const shaftEndY      = tipY + headLength; 

  ctx.strokeStyle = color;
  ctx.fillStyle   = color;
  ctx.lineWidth   = shaftWidth;

  // 1) Draw the shaft (from just below the arrowhead base to the bottom)
  ctx.beginPath();
  ctx.moveTo(centerX, shaftEndY);
  ctx.lineTo(centerX, size - 2);
  ctx.stroke();

  // 2) Draw the triangular arrowhead
  ctx.beginPath();
  ctx.moveTo(centerX, tipY); // tip
  ctx.lineTo(centerX - headWidth/2, shaftEndY); // left corner
  ctx.lineTo(centerX + headWidth/2, shaftEndY); // right corner
  ctx.closePath();
  ctx.fill();

  return c;
}

async function makePlots(numHours) {
	const fcst = await getData();
	setTitle(`${numHours}h forecast for ${fcst.location.city}, ${fcst.location.state}`);
	Plotly.newPlot('plot-temp', 
		[
			{
				name: 'Temperature',
				x: fcst.series.startTime,
				y: fcst.series.temperature,
				mode: 'lines',
				line: {
					color: 'red',
					shape: 'spline',
				},
			},
			{
				name: 'Heat Index',
				x: fcst.series.startTime,
				y: fcst.series.heatIndex,
				mode: 'lines',
				line: {
					color: 'orange',
					shape: 'spline',
				},
			},
			{
				name: 'Dew Point',
				x: fcst.series.startTime,
				y: fcst.series.dewpoint,
				mode: 'lines',
				line: {
					color: 'green',
					shape: 'spline',
				},
			},
		],
		{
			yaxis: {
				title: {
					text: 'Temperature [F]',
				},
				fixedrange: true,
			},
			xaxis: {
				range: [
					fcst.series.startTime[0],
					fcst.series.startTime[numHours - 1]  // assumes x-values are sorted
					]
			},
			showlegend: true,
			legend: {
				y: 1,
				yanchor: 'bottom',
				orientation: 'h',
			},
			margin: {
				t: 0,
			},
			dragmode: 'pan',
		},
		{
			responsive: true,
		},
	);
	Plotly.newPlot('plot-rain', 
		[
			{
				name: 'Relative Humidity',
				x: fcst.series.startTime,
				y: fcst.series.humidity,
				mode: 'lines',
				line: {
					color: 'brown',
					shape: 'spline',
				},
			},
			{
				name: 'Precipitation Chance',
				x: fcst.series.startTime,
				y: fcst.series.precipitation,
				mode: 'lines',
				line: {
					color: 'blue',
					shape: 'spline',
				},
			},
			{
				name: 'Sky Cover',
				x: fcst.series.startTime,
				y: fcst.series.skyCover,
				mode: 'lines',
				line: {
					color: 'gray',
					shape: 'spline',
				},
			},
		],
		{
			yaxis: {
				title: {
					text: '%',
				},
				fixedrange: true,

			},
			xaxis: {
				range: [
					fcst.series.startTime[0],
					fcst.series.startTime[numHours - 1]  // assumes x-values are sorted
					]
			},
			showlegend: true,
			legend: {
				y: 1,
				yanchor: 'bottom',
				orientation: 'h',
			},
			margin: {
				t: 0,
			},
			dragmode: 'pan',
		},
		{
			responsive: true,
		},
	);
	Plotly.newPlot('plot-wind', 
		[
			{
				name: 'Wind Speed',
				x: fcst.series.startTime,
				y: fcst.series.windSpeed,
				mode: 'lines',
				line: {
					color: 'brown',
					shape: 'spline',
				},
			},
		],
		{
			yaxis: {
				title: {
					text: 'Speed [mph]	',
				},
				fixedrange: true,
			},
			xaxis: {
				range: [
					fcst.series.startTime[0],
					fcst.series.startTime[numHours - 1]  // assumes x-values are sorted
					],
			},
			showlegend: true,
			legend: {
				y: 1,
				yanchor: 'bottom',
				orientation: 'h',
			},
			margin: {
				t: 0,
			},
			dragmode: 'pan',
		},
		{
			responsive: true,
		},
	);
	syncPan();
}

function syncPan() { //AI
	const plots = [
		document.getElementById('plot-temp'),
		document.getElementById('plot-rain'),
		document.getElementById('plot-wind')
	];
	let isSyncing = false;
	plots.forEach((sourcePlot, sourceIdx) => {
  		sourcePlot.on('plotly_relayout', (relayoutData) => {
			// only sync if we got a new x‑range
			const start = relayoutData['xaxis.range[0]'];
			const end   = relayoutData['xaxis.range[1]'];
			if (start == null || end == null) return;

			// prevent recursive firing
			if (isSyncing) return;
			isSyncing = true;

			// apply to the others
			plots.forEach((targetPlot, targetIdx) => {
			if (targetIdx === sourceIdx) return;
			Plotly.relayout(targetPlot, {
				'xaxis.range[0]': start,
				'xaxis.range[1]': end
			});
			});

			// give the event loop a tick to clear before allowing new syncs
			setTimeout(() => { isSyncing = false; }, 0);
		});
	});
}

export {makePlots};
