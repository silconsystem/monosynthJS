/** 			oscillators.js
	**/
/**				 Globals				**/
/** create Oscillator node 															***OSCILLATOR***
var vcoOne 		= audioCtx.createOscillator();
var vcoTwo 		= audioCtx.createOscillator();
var vca 		= audioCtx.createGain();
var masterMix	= audioCtx.createGain(); 
**/
// inputs for osc one
var oscOneReset  = document.getElementById('osc-1-reset');
var oscTwoReset  = document.getElementById('osc-2-reset');

var oscOneToggle = document.getElementById('osc-1-toggle');
var oscTwoToggle = document.getElementById('osc-2-toggle');

var osc_1_state = false;
var osc_2_state = false;
	
var	osc_id;

function oscOnOff(self) {
	var id = self.id;
	osc_id = id.replace(/^[^\d]*/,"").replace(/[^\d]*$/,"");

	if (oscOneToggle.checked) {
		osc_1_state = true;
		console.log(osc_1_state);
 	} else {
 		osc_1_state = false;
 		console.log(osc_1_state);
 	}

 	if (oscTwoToggle.checked) {
 		osc_2_state = true;
 		console.log(osc_2_state);
 	} else {
 		osc_2_state = false;
 		console.log(osc_2_state);
 	}
}

// 	waveform selectors
var waveSelectOne = document.getElementById('osc-1-waveselect');
var waveSelectTwo = document.getElementById('osc-2-waveselect');

var wavOneDisplay = document.getElementById('osc-1-selected-waveform');
var wavTwoDisplay = document.getElementById('osc-2-selected-waveform');

// flags, counters and get&set values
var waveTypeOne = 'sine';
var waveTypeTwo = 'sine'; 

// reset the input selectors
waveSelectOne.onchange = function() {
	wavOneDisplay.innerHTML = waveSelectOne.value;
	waveTypeOne 			= waveSelectOne.value;
	waveSelectOne.value 	= '';
	console.log("waveform-1: " + waveTypeOne);
}
waveSelectTwo.onchange = function() {
	wavTwoDisplay.innerHTML = waveSelectTwo.value;
	waveTypeTwo 			= waveSelectTwo.value;
	waveSelectTwo.value 	= '';
	console.log("waveform-2: " + waveTypeTwo);
}
// frequency and gain sliders
var oscOneFreq 	= document.getElementById('osc-1-freq-input');
var oscTwoFreq 	= document.getElementById('osc-2-freq-input');

var noteOne 	= document.getElementById('note-1-value');
var noteTwo 	= document.getElementById('note-2-value');

var oscOneGain 	= document.getElementById('osc-1-gain-input');
var oscTwoGain 	= document.getElementById('osc-2-gain-input');

var gainOne 	= document.getElementById('osc-1-gain');
var gainTwo 	= document.getElementById('osc-2-gain');

var hertzOne 	= document.getElementById('osc-1-freq')
var hzSrcnOne 	=  document.getElementById('freq-1-value');
var hertzTwo 	= document.getElementById('osc-2-freq');
var hzSrcnTwo 	= document.getElementById('freq-2-value');

var frequencyOne,
	frequencyTwo,
	gainOneVal,
	gainTwoVal;

oscOneFreq.oninput = function() {
	hertzOne.innerHTML 	= stdTuningFreq[this.value];
	hzSrcnOne.innerHTML = stdTuningFreq[this.value];
	noteOne.innerHTML 	= stdTuningNotes[this.value];
	frequencyOne 		= stdTuningFreq[this.value];
	console.log(frequencyOne);
}
oscOneFreq.oninput();

oscTwoFreq.oninput = function() {
	hertzTwo.innerHTML 	= stdTuningFreq[this.value];
	hzSrcnTwo.innerHTML = stdTuningFreq[this.value];
	noteTwo.innerHTML 	= stdTuningNotes[this.value];
	frequencyTwo 		= stdTuningFreq[this.value];
	console.log(frequencyTwo);
}
oscTwoFreq.oninput();

oscOneGain.oninput = function() {
	gainOne.innerHTML 	= oscOneGain.list.options[oscOneGain.value].value;
	gainOneVal 			= oscOneGain.list.options[oscOneGain.value].value;
	console.log(gainOneVal);
}
oscOneGain.oninput();
oscTwoGain.oninput = function() {
	gainTwo.innerHTML 	= oscTwoGain.list.options[oscTwoGain.value].value;
	gainTwoVal 			= oscTwoGain.list.options[oscTwoGain.value].value;
	console.log(gainTwoVal);
}
oscTwoGain.oninput();

oscOneReset.onclick = function() {
	oscOneFreq.value 		= 0;
	hertzOne.innerHTML 		= stdTuningFreq[oscOneFreq.value];
	hzSrcnOne.innerHTML 	= stdTuningFreq[oscOneFreq.value];
	noteOne.innerHTML 		= stdTuningNotes[oscOneFreq.value];
	oscOneGain.value 		= 4;
	gainOne.innerHTML 		= oscOneGain.list.options[oscOneGain.value].value;
	waveSelectOne.value 	= '';
	wavOneDisplay.innerHTML = 'sine';

	frequencyOne 	= stdTuningFreq[oscOneFreq.value];
	gainOneVal 		= 0.5;
	waveTypeOne 	= 'sine';
	console.log("freq: " + frequencyOne);
	console.log("gain: " + gainOneVal);
	console.log("wave: " + waveTypeOne);
}

oscTwoReset.onclick = function() {
	oscTwoFreq.value 		= 0;
	hertzTwo.innerHTML 		= stdTuningFreq[oscTwoFreq.value];
	hzSrcnTwo.innerHTML 	= stdTuningFreq[oscTwoFreq.value];
	noteTwo.innerHTML 		= stdTuningNotes[oscTwoFreq.value];
	oscTwoGain.value 		= 4;
	gainTwo.innerHTML 		= oscTwoGain.list.options[oscTwoGain.value].value;
	waveSelectTwo.value 	= '';
	wavTwoDisplay.innerHTML = 'sine';

	frequencyTwo 	= stdTuningFreq[oscTwoFreq.value];
	gainTwoVal 		= 0.5;
	waveTypeTwo 	= 'sine';
	console.log("freq: " + frequencyTwo);
	console.log("gain: " + gainTwoVal);
	console.log("wave: " + waveTypeTwo);
}

wavOneDisplay.innerHTML = waveTypeOne;
wavTwoDisplay.innerHTML = waveTypeTwo;

// the two oscillators
function oscillatorInputs() {

	oscOne.oscillator.type				= waveTypeOne;
	oscOne.frequency.value 	= frequencyOne;
	oscOne.volume.value 	= gainOneVal;

	oscTwo.type				= waveTypeTwo;
	oscTwo.frequency.value	= frequencyTwo;
	oscTwo.volume.value		= gainTwoVal;
}

var oscOne = new Tone.Synth().toMaster();
var oscTwo = new Tone.Synth().toMaster();
/**
 * 								Analyser Node
 */
document.querySelector("tone-oscilloscope").bind(oscOne);