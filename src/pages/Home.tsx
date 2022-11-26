import { useEffect, useRef, useState } from "react";
import Hero from "../components/Frames/Hero";
import ScreenFrame from "../components/Frames/ScreenFrame";
import FrameSounds from "../components/ToneSounds/FrameSounds";

interface HomeProps {
	isPlaying : boolean
	StartTone : () => {}
}

function Home({ StartTone, isPlaying }: HomeProps) {
	
	const experienceBegin = useRef<null | HTMLDivElement>(null)
	
	useEffect(() => {
		const experienceBeginScroll = () => {
			if (experienceBegin && experienceBegin.current && isPlaying)
				experienceBegin.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
		}
		if (isPlaying)
			experienceBeginScroll()
	}, [isPlaying])

	const [isVisibleHero, setIsVisibleHero] = useState(false)
	const [isVisibleIntro1, setIsVisibleIntro1] = useState(false)
	const [isVisibleIntro2, setIsVisibleIntro2] = useState(false)
	const [isVisibleIntro3, setIsVisibleIntro3] = useState(false)
	

	
	return (
	
		<div className='w-screen h-full snap-y snap-mandatory snap-always scroll-smooth 
						bg-soil-400 text-fluorange-500 '>
			<FrameSounds
							isPlaying={isPlaying}
							isVisibleHero={isVisibleHero}
							isVisibleIntro1={isVisibleIntro1}
							isVisibleIntro2={isVisibleIntro2}
							isVisibleIntro3={isVisibleIntro3}
			
			/>	
			<ScreenFrame setVisible={setIsVisibleHero}>
			<Hero StartTone={StartTone}/>
			</ScreenFrame>
			{
				isPlaying &&
				<div ref={experienceBegin} className="w-full">
					<ScreenFrame setVisible={setIsVisibleIntro1}>
					<p>First</p>
					</ScreenFrame>
					<ScreenFrame setVisible={setIsVisibleIntro2}>
					<p>Second</p>
					</ScreenFrame>
					<ScreenFrame setVisible={setIsVisibleIntro3}>
					<p>Third</p>
					</ScreenFrame>
				</div>
			}
    </div>);
}

export default Home;