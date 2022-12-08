import { useEffect, useRef, useState } from "react";
import * as Tone from "tone";
import Opening from "../../assets/samples/opening.mp3";
import Forest from "../../assets/samples/forest.mp3";
import Sun from "../../assets/samples/sun.mp3";
import EndMusic from "../../assets/samples/endmusic.mp3";
import Tree1 from "../../assets/samples/tree1.mp3";
import Tree2 from "../../assets/samples/tree2.mp3";
import Tree3 from "../../assets/samples/tree3.mp3";
import Tree4 from "../../assets/samples/tree4.mp3";
import Tree5 from "../../assets/samples/tree5.mp3";
import Tree6 from "../../assets/samples/tree6.mp3";
import Tree7 from "../../assets/samples/tree7.mp3";
import Strings from "../../assets/samples/strings.mp3";
import Tutti from "../../assets/samples/tutti.mp3";

function FrameSounds({
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
  isVisibleFinal,
  isPlaying,
  isMute
}) {
  const [players, setPlayers] = useState([]);
  const opening = useRef(null);
  const forest = useRef(null);
  const sun = useRef(null);
  const endMusic = useRef(null);
  const tree1 = useRef(null);
  const tree2 = useRef(null);
  const tree3 = useRef(null);
  const tree4 = useRef(null);
  const tree5 = useRef(null);
  const tree6 = useRef(null);
  const tree7 = useRef(null);
  const strings = useRef(null);
  const tutti = useRef(null);


  useEffect(() => {
    console.log("isMute: "+ isMute)
  }, [isMute])

  useEffect(() => {
    opening.current = new Tone.Player(Opening).toDestination();
	opening.current.loop = true
    forest.current = new Tone.Player(Forest).toDestination();
    forest.current.volume.value = -20;
	forest.current.loop = true
    sun.current = new Tone.Player(Sun).toDestination();
	sun.current.loop = true
	forest.current.volume.value = -6;
    endMusic.current = new Tone.Player(EndMusic).toDestination();
    tree1.current = new Tone.Player(Tree1).toDestination();
	tree1.current.loop = true
    tree2.current = new Tone.Player(Tree2).toDestination();
	tree2.current.loop = true
    tree3.current = new Tone.Player(Tree3).toDestination();
	tree3.current.loop = true
    tree4.current = new Tone.Player(Tree4).toDestination();
	tree4.current.loop = true
    tree5.current = new Tone.Player(Tree5).toDestination();
	tree5.current.loop = true
    tree6.current = new Tone.Player(Tree6).toDestination();
	tree6.current.loop = true
    tree7.current = new Tone.Player(Tree7).toDestination();
	tree7.current.loop = true
    strings.current = new Tone.Player(Strings).toDestination();
	strings.current.loop = true
    tutti.current = new Tone.Player(Tutti).toDestination();
	tutti.current.loop = true
    setPlayers([
      opening.current,
      forest.current,
      sun.current,
      endMusic.current,
      tree1.current,
      tree2.current,
      tree3.current,
      tree4.current,
      tree5.current,
      tree6.current,
      tree7.current,
      strings.current,
      tutti.current,
    ]);
  }, []);

  useEffect(() => {
    const softStop = (p) => {
      const lastVolume = p.volume.value;
      if (p.state === "started") {
        p.volume.exponentialRampTo(-120, 0.5);
      }
      setTimeout(() => {
        p.stop();
        p.volume.value = lastVolume;
      }, 550);
    };

    const play = (p) => {
      if (p.current.state === "stopped") {
        p.current.start();
      }
    };

    const playOnly = (sound) => {
      players
        .filter((p) => p !== sound.current)
        .forEach((p) => {
          softStop(p);
        });
      play(sound);
    };

	  const isIncluded = (sounds, p) => sounds.find((sound) => p === sound.current);

    const playMultiple = (sounds) => {
      const soundsToStop = players.filter((p) => !isIncluded(sounds, p))
	    soundsToStop.forEach((p) => {
		  softStop(p);
	  })

      sounds.forEach((sound) => play(sound));
    };

    if (!isPlaying) return;
    
    // OPENING
    if (isVisibleHero) {
      playOnly(opening);
    }
    if (isVisibleIntro3) {
      playOnly(opening);
    }

    // DECOMPOSING
    if (isVisibleStages1) {
      playOnly(tree1);
    }
    if (isVisibleStages2) {
      playOnly(tree2);
    }
    if (isVisibleStages3) {
      playOnly(tree3);
    }
    if (isVisibleStages4) {
      playOnly(tree4);
    }
    if (isVisibleStages5) {
      playOnly(tree5);
    }
    if (isVisibleStages6) {

    }
    if (isVisibleStages7) {
      playOnly(tree7);
    }
    if (isVisibleStages8) {
      playOnly(tutti);
    }
    if (isVisibleStages9) {
    }
    if (isVisibleStages10) {
	  playOnly(tutti);
    }

    // CLIMATE
    if (isVisibleClimate1) {
      playOnly(forest);
    }

    if (isVisibleClimate2) {
      playMultiple([forest, sun]);
    }
    // END
    if (isVisibleClimate3) {
      playMultiple([endMusic, forest, sun]);
    }
    if (isVisibleFinal) {
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
    isVisibleFinal,
    isPlaying,
    isMute,
    players
  ]);


  useEffect(() => {
    if (isMute && isPlaying)
    	Tone.Destination.mute = true;
		else if (isPlaying)
		  Tone.Destination.mute = false;
   },[isMute, isPlaying])

  return <></>;
}

export default FrameSounds;
