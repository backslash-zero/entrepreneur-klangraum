import { useEffect, useRef } from "react";
import * as Tone from 'tone';


function FrameSounds(
	{
		isVisibleHero,
		isVisibleIntro1,
		isVisibleIntro2,
		isVisibleIntro3,
		isVisibleStages1,
		isVisibleStages2,
		isVisibleStages3,
		isVisibleStages4,
		isVisibleStages5,
		isVisibleStages6,
		isVisibleStages7,
		isVisibleStages8,
		isVisibleStages9,
		isVisibleStages10,
		isVisibleClimate1,
		isVisibleClimate2,
		isVisibleClimate3,
		isPlaying
	} 
) {
	// const sampler = useRef(null)
	const synth  = useRef(null)
	useEffect(() => {
		synth.current = new Tone.Synth().toDestination();
	}, [])
	
	useEffect(() => {
		if (!isPlaying)
			return;
		const now = Tone.now()
		if (isVisibleHero)
		{
			synth.current.triggerAttackRelease("C4", "8n", now + 0);
		}
		if (isVisibleIntro1)
		{
			synth.current.triggerAttackRelease("C4", "8n", now + 0);
		}
		if (isVisibleIntro2)
		{
			synth.current.triggerAttackRelease("C4", "8n", now + 0);
		}
	}, [
		isVisibleHero,
		isVisibleIntro1,
		isVisibleIntro2,
		isVisibleIntro3,
		isVisibleStages1,
		isVisibleStages2,
		isVisibleStages3,
		isVisibleStages4,
		isVisibleStages5,
		isVisibleStages6,
		isVisibleStages7,
		isVisibleStages8,
		isVisibleStages9,
		isVisibleStages10,
		isVisibleClimate1,
		isVisibleClimate2,
		isVisibleClimate3,
		isPlaying
	])

	return ( <></> );
}

export default FrameSounds;