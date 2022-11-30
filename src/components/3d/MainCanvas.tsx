import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import EntrLog from "./EntrLog";
import LogHandler from "./LogHandler";
import WoodLog from "./WoodLog";

interface MainCanvasProps {
	isPlaying: boolean,
	isMute: boolean,
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
	isMute,
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

	return (
		<div className="fixed bottom-0 right-0
						w-full h-full
						z-0
						 transition-all duration-300">
			<Canvas>
				<ambientLight />
				<group
					dispose={null}
					scale={
						isVisibleIntro1 ? 0.008 :
						isVisibleIntro2 ? 0.03 :
						isVisibleIntro3 ? 0.02 :
						0.01
					}
				>
					{
						isVisibleIntro1 && 
						<WoodLog count={
							10
						} />
					}
					{
						(isVisibleIntro2 || isVisibleIntro3) && 
						<EntrLog isVisibleIntro3={isVisibleIntro3}/>
					}
				</group>
			</Canvas>
			{

				(	isVisibleStages1 ||
					isVisibleStages2 ||
					isVisibleStages3 ||
					isVisibleStages4 ||
					isVisibleStages5 ||
					isVisibleStages6 ||
					isVisibleStages7 ||
					isVisibleStages8 ||
					isVisibleStages9 ||
					isVisibleStages10
				) &&
				<div className="
						w-[120px] h-[120px]
						absolute bottom-[16px] right-[16px] z-0">
						<div className="relative w-full h-full">
							<Canvas >
								<ambientLight />
								<group
									scale={0.048} 
									position={[0,0,-4]}
									rotation={[31, 0, 0]}>
									<EntrLog/>
								</group>
							</Canvas>
						</div>
					</div>

			}
		</div>
	 );
}	

export default MainCanvas;