import convert from "https://cdn.jsdelivr.net/npm/convert@5";
import {Chart, registerables} from 'https://cdn.jsdelivr.net/npm/chart.js/+esm';
import chartjsPluginAnnotation from 'https://cdn.jsdelivr.net/npm/chartjs-plugin-annotation/+esm'
Chart.register(chartjsPluginAnnotation, ...registerables);

function detectMobile() {
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

const unitMap = {
	'wmoUnit:degC': 'celsius',
	'wmoUnit:km_h-1': 'kmph',
}

function setTitle(text) {
	document.getElementById('title').textContent = text;
}

async function getData(numHours) {
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
	const gridProps = gridData.properties;
	const out = {
		location: {
			city: NWSLocData.properties.relativeLocation.properties.city,
			state: NWSLocData.properties.relativeLocation.properties.state,
		},
		series: {}
	};
	const heatSeries = expandGridSeries(gridProps.heatIndex.values);
	out.series.startTime = heatSeries.startTimes;
	out.series.heatIndex = heatSeries.values.map(p => 
		p === null ? p : convert(p, 'celsius').to('fahrenheit')
		);
	out.series.temperature = expandGridSeries(gridProps.temperature.values).values.map(p => 
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

async function makeCharts(numHours) {
	let titleSize;
	if (detectMobile()) {
		Chart.defaults.font.size = 28;
		titleSize = 40;
	} else {
		Chart.defaults.font.size = 16;
		titleSize = 24;
	}
	const fcst = await getData();
	for (let seriesName in fcst.series) {
		fcst.series[seriesName] = fcst.series[seriesName].slice(0, numHours);
	}
	setTitle(`${numHours}h forecast for ${fcst.location.city}, ${fcst.location.state}`)
	const tension = 0.4;
	const pointRadius = 2.5;
	const tempChartCanvas = document.getElementById('chart-temp');
	const chartLabels = fcst.series.startTime.map(elem => makeLabel(elem))
	new Chart(tempChartCanvas, {
		type: 'line',
		data: {
			labels: chartLabels,
			datasets: [
				{
					label: 'Temperature',
					data: fcst.series.temperature,
					fill: false,
					borderColor: 'red',
					tension: tension,
					pointRadius: pointRadius,
				},
				{
					label: 'Heat Index',
					data: fcst.series.heatIndex,
					fill: false,
					borderColor: 'orange',
					tension: tension,
					pointRadius: pointRadius,
				},
				{
					label: 'Dewpoint',
					data: fcst.series.dewpoint,
					fill: false,
					borderColor: 'green',
					tension: tension,
					pointRadius: pointRadius,
				},
			]
		},
		options: {
			plugins: {
				title: {
					display: true,
					text: 'Heat',
					font: {
						size: titleSize,
					},
				}
			},
			responsive: true,
			maintainAspectRatio: false,
			scales: {
			y: {
				title: {
					display: true,
					text: 'Temperature [F]'
					}
				}
			}
		}
	});
	
	const rainChartCanvas = document.getElementById('chart-rain');
	new Chart(rainChartCanvas, {
		type: 'line',
		data: {
			labels: chartLabels,
			datasets: [
				{
					label: 'Humidity',
					data: fcst.series.humidity,
					fill: false,
					borderColor: 'brown',
					tension: tension,
					pointRadius: pointRadius,
				},
				{
					label: 'Precipitation',
					data: fcst.series.precipitation,
					fill: false,
					borderColor: 'blue',
					tension: tension,
					pointRadius: pointRadius,
				},
				{
					label: 'Cloud Cover',
					data: fcst.series.skyCover,
					fill: false,
					borderColor: 'grey',
					tension: tension,
					pointRadius: pointRadius,
				},
			]
		},
		options: {
			plugins: {
				title: {
					display: true,
					text: 'Water',
					font: {
						size: titleSize,
					},
				}
			},
			responsive: true,
			maintainAspectRatio: false,
			scales: {
			y: {
				title: {
				display: true,
				text: '%'
				}
			}
			}
		}
	});

	const windChartCanvas = document.getElementById('chart-wind');
	const windPointerIcon = makeArrowIcon(30)
	new Chart(windChartCanvas, {
		type: 'line',
		data: {
			labels: chartLabels,
			datasets: [
				{
					label: 'Average',
					data: fcst.series.windSpeed,
					fill: false,
					borderColor: 'purple',
					tension: tension,
					// pointRadius: 10,
					pointStyle: windPointerIcon,
					pointRotation: fcst.series.windDirection.map(d => d-180),
				},
				{
					label: 'Gust',
					data: fcst.series.windGust,
					fill: false,
					borderColor: '#cf9df2',
					tension: tension,
					pointRadius: pointRadius,
				},
			]
		},
		options: {
			plugins: {
				title: {
					display: true,
					text: 'Wind Speed',
					font: {
						size: titleSize,
					},
				}
			},
			responsive: true,
			maintainAspectRatio: false,
			scales: {
			y: {
				title: {
				display: true,
				text: 'Speed [mph]'
				}
			}
			}
		}
	});
}

export {getData, makeCharts};