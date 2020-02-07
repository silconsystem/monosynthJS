/**				
									visualiser.js

			- graphic display of oscillator waveforms
			- made with nexus UI oscilloscope

	**/

		oscilloscope = new Nexus.Oscilloscope('#graphic-one');
		oscilloscope.connect(Tone.Master);
		oscOne.connect(Tone.Master);

		//mute.on('change', function(v) {
		  
		  //if(v) Tone.Master.mute = false;
		  //else Tone.Master.mute = true;
		//});
