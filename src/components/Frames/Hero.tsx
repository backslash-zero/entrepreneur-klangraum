import { FiHeadphones } from "react-icons/fi";
import MainButton from "../commons/MainButtons";
import DecomposingTrees from "../../assets/svg/DecomposingTrees"
interface HeroProps {
	StartTone : () => {}
}

function Hero({ StartTone } : HeroProps ) {
	return ( 
		<div className="relative w-full h-full p-4">
			<div className="
						w-full h-full
						flex items-start justify-start gap-4
						">
			<div className="h-full w-14">
				<DecomposingTrees></DecomposingTrees>
			</div>
			<div className="flex-1
							relative
							h-full w-full
							flex flex-col justify-between
							font-sans text-fluorange-500 ">
				<div className="flex flex-col gap-4">
					<div className="text-4xl">
						<FiHeadphones />
					</div>
					<p>Für ein besonders immersives Erlebnis verwenden Sie bitte Ihre Kopfhörer.</p>
					<p className="text-sm">Es werden keine Daten gespeichert.</p>
				</div>
				<div className="sticky bottom-6 left-24
								w-full 
								flex flex-col gap-4
							">
					<p>Ein virtuller Klangraum des Residenytheaters.</p>
					<MainButton StartTone={StartTone}/>
				</div>
			</div>
			</div>
		</div>
	 );
}

export default Hero;