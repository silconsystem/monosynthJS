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
	// loop through checkboxes
	for (var i = 0; i < chkBoxes.length; i++) {
  		if (chkBoxes[i].type == "checkbox") {
    		boxOnOff.push(chkBoxes[i].checked);
    	}
    	getValues(noteSliders[i]);
    	noteArray.push(freqVal);
	}
	console.log("note freq: " + noteArray);
    console.log("note I/O: " + boxOnOff);

    noteArray = [];
    boxOnOff = [];
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
	freqVal;

// bind the start/stop control buttons
startButton.onclick = function() {
	// TODO "when the sequencer starts we send an array of note data to be played: "
	// 		8 counts |on/off|on/off|on/off|on/off|on/off|on/off|on/off|on/off| 
	//			=> checkbox array
	//		8 counts |frq Hz|frq Hz|frq Hz|frq Hz|frq Hz|frq Hz|frq Hz|frq Hz|
	//			=> get note+octave compare to JSON,
	//				return frequency of given note,
	//				pass it in our array
	// 
	//oscOne.start();
	checkSeqInputs();
}
stopButton.onclick = function() {
	//oscOne.stop();
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
	bpmVal = bpmSlider.value;
	bpmOutput.innerHTML = bpmVal;
	console.log(bpmVal);
}
bpmSlider.oninput();

octSlider.oninput = function() {
	octSelected = octSlider.value;
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
	noteID = noteSlID.replace( /^\D+/g, '');
	noteSlVal = self.value;
	console.log(noteSlID + " values: " + noteSlVal + "\n" + noteID);

	noteSelected = noteSliders[noteID].list.options[noteSlVal].value;
	seqNote[noteID].innerHTML = noteSliders[noteID].list.options[noteSlVal].value;
	noteOctSelected = noteSelected + octSelected;
	console.log(noteOctSelected);

	getFrequency();
}