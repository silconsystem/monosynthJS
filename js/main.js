/** 			main.js
	**/
/**								--- GLOBALS ---
				**/
// create web audio api AudioContext 
//window.AudioContext = window.AudioContext || window.webkitAudioContext;
//var audioCtx = new AudioContext();
				
// tuning data
var stdTuning 			= JSON.parse(JSON.stringify(standardTuning));
var pythaTuning			= JSON.parse(JSON.stringify(pythagoreanTuning));

var stdTuningNotes 		= [];
var stdTuningFreq 		= [];
var pythaTuningNotes	= [];
var pythaTuningFreq		= [];
var i, j;

// panning, volume control
var leftChan 			= document.getElementById('left-vol');
var rightChan 			= document.getElementById('right-vol');
var masterVol			= document.getElementById('master-vol');

var volumeSpan			= document.getElementById('master-gain-channel');
var leftSpan			= document.getElementById('vol-left-out');
var rightSpan			= document.getElementById('vol-right-out');

var volLeft,
	volRight,
	masterGain;

masterVol.onchange = function() {
	masterGain = masterVol.value;
	volumeSpan.innerHTML = masterVol.value;
	console.log("masterGain: " + masterGain);
}
masterVol.onchange();

leftChan.onchange = function() {
	volLeft = leftChan.value;
	leftSpan.innerHTML = leftChan.value;
	console.log("left-vol: " + volLeft);
}
leftChan.onchange();

rightChan.onchange = function() {
	rightVol = rightChan.value;
	rightSpan.innerHTML = rightChan.value;
	console.log("right-vol: " + rightVol);
}
rightChan.onchange();

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