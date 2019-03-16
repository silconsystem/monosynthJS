/** 			main.js
	**/
/**								--- GLOBALS ---
				**/
// tuning data
var stdTuning 			= JSON.parse(JSON.stringify(standardTuning));
var pythaTuning			= JSON.parse(JSON.stringify(pythagoreanTuning));

var stdTuningNotes 		= [];
var stdTuningFreq 		= [];
var pythaTuningNotes	= [];
var pythaTuningFreq		= [];
var i, j;

for (i = 0, j = 0; i <= stdTuning.length - 1, j <= pythaTuning.length -1; i++, j++) {
	// add note and Frequency values from our JSON objects
	// 440 Hz tuning
	stdTuningNotes.push(stdTuning[i].Note);
	stdTuningFreq.push(stdTuning[i].Frequency);
	// 432 Hz tuning
	pythaTuningNotes.push(pythagoreanTuning[j].Note);
	pythaTuningFreq.push(pythagoreanTuning[j].Frequency);
	// TODO "remove console outputs"
	// log output
	console.log("standardTuning notes: " + stdTuningNotes[i] +"\n" + 
		"standardTuning freq: " + stdTuningFreq[i] +"\n" +
		"pythagoreanTuning notes: " + pythaTuningNotes[j] +"\n" +
		"pythagoreanTuning freq: " + pythaTuningFreq[j]);
}

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
// frequency and gain sliders
var oscOneFreq = document.getElementById('osc-1-freq-input');
var oscTwoFreq = document.getElementById('osc-2-freq-input');

var hertzOne = document.getElementById('osc-1-freq')
var hzSrcnOne =  document.getElementById('freq-1-value');
var hertzTwo = document.getElementById('osc-2-freq');
var hzSrcnTwo = document.getElementById('freq-2-value');

oscOneFreq.oninput = function() {
	hertzOne.innerHTML = stdTuningFreq[this.value];
	hzSrcnOne.innerHTML = stdTuningFreq[this.value];
}
oscOneFreq.oninput();
oscTwoFreq.oninput = function() {
	hertzTwo.innerHTML = stdTuningFreq[this.value];
	hzSrcnTwo.innerHTML = stdTuningFreq[this.value];
}
oscTwoFreq.oninput();