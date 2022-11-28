import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useState } from "react";
import LogModel from "./LogModel";

interface MainCanvasProps {
	isPlaying: boolean,
	climateSlider?: number,
	isVisibleHero: boolean,
	isVisibleIntro1: boolean,
	isVisibleIntro2: boolean,
	isVisibleIntro3: boolean,
	isVisibleStages1: boolean,
	isVisibleStages2: boolean,
	isVisibleStages3: boolean,
	isVisibleStages4: boolean,
	isVisibleStages5: boolean,
	isVisibleStages6: boolean,
	isVisibleStages7: boolean,
	isVisibleStages8: boolean,
	isVisibleStages9: boolean,
	isVisibleStages10: boolean,
	isVisibleClimate1: boolean,
	isVisibleClimate2: boolean,
	isVisibleClimate3: boolean,
} 

function MainCanvas({ 
	isPlaying,
	climateSlider,
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
}: MainCanvasProps) {

	const [size, setSize] = useState("100%")

	// Rotate when isPlaying

	// Scale to bottom corner in State phase
	useEffect(() => {
		if (
			isVisibleHero ||
			isVisibleIntro1 ||
			isVisibleIntro2 ||
			isVisibleIntro3 ||
			isVisibleClimate1 ||
			isVisibleClimate2 ||
			isVisibleClimate3
		)
			setSize("100%")
		else
			setSize("25%")
	},[	isVisibleHero,
		isVisibleIntro1,
		isVisibleIntro2,
		isVisibleIntro3,
		isVisibleClimate1,
		isVisibleClimate2,
		isVisibleClimate3,])
	// Glass shader when Climate
	// Slider climate affects woods

	return (
		<div className="fixed bottom-0 right-0
						w-full h-full
						 z-0
						 transition-all duration-300" style={{ width: size, height: size}
} >
			<Canvas>
				<ambientLight />
				<LogModel isPlaying={isPlaying} />
			</Canvas>
		</div>
	 );
}	

export default MainCanvas;