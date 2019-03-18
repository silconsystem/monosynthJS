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