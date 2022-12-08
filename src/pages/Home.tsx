import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

// Components
import Hero from "../components/Frames/Hero";

import Intro1 from "../components/Frames/Intro/Intro1";
import Intro2 from "../components/Frames/Intro/Intro2";
import Intro3 from "../components/Frames/Intro/Intro3";

import Stages1 from "../components/Frames/Stages/Stages1";
import Stages2 from "../components/Frames/Stages/Stages2";
import Stages3 from "../components/Frames/Stages/Stages3";
import Stages4 from "../components/Frames/Stages/Stages4";
import Stages5 from "../components/Frames/Stages/Stages5";
import Stages6 from "../components/Frames/Stages/Stages6";
import Stages7 from "../components/Frames/Stages/Stages7";
import Stages8 from "../components/Frames/Stages/Stages8";
import Stages9 from "../components/Frames/Stages/Stages9";
import Stages10 from "../components/Frames/Stages/Stages10";

import Climate1 from "../components/Frames/Climate/Climate1";
import Climate2 from "../components/Frames/Climate/Climate2";
import Climate3 from "../components/Frames/Climate/Climate3";

import ScreenFrame from "../components/Frames/ScreenFrame";
import FrameSounds from "../components/ToneSounds/FrameSounds";
import Timeline from "../components/NavBar/Timeline";
import MainCanvas from "../components/3d/MainCanvas";
import Final from "../components/Frames/Final";

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

import Infos from "./Infos";

interface HomeProps {
	isPlaying: boolean,
	isMute: boolean
	hasExperienceBegan : boolean,
	setHasExperienceBegan : Dispatch<SetStateAction<boolean>>,
	StartTone: () => {},
	isVisibleHero : boolean,
	setIsVisibleHero: Dispatch<SetStateAction<boolean>>,
	infosCollapsed: boolean
}

