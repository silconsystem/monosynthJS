/** 			sequencer.js
	**/
/**								--- GLOBALS ---
		**/		
// control elements
var bpmSlider = document.getElementById('tempo-slider');

// note selection sliders 
var noteSliders = document.querySelectorAll('.vertical-range');
var ids = Array.prototype.map.call(noteSliders, function(element) {
	// return array of id's
	return element.id;
});

// output span
var bpmOutput = document.getElementById('tempo');
var seqNote = document.querySelectorAll('.seq-note');

var bpmVal,
	noteID,
	noteSlVal;

// controller functions
bpmSlider.oninput = function() {
	bpmVal = bpmSlider.value;
	bpmOutput.innerHTML = bpmVal;
	console.log(bpmVal);
}
bpmSlider.oninput();

function getValues(self) {
	var noteSlID = self.id;
	// remove all the text and keep the number as index
	noteID = noteSlID.replace( /^\D+/g, '');
	noteSlVal = self.value;
	console.log(noteSlID + " values: " + noteSlVal + "\n" + noteID);

	seqNote[noteID].innerHTML = noteSliders[noteID].list.options[noteSlVal].value;
}