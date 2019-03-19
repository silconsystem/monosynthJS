/** 			adsr.js
	**/
// control elements

// value display elements
var attackOneVal,
	decayOneVal,
	sustainOneVal,
	releaseOneVal;

var attackTwoVal,
	decayTwoVal,
	sustainTwoVal,
	releaseTwoVal;

var fxChorus,
	fxReverb,
	fxDistortion;

var adsrOneSpans	= document.getElementById('adsr-1-control').getElementsByClassName('adsr-span');
var adsrTwoSpans	= document.getElementById('adsr-2-control').getElementsByClassName('adsr-span');

var fxSpans			= document.getElementById('effects').getElementsByClassName('fx-span');

// show slider value
function showValue(self) {
	var value 	= self.value;
	var	id_num	= self.id;
	var id_str	= self.id;
	id_num 		= id_num.replace(/^[^\d]*/,"").replace(/[^\d]*$/,"");
	id_str 		= id_str;

	if (id_num == 0 && id_str.match(/chorus/g)) {
		fxSpans[0].innerHTML = value;
		fxChorus = value;
		console.log("chorus: " + fxChorus);
	} else if (id_num == 0 && id_str.match(/reverb/g)) {
		fxSpans[1].innerHTML = value;
		fxReverb = value;
		console.log("reverb: " + fxReverb);
	} else if (id_num == 0 && id_str.match(/distortion/g)) {
		fxSpans[2].innerHTML = value;
		fxDistortion = value;
		console.log("distortion: " + fxDistortion);
	}

	if (id_num == 1 && id_str.match(/attack/g)) {
		adsrOneSpans[0].innerHTML = value;
		attackOneVal = value;
		console.log("attack-1: " + attackOneVal);
	} else if (id_num == 1 && id_str.match(/decay/g)) {
		adsrOneSpans[1].innerHTML = value;
		decayOneVal = value;
		console.log("decay-1: " + decayOneVal);
	} else if (id_num == 1 && id_str.match(/sustain/g)) {
		adsrOneSpans[2].innerHTML = value;
		sustainOneVal = value;
		console.log("sustain-1: " + sustainOneVal);
	} else if (id_num == 1 && id_str.match(/release/g)) {
		adsrOneSpans[3].innerHTML = value;
		releaseOneVal = value;
		console.log("release-1: " + releaseOneVal);
	}

	if (id_num == 2 && id_str.match(/attack/g)) {
		adsrTwoSpans[0].innerHTML = value;
		attackTwoVal = value;
		console.log("attack-2: " + attackTwoVal);
	} else if (id_num == 2 && id_str.match(/decay/g)) {
		adsrTwoSpans[1].innerHTML = value;
		decayTwoVal = value;
		console.log("decay-2: " + decayTwoVal);
	} else if (id_num == 2 && id_str.match(/sustain/g)) {
		adsrTwoSpans[2].innerHTML = value;
		sustainTwoVal = value;
		console.log("sustain-2: " + sustainTwoVal);
	} else if (id_num == 2 && id_str.match(/release/g)) {
		adsrTwoSpans[3].innerHTML = value;
		releaseTwoVal = value;
		console.log("release-2: " + releaseTwoVal);
	}

	console.log("value: " + value);
	console.log("id_num: " + id_num);
	console.log("id_str: " + id_str);
}