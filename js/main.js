/** 			main.js
	**/
/**								--- GLOBALS ---
				**/
// tuning data
var stdTuning 		= JSON.parse(JSON.stringify(standardTuning));
var pythaTuning		= JSON.parse(JSON.stringify(pythagoreanTuning));

// flags, counters and get&set values
var waveTypeOne,
	waveTypeTwo

// 	waveform selectors
var waveSelectOne = document.getElementById('osc-1-waveselect');
var waveSelectTwo = document.getElementById('osc-2-waveselect');

// reset the input selectors
waveSelectOne.onchange = function() {
	document.getElementById('osc-1-selected-waveform').innerHTML = waveSelectOne.value;
	waveTypeOne = waveSelectOne.value;
	waveSelectOne.value = '';
	console.log("waveform-1: " + waveTypeOne);
}
waveSelectTwo.onchange = function() {
	document.getElementById('osc-2-selected-waveform').innerHTML = waveSelectTwo.value;
	waveTypeTwo = waveSelectTwo.value;
	waveSelectTwo.value = '';
	console.log("waveform-2: " + waveTypeTwo);
}

