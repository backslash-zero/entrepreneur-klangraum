import { useEffect, useRef } from "react";
import * as Tone from 'tone';
import ExampleSample from '../../assets/samples/example.mp3'


function ToneSounds(
	{
		isVisibleFirst,
		isVisibleSecond,
		isVisibleThird,
		isPlaying,
	} 
) {
	// const sampler = useRef(null)
	const synth  = useRef(null)

	useEffect(() => {
		synth.current	= new Tone.Synth().toDestination();
		// sampler.current	= new Tone.Sampler(
		// {
		// 	// LoadSamples here	
		// 	ExampleSample, // A1
		// },
      	// {
		// 	onload: () =>
		// 	{
		// 		//	setLoaded(true);
		// 	}
		// }
    	// ).toDestination();
	}, [])
	

	useEffect(() => {
		if (!isPlaying)
			return;
		const now = Tone.now()
		if (isVisibleFirst)
		{
			synth.current.triggerAttackRelease("C4", "8n", now + 0);
		}
		if (isVisibleSecond)
		{
			synth.current.triggerAttackRelease("D4", "8n", now + 0);
		}
		if (isVisibleThird)
		{
			synth.current.triggerAttackRelease("E4", "8n", now + 0);
		}
	},[	isVisibleFirst,
		isVisibleSecond,
		isVisibleThird,
		isPlaying,])

	return ( <></> );
}

export default ToneSounds;