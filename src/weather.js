import convert from "https://cdn.jsdelivr.net/npm/convert@5";
import {Chart, registerables} from 'https://cdn.jsdelivr.net/npm/chart.js/+esm';
import chartjsPluginAnnotation from 'https://cdn.jsdelivr.net/npm/chartjs-plugin-annotation/+esm'
import chartjsPluginZoom from 'https://cdn.jsdelivr.net/npm/chartjs-plugin-zoom/+esm'
import SunCalc from 'https://cdn.jsdelivr.net/npm/suncalc/+esm'

Chart.register(
	chartjsPluginAnnotation,
	chartjsPluginZoom,
	...registerables
);

let charts = {};
let isUpdating = false;
let titleSize;
let numHoursStored;
const STORAGE_KEY = 'weather:lastCoords';

function detectMobile() { //AI chatgpt o4-mini
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

let lastLocationTitle = '';

function setTitle(text) {
	document.getElementById('title-text').textContent = text;
}

function setError(msg) {
	document.getElementById('status-text').textContent = msg;
}

async function getData(lat, lon) {
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
			lat: lat,
			lon: lon,
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
	out.series.apparentTemperature = expandGridSeries(gridProps.apparentTemperature.values).values.map(p => 
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
	const [timeString, validRange] = timeRange.split('/');
	const startDt =  new Date(timeString);
	const numHours = parseInt(validRange.slice(2,-1));
	let rangeStarts = [];
	for (let i=0; i<numHours; i++) {
		let rangeStart = new Date(startDt.getTime()+i*(1000*60*60));
		rangeStarts.push(rangeStart);
	}
	return rangeStarts
}

function makeLabel(date) {
	const dayLetters = ['U','M','T','W','R','F','S'];
	const day = dayLetters[date.getDay()];
	const hour = date.getHours().toString().padStart(2, '0');
	return `${day}-${hour}`;
}

function makeTick(value, index, ticks) {
	const date = this.getLabelForValue(value);
	if (value === 0) {
		return makeLabel(date);
	} else if (date.getHours() % 3 === 0 ) {
		return makeLabel(date);
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

// Sync all charts to match the x-axis range of the source chart
function syncCharts(sourceChartId, newXRange) { //AI Claude Sonnet 4
	if (isUpdating) return; // Prevent infinite loops
	
	isUpdating = true;
	
	// Update all other charts
	Object.keys(charts).forEach(chartId => {
		if (chartId !== sourceChartId && charts[chartId]) {
			charts[chartId].options.scales.x.min = newXRange.min;
			charts[chartId].options.scales.x.max = newXRange.max;
			charts[chartId].update('none'); // 'none' for no animation, faster sync
		}
	});
	
	isUpdating = false;
}

async function geocodeLocation(query) {
	const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query)}&format=json&limit=1&countrycodes=us`;
	const resp = await fetch(url);
	const data = await resp.json();
	if (!data.length) {
		throw new Error(`No results for "${query}"`);
	}
	return {
		lat: parseFloat(data[0].lat),
		lon: parseFloat(data[0].lon),
	};
}

async function loadForecast(coords) {
	for (const id of ['chart-temp', 'chart-rain', 'chart-wind']) {
		const existing = Chart.getChart(id);
		if (existing) existing.destroy();
	}
	charts = {};
	const fcst = await getData(coords.lat, coords.lon);
	lastLocationTitle = `${fcst.location.city}, ${fcst.location.state}`;
	setTitle(lastLocationTitle);
	setError('');
	localStorage.setItem(STORAGE_KEY, JSON.stringify(coords));
	buildCharts(fcst);
}

function computeNightRanges(startTimes, lat, lon) {
	const ranges = [];
	let nightStart = null;
	for (let i = 0; i < startTimes.length; i++) {
		const t = startTimes[i];
		const times = SunCalc.getTimes(t, lat, lon);
		const sunrise = times.sunrise;
		const sunset = times.sunset;
		const isNight = !sunrise || !sunset || isNaN(sunrise.getTime()) || isNaN(sunset.getTime())
			? (t.getHours() < 6 || t.getHours() >= 18)
			: (t < sunrise || t >= sunset);
		if (isNight && nightStart === null) {
			nightStart = i;
		} else if (!isNight && nightStart !== null) {
			ranges.push([nightStart, i]);
			nightStart = null;
		}
	}
	if (nightStart !== null) {
		ranges.push([nightStart, startTimes.length]);
	}
	return ranges;
}

const NIGHT_SHADING_PLUGIN = {
	id: 'nightShading',
	beforeDatasetsDraw(chart, args, options) {
		const ranges = options.ranges;
		if (!ranges || !ranges.length) return;
		const {ctx, chartArea, scales: {x}} = chart;
		ctx.save();
		ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
		for (const [s, e] of ranges) {
			const xStart = x.getPixelForValue(s) - (x.getPixelForValue(1) - x.getPixelForValue(0)) / 2;
			const xEnd = x.getPixelForValue(e - 1) + (x.getPixelForValue(1) - x.getPixelForValue(0)) / 2;
			const clampedStart = Math.max(xStart, chartArea.left);
			const clampedEnd = Math.min(xEnd, chartArea.right);
			if (clampedEnd > clampedStart) {
				ctx.fillRect(clampedStart, chartArea.top, clampedEnd - clampedStart, chartArea.bottom - chartArea.top);
			}
		}
		ctx.restore();
	},
};
Chart.register(NIGHT_SHADING_PLUGIN);

function buildCharts(fcst) {
	const numHours = numHoursStored;
	const nightRanges = computeNightRanges(fcst.series.startTime, fcst.location.lat, fcst.location.lon);
	const tension = 0.4;
	const pointRadius = 2.5;
	const tempChartCanvas = document.getElementById('chart-temp');
	charts[tempChartCanvas.id] = new Chart(tempChartCanvas, {
		type: 'line',
		data: {
			labels: fcst.series.startTime,
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
					label: 'Apparent',
					data: fcst.series.apparentTemperature,
					fill: false,
					borderColor: 'orange',
					tension: tension,
					pointRadius: pointRadius,
				},
			]
		},
		options: {
			plugins: {
				nightShading: {ranges: nightRanges},
				title: {
					display: false,
					text: 'Heat',
					font: {
						size: titleSize,
					},
				},
				zoom: {
					zoom: {
						wheel:{enabled:true,speed:0.05,},
						pinch:{enabled:true,speed:0.05,},
						mode:'x',
						onZoom: context => {
							syncCharts(tempChartCanvas.id, { 
								min: context.chart.scales.x.min, 
								max: context.chart.scales.x.max, 
							});
						},
					},
					pan: {
						enabled: true,
						mode: 'x',
						onPan: context => {
							syncCharts(tempChartCanvas.id, { 
								min: context.chart.scales.x.min, 
								max: context.chart.scales.x.max, 
							});
						},
					},
				},
			},
			maintainAspectRatio: false,
			scales: {
				x: {
					min: fcst.series.startTime[0],
					max: fcst.series.startTime[numHours-1],
					ticks: {
						font: {family:'monospace'},
						callback: makeTick,
					},
				},
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
	charts[rainChartCanvas.id] = new Chart(rainChartCanvas, {
		type: 'line',
		data: {
			labels: fcst.series.startTime,
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
				nightShading: {ranges: nightRanges},
				title: {
					display: false,
					text: 'Water',
					font: {
						size: titleSize,
					},
				},
				zoom: {
					zoom: {
						wheel:{enabled:true,speed:0.05,},
						pinch:{enabled:true,speed:0.05,},
						mode:'x',
						onZoom: context => {
							syncCharts(rainChartCanvas.id, { 
								min: context.chart.scales.x.min, 
								max: context.chart.scales.x.max, 
							});
						},
					},
					pan: {
						enabled: true,
						mode: 'x',
						onPan: context => {
							syncCharts(rainChartCanvas.id, { 
								min: context.chart.scales.x.min, 
								max: context.chart.scales.x.max, 
							});
						},
					},
				},
			},
			maintainAspectRatio: false,
			scales: {
				x: {
					min: fcst.series.startTime[0],
					max: fcst.series.startTime[numHours-1],
					ticks: {
						font: {family:'monospace'},
						callback: makeTick,
					},
				},
				y: {
					title: {
						display: true,
						text: '%'
					},
					min: 0,
					max: 100,
				},
			}
		}
	});

	const windPointerIcon = makeArrowIcon(30);
	const windChartCanvas = document.getElementById('chart-wind');
	charts[windChartCanvas.id] = new Chart(windChartCanvas, {
		type: 'line',
		data: {
			labels: fcst.series.startTime,
			datasets: [
				{
					label: 'Speed',
					data: fcst.series.windSpeed,
					borderColor: 'purple',
					tension: tension,
					pointStyle: windPointerIcon,
					pointRotation: fcst.series.windDirection.map(d => d-180),
				},
			]
		},
		options: {
			plugins: {
				nightShading: {ranges: nightRanges},
				title: {
					display: false,
					text: 'Wind',
					font: {
						size: titleSize,
					},
				},
				zoom: {
					zoom: {
						wheel:{enabled:true,speed:0.05,},
						pinch:{enabled:true,speed:0.05,},
						mode:'x',
						onZoom: context => {
							syncCharts(windChartCanvas.id, { 
								min: context.chart.scales.x.min, 
								max: context.chart.scales.x.max, 
							});
						},
					},
					pan: {
						enabled: true,
						mode: 'x',
						onPan: context => {
							syncCharts(windChartCanvas.id, { 
								min: context.chart.scales.x.min, 
								max: context.chart.scales.x.max, 
							});
						},
					},
				},
			},
			maintainAspectRatio: false,
			scales: {
				x: {
					min: fcst.series.startTime[0],
					max: fcst.series.startTime[numHours-1],
					ticks: {
						font: {family:'monospace'},
						callback: makeTick,
					},
				},
				y: {
					title: {
						display: true,
						text: 'Speed [mph]'
					},
					min: 0,
				}
			}
		}
	});

}

async function makeCharts(numHours) {
	numHoursStored = numHours;
	if (detectMobile()) {
		Chart.defaults.font.size = 28;
		titleSize = 40;
	} else {
		Chart.defaults.font.size = 16;
		titleSize = 24;
	}

	document.querySelectorAll('.time-select').forEach(btn => {
		btn.addEventListener('click', () => {
			const hours = parseInt(btn.getAttribute('hours'));
			for (const chart of Object.values(charts)) {
				chart.options.scales.x.min = 0;
				chart.options.scales.x.max = hours;
				chart.update('none');
			}
		});
	});

	const locInput = document.getElementById('location-input');
	const goBtn = document.getElementById('location-go');
	const submitQuery = async () => {
		const q = locInput.value.trim();
		if (!q) return;
		try {
			setTitle(`Looking up "${q}"`);
			const coords = await geocodeLocation(q);
			await loadForecast(coords);
			locInput.value = '';
		} catch (err) {
			setError(`Forecast lookup failed: ${err.message || 'unknown error'}`);
			setTitle(lastLocationTitle || 'Enter a location');
		}
	};
	goBtn.addEventListener('click', submitQuery);
	locInput.addEventListener('keydown', e => {
		if (e.key === 'Enter') submitQuery();
	});
	document.getElementById('location-gps').addEventListener('click', async () => {
		try {
			setTitle('Getting location');
			const pos = await getPosition();
			await loadForecast({lat: pos.coords.latitude, lon: pos.coords.longitude});
		} catch (err) {
			setError('Forecast lookup failed: could not get location');
			setTitle(lastLocationTitle || 'Enter a location');
		}
	});

	const saved = localStorage.getItem(STORAGE_KEY);
	if (saved) {
		try {
			await loadForecast(JSON.parse(saved));
			return;
		} catch (err) {
			setError(`Forecast lookup failed: ${err.message || 'saved location could not be loaded'}`);
		}
	}
	try {
		setTitle('Getting location');
		const pos = await getPosition();
		await loadForecast({lat: pos.coords.latitude, lon: pos.coords.longitude});
	} catch (err) {
		setTitle('Enter a location');
	}
}

export {makeCharts};
