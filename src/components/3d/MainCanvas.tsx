import { Canvas } from "@react-three/fiber";
import LogSpinner from "../commons/LogSpinner";
import Scroll from "../commons/Scroll";
import EntrLog from "./EntrLog";
import SmokeBackground from '../SmokeBackground'

interface MainCanvasProps {
	hasExperienceBegan: boolean,
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
	isVisibleStuck1: boolean,
	isVisibleStuck2: boolean,
	isVisibleStuck3: boolean,
	isVisibleStuck4: boolean,
	isVisibleQuote: boolean,
	isVisibleFinal: boolean
} 

function MainCanvas({ 
	hasExperienceBegan,
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
	isVisibleStuck1,
	isVisibleStuck2,
	isVisibleStuck3,
	isVisibleStuck4,
	isVisibleQuote,
	isVisibleFinal
}: MainCanvasProps) {

	var SpinnerOpacity = 0
	var TruncOpacity = 0
	var SmokeOpacity = 0

	// Spinner
	if (isVisibleStages1 ||
		isVisibleStages2 ||
		isVisibleStages3 ||
		isVisibleStages4 ||
		isVisibleStages5 ||
		isVisibleStages6 ||
		isVisibleStages7 ||
		isVisibleStages8 ||
		isVisibleStages9 ||
		isVisibleStages10)
		SpinnerOpacity = 1
	else
		SpinnerOpacity = 0
	
	// Trunc
	if (isVisibleIntro2 || isVisibleIntro3 )
		TruncOpacity = 1
	else
		TruncOpacity = 0
		
	// Smoke 
	if (isVisibleClimate1 || 
		isVisibleClimate2 || 
		isVisibleClimate3 || 
		isVisibleStuck1	||
		isVisibleStuck2	||
		isVisibleStuck3	||
		isVisibleStuck4	||
		isVisibleQuote	||
		isVisibleFinal)
		SmokeOpacity = 1
	else
		SmokeOpacity = 0
	
	return (
		<div className="fixed bottom-0 right-0
						w-full h-full
						z-10
						 transition-all duration-300">
			{
				<div className="absolute w-full h-full transition-opacity duration-1000"
					style={{ opacity: SmokeOpacity }}>
					<SmokeBackground moreSmoke={isVisibleClimate3 || 
												isVisibleStuck1	||
												isVisibleStuck2	||
												isVisibleStuck3	||
												isVisibleStuck4	||
												isVisibleQuote	||
									isVisibleFinal ? true : false
					}
						stuck={isVisibleStuck1	||
												isVisibleStuck2	||
												isVisibleStuck3	||
												isVisibleStuck4	||
												isVisibleQuote	||
									isVisibleFinal ? true : false}
						/>
				</div>
			}
			<Canvas
				className="transition-opacity z-0"
				style={{ opacity: TruncOpacity }}>
				<ambientLight />
				<group
					dispose={null}
					scale={
						isVisibleIntro1 ? 0.03 :
						isVisibleIntro2 ? 0.03 :
						isVisibleIntro3 ? 0.02 :
						0.02
					}
				>
					{
						<EntrLog isVisibleIntro3={isVisibleIntro3} isVisibleClimate={false} />
					}
				</group>
			</Canvas>
			<div className="transition-opacity duration-300 z-0"
				style={{ opacity: SpinnerOpacity }}>
				<LogSpinner></LogSpinner>
			</div>
			{
				!(isVisibleFinal || (isVisibleHero && !hasExperienceBegan)) &&
				<div className="
						absolute z-30
						w-full flex items-center justify-center
						bottom-8
					">
						<Scroll hero={isVisibleHero} />
				</div>
			}
		</div>
	 );
}	

export default MainCanvas;