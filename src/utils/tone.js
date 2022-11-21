import * as Tone from 'tone';

const synth = new Tone.Synth().toDestination();

export const playScreens = (
	isPlaying,
	isVisibleFirst,
	isVisibleSecond,
	isVisibleThird,
) => {
	if (!isPlaying)
			return;
		const now = Tone.now()
		
	if (isVisibleFirst)
	{
		synth.triggerAttackRelease("C4", "8n", now + 0);
	}
	if (isVisibleSecond)
	{
		synth.triggerAttackRelease("D4", "8n", now + 0);
	}
	if (isVisibleThird)
	{
		synth.triggerAttackRelease("E4", "8n", now + 0);
	}
}