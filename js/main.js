/** 			main.js
	**/
var waveSelect = document.getElementById('waveselect');

waveSelect.oninput = function() {
  document.getElementById('selected-waveform').innerHTML = waveSelect.value;
  waveSelect.value = '';
}

