import { useEffect, useRef } from "react";
import * as Tone from 'tone';
import ExampleSample from '../../assets/samples/example.mp3'


function MainSounds(
	{
		isPlaying,
	} 
) {
	// const sampler = useRef(null)
	const player = useRef(null)
	useEffect(() => {
		player.current = new Tone.Player(ExampleSample).toDestination()
	}, [])
	
	useEffect(() => {
		if (!isPlaying)
			return;
		player.current.start();
	}, [isPlaying])

	return ( <></> );
}

export default MainSounds;