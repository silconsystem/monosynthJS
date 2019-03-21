/** 			sequencer.js
	**/
/**								--- GLOBALS ---
		**/		
// control elements
var startButton 	= document.getElementById('start');
var stopButton 		= document.getElementById('stop');
var resetButton		= document.getElementById('reset');
var bpmSlider 		= document.getElementById('tempo-slider');

// note selection sliders 
var noteSliders 	= document.querySelectorAll('.vertical-range');
var ids 			= Array.prototype.map.call(noteSliders, function(element) {
	// return array of id's
	return element.id;
});

// octave selection
var octSlider 		= document.getElementById('oct-range');

// note on/off checkboxes
var boxOnOff 		= [];
var noteArray		= [];

var chkBoxes 		= document.getElementsByClassName('seq-check-btn');

function checkSeqInputs() {
	var i;
	// loop through checkboxes
	for (i = 0; i < chkBoxes.length; i++) {
		// push to array
  		if (chkBoxes[i].type == "checkbox") {
			boxOnOff.push(chkBoxes[i].checked);
		}
		if (noteSliders[i].type == "range") {
    		getValues(noteSliders[i]);
			noteArray.push(freqVal);
		}
	}
	console.log("note freq: " + noteArray);
    console.log("note I/O: " + boxOnOff);
    
}
function resetSeqInputs() {
	// reset the arrays
	boxOnOff 				= [];
	noteArray				= [];
}


// output span
var bpmOutput 		= document.getElementById('tempo');
var seqNote 		= document.querySelectorAll('.seq-note');
var octOutput 		= document.getElementById('oct-selected');

var bpmVal,
	noteID,
	noteSlVal,
	noteSelected,
	octSelected,
	noteOctSelected,
	freqVal,
	pattern;

// bind the start/stop control buttons
startButton.onclick = function() {
	// get I/0 array, note array;
	checkSeqInputs();
	// set pattern to play
	var pattern = new Tone.Pattern(function(time, note){
		if (osc_1_state == true) {
			oscOne.triggerAttackRelease(note, 0.25);
		}
		if (osc_2_state == true) {
			oscTwo.triggerAttackRelease(note, 0.25);
		}
	}, noteArray);

	if (osc_1_state == true) {
		oscillatorInputs();
		pattern.start(0);
		Tone.Transport.start();
		console.log("osc-1 start");
	} else if (osc_1_state == false) {
		pattern.stop();
		console.log("osc-1 is off");
	}

	if (osc_2_state == true) {
		oscillatorInputs();
		pattern.start(0);
		Tone.Transport.start();
		console.log("osc-2 start");
	} else if (osc_2_state == false) {
		pattern.stop();
		console.log("osc-2 is off");
	}
}
stopButton.onclick = function() {

	//
	Tone.Transport.stop();

	if (osc_1_state == true) {	
		oscOneToggle.checked 	= false;
		osc_1_state 			= false;
		console.log("osc-1 stopped");

	}
	if (osc_2_state == true) {
		oscTwoToggle.checked 	= false;
		osc_2_state 			= false;
		console.log("osc-2 stopped");
	}
	resetSeqInputs();
}

// reset button
resetButton.onclick = function() {
	octSlider.value 	= 2;
	octOutput.innerHTML = octSlider.value;
	bpmSlider.value 	= 120;
	bpmOutput.innerHTML = bpmSlider.value;

	for (i = 0; i < chkBoxes.length; i++) {
		chkBoxes[i].checked	 = false;
	}
	for (i = 0; i < noteSliders.length; i++) {
		noteSliders[i].value = 6;
		seqNote[i].innerHTML = noteSliders[i].list.options[noteSliders[i].value].value;
	}
}
resetButton.onclick();

// controller functions
bpmSlider.oninput = function() {
	bpmVal 				= bpmSlider.value;
	bpmOutput.innerHTML = bpmVal;
	console.log(bpmVal);
}
bpmSlider.oninput();

octSlider.oninput = function() {
	octSelected 		= octSlider.value;
	octOutput.innerHTML = octSelected;
	console.log(octSelected);
}
octSlider.oninput();

function getFrequency() {
	var i;
	for (i = 0; i < stdTuning.length; i++) {
		if (noteOctSelected.substring(0, 3) == stdTuning[i].Note.substring(0, 3)) {
			freqVal = stdTuning[i].Frequency;
		}
	}
	console.log(freqVal);
}

function getValues(self) {
	var noteSlID = self.id;
	// remove all the text and keep the number as index
	noteID 		= noteSlID.replace( /^\D+/g, '');
	noteSlVal 	= self.value;
	console.log(noteSlID + " values: " + noteSlVal + "\n" + noteID);

	noteSelected 				= noteSliders[noteID].list.options[noteSlVal].value;
	seqNote[noteID].innerHTML 	= noteSliders[noteID].list.options[noteSlVal].value;
	noteOctSelected 			= noteSelected + octSelected;
	console.log(noteOctSelected);

	getFrequency();
}