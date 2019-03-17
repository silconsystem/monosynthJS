/** 			oscillators.js
	**/
/**				 Globals				**/
// range input for osc one
var oscOneFreqInput = document.getElementById('osc-1-freq-input');
var oscOneGainInput = document.getElementById('osc-1-gain-input');

// the two oscillators
var oscOne = new Tone.Oscillator({
	"type" : "sine",
	"frequency" : 440,
	"volume" : -16
}).toMaster();
var oscTwo = new Tone.Oscillator({
	"type" : "sine",
	"frequency" : 440,
	"volume" : -16
}).toMaster();