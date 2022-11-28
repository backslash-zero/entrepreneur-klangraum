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

interface HomeProps {
	isPlaying : boolean,
	hasExperienceBegan : boolean,
	setHasExperienceBegan : Dispatch<SetStateAction<boolean>>,
	StartTone : () => {}
}

function Home({ 
	StartTone, 
	isPlaying, 
	hasExperienceBegan, 
	setHasExperienceBegan
}: HomeProps) {
	
	const experienceBegin = useRef<null | HTMLDivElement>(null)
	

	useEffect(() => {
		// console.log(isPlaying, hasExperienceBegan)
		if (isPlaying && !hasExperienceBegan)
		{
			if (experienceBegin && experienceBegin.current)
			{
				experienceBegin.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
				setHasExperienceBegan(true)
			}
		}

	}, [isPlaying, hasExperienceBegan, setHasExperienceBegan])

	const [isVisibleHero, setIsVisibleHero] = useState(false)

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
	
	const [climateSlider, setClimateSlider] = useState(2)
	
	return (
		<>
		<MainCanvas
			isPlaying={isPlaying}
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
			isVisibleClimate3={isVisibleClimate3}/>
		<Timeline
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
	
		<div className='w-screen h-full snap-y snap-mandatory snap-always scroll-smooth 
						bg-soil-400 text-fluorange-500 '>
			<FrameSounds
							isPlaying={isPlaying}
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

							climateSlider={climateSlider}
			
			/>	
			<ScreenFrame setVisible={setIsVisibleHero}>
			<Hero StartTone={StartTone}/>
			</ScreenFrame>
			{
				isPlaying &&
				<div ref={experienceBegin} className="w-full">
					{/* intro */}
					<ScreenFrame setVisible={setIsVisibleIntro1}>
						<Intro1/>
					</ScreenFrame>
					<ScreenFrame setVisible={setIsVisibleIntro2}>
						<Intro2/>
					</ScreenFrame>
					<ScreenFrame setVisible={setIsVisibleIntro3}>
						<Intro3/>
					</ScreenFrame>
					{/* Stages */}
					<ScreenFrame setVisible={setIsVisibleStages1}>
						<Stages1/>
					</ScreenFrame>
					<ScreenFrame setVisible={setIsVisibleStages2}>
						<Stages2/>
					</ScreenFrame>
					<ScreenFrame setVisible={setIsVisibleStages3}>
						<Stages3/>
					</ScreenFrame>
					<ScreenFrame setVisible={setIsVisibleStages4}>
						<Stages4/>
					</ScreenFrame>
					<ScreenFrame setVisible={setIsVisibleStages5}>
						<Stages5/>
					</ScreenFrame>
					<ScreenFrame setVisible={setIsVisibleStages6}>
						<Stages6/>
					</ScreenFrame>
					<ScreenFrame setVisible={setIsVisibleStages7}>
						<Stages7/>
					</ScreenFrame>
					<ScreenFrame setVisible={setIsVisibleStages8}>
						<Stages8/>
					</ScreenFrame>
					<ScreenFrame setVisible={setIsVisibleStages9}>
						<Stages9/>
					</ScreenFrame>
					<ScreenFrame setVisible={setIsVisibleStages10}>
						<Stages10/>
					</ScreenFrame>
					{/* Climate */}
					<ScreenFrame setVisible={setIsVisibleClimate1}>
						<Climate1/>
					</ScreenFrame>
					<ScreenFrame setVisible={setIsVisibleClimate2}>
						<Climate2/>
					</ScreenFrame>
					<ScreenFrame setVisible={setIsVisibleClimate3}>
						<Climate3 setClimateSlider={setClimateSlider}/>
					</ScreenFrame>	
				</div>
			}
			</div>
		</>	);
}

export default Home;