function Home({ 
	StartTone, 
	isPlaying, 
	isMute, 
	hasExperienceBegan, 
	setHasExperienceBegan,
	isVisibleHero,
	setIsVisibleHero,
	infosCollapsed
}: HomeProps) {
	
	const experienceBegin = useRef<null | HTMLDivElement>(null)
	

	useEffect(() => {
		if (isPlaying && !hasExperienceBegan)
		{
			if (experienceBegin && experienceBegin.current)
				setHasExperienceBegan(true)
		}

	}, [isPlaying, hasExperienceBegan, setHasExperienceBegan])


	const [isVisibleIntro1, setIsVisibleIntro1] = useState(false)
	const [isVisibleIntro2, setIsVisibleIntro2] = useState(false)
	const [isVisibleIntro3, setIsVisibleIntro3] = useState(false)
	
	const [isVisibleStages1, setIsVisibleStages1] = useState(false)
	const [isVisibleStages2, setIsVisibleStages2] = useState(false)
	const [isVisibleStages3, setIsVisibleStages3] = useState(false)
	const [isVisibleStages4, setIsVisibleStages4] = useState(false)
	const [isVisibleStages5, setIsVisibleStages5] = useState(false)
	const [isVisibleStages6, setIsVisibleStages6] = useState(false)
	const [isVisibleStages7, setIsVisibleStages7] = useState(false)
	const [isVisibleStages8, setIsVisibleStages8] = useState(false)
	const [isVisibleStages9, setIsVisibleStages9] = useState(false)
	const [isVisibleStages10, setIsVisibleStages10] = useState(false)
	
	const [isVisibleClimate1, setIsVisibleClimate1] = useState(false)
	const [isVisibleClimate2, setIsVisibleClimate2] = useState(false)
	const [isVisibleClimate3, setIsVisibleClimate3] = useState(false)
	
	const [isVisibleFinal, setIsVisibleFinal] = useState(false)
	
	const [climateSlider, setClimateSlider] = useState(0)
	
	return (
		<>
		<Timeline
			isVisibleIntro3={isVisibleIntro3}
			isVisibleStages1={isVisibleStages1}
			isVisibleStages2={isVisibleStages2}
			isVisibleStages3={isVisibleStages3}
			isVisibleStages4={isVisibleStages4}
			isVisibleStages5={isVisibleStages5}
			isVisibleStages6={isVisibleStages6}
			isVisibleStages7={isVisibleStages7}
			isVisibleStages8={isVisibleStages8}
			isVisibleStages9={isVisibleStages9}
			isVisibleStages10={isVisibleStages10}
		/>
		<div className='relative w-screen h-full
						bg-soil-400 text-fluorange-500'>
			{
					infosCollapsed &&
					<Infos/>
			}
			<FrameSounds
							isPlaying={isPlaying}
							isMute={isMute}

							isVisibleHero={isVisibleHero}
				
							isVisibleIntro1={isVisibleIntro1}
							isVisibleIntro2={isVisibleIntro2}
							isVisibleIntro3={isVisibleIntro3}
				
							isVisibleStages1={isVisibleStages1}
							isVisibleStages2={isVisibleStages2}
							isVisibleStages3={isVisibleStages3}
							isVisibleStages4={isVisibleStages4}
							isVisibleStages5={isVisibleStages5}
							isVisibleStages6={isVisibleStages6}
							isVisibleStages7={isVisibleStages7}
							isVisibleStages8={isVisibleStages8}
							isVisibleStages9={isVisibleStages9}
							isVisibleStages10={isVisibleStages10}

							isVisibleClimate1={isVisibleClimate1}
							isVisibleClimate2={isVisibleClimate2}
							isVisibleClimate3={isVisibleClimate3}
							
							isVisibleFinal={isVisibleFinal}
			
			/>
					
			<ScreenFrame setVisible={setIsVisibleHero}> 
					<Hero StartTone={StartTone} hasExperienceBegan={hasExperienceBegan} />
			</ScreenFrame>
			{
				isPlaying &&
				<div ref={experienceBegin} className="	h-full w-full 
															snap-y snap-mandatory snap-always
															scroll-smooth ">
							{/* intro */}
						<div id="start" ></div>
						<ScreenFrame setVisible={setIsVisibleIntro1} layout="top" theme="default">
							<Intro1/>
						</ScreenFrame>
						<ScreenFrame setVisible={setIsVisibleIntro2} layout="top" theme="default">
							<Intro2/>
						</ScreenFrame>
						<ScreenFrame setVisible={setIsVisibleIntro3} layout="top" theme="default">
							<Intro3/>
						</ScreenFrame>
						{/* Stages */}
						<ScreenFrame setVisible={setIsVisibleStages1} layout="center" theme="dark">
							<Stages1 />
						</ScreenFrame>
						<ScreenFrame setVisible={setIsVisibleStages2} layout="center" theme="dark">
							<Stages2 />
						</ScreenFrame>
						<ScreenFrame setVisible={setIsVisibleStages3} layout="center" theme="dark">
							<Stages3 />
						</ScreenFrame>
						<ScreenFrame setVisible={setIsVisibleStages4} layout="center" theme="dark">
							<Stages4 />
						</ScreenFrame>
						<ScreenFrame setVisible={setIsVisibleStages5} layout="center" theme="dark">
							<Stages5 />
						</ScreenFrame>
						<ScreenFrame setVisible={setIsVisibleStages6} layout="center" theme="dark">
							<Stages6 />
						</ScreenFrame>
						<ScreenFrame setVisible={setIsVisibleStages7} layout="center" theme="dark">
							<Stages7 />
						</ScreenFrame>
						<ScreenFrame setVisible={setIsVisibleStages8} layout="center" theme="dark">
							<Stages8 />
						</ScreenFrame>
						<ScreenFrame setVisible={setIsVisibleStages9} layout="center" theme="dark">
							<Stages9 />
						</ScreenFrame>
						<ScreenFrame setVisible={setIsVisibleStages10} layout="center" theme="dark">
							<Stages10 />
						</ScreenFrame>
						{/* Climate */}
						<ScreenFrame setVisible={setIsVisibleClimate1} theme="sun">
							<Climate1/>
						</ScreenFrame>
						<ScreenFrame setVisible={setIsVisibleClimate2} theme="sun">
							<Climate2/>
						</ScreenFrame>
						<ScreenFrame setVisible={setIsVisibleClimate3} theme="sun">
							<Climate3 setClimateSlider={setClimateSlider} climateSlider={climateSlider} />
						</ScreenFrame>	
						<ScreenFrame setVisible={setIsVisibleFinal} theme="sun">
							<Final />
						</ScreenFrame>	
					</div>
			}
			</div>
			<MainCanvas
				hasExperienceBegan={hasExperienceBegan}
				climateSlider={climateSlider}
				isVisibleHero={isVisibleHero}
				isVisibleIntro1={isVisibleIntro1}
				isVisibleIntro2={isVisibleIntro2}
				isVisibleIntro3={isVisibleIntro3}
				isVisibleStages1={isVisibleStages1}
				isVisibleStages2={isVisibleStages2}
				isVisibleStages3={isVisibleStages3}
				isVisibleStages4={isVisibleStages4}
				isVisibleStages5={isVisibleStages5}
				isVisibleStages6={isVisibleStages6}
				isVisibleStages7={isVisibleStages7}
				isVisibleStages8={isVisibleStages8}
				isVisibleStages9={isVisibleStages9}
				isVisibleStages10={isVisibleStages10}
				isVisibleClimate1={isVisibleClimate1}
				isVisibleClimate2={isVisibleClimate2}
				isVisibleClimate3={isVisibleClimate3}
				isVisibleFinal={isVisibleFinal}
				/>
			</>	);
}

export default Home;