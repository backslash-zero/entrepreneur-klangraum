import { FiHeadphones } from "react-icons/fi";
import MainButton from "../commons/MainButtons";
import DecomposingTrees from "../../assets/svg/DecomposingTrees"
interface HeroProps {
	StartTone : () => {}
}

function Hero({ StartTone } : HeroProps ) {
	return ( 
		<div className="relative h-full overflow-hidden">
			<div className="
						relative p-4 pl-2
						w-full
						flex items-start justify-start gap-4
						">
				<div className="w-14">
					<DecomposingTrees></DecomposingTrees>
				</div>
				<div className="flex-1
								relative
								w-full
								flex flex-col justify-between
								font-sans text-fluorange-500 ">
					<div className="flex flex-col gap-4">
						<div className="text-4xl">
							<FiHeadphones />
						</div>
						<p>Für ein besonders immersives Erlebnis verwenden Sie bitte Ihre Kopfhörer.</p>
						<p className="text-sm">Es werden keine Daten gespeichert.</p>
					</div>
				</div>
			</div>
			<div className="sticky bottom-8 left-60
							w-full 
							flex
						">
				<div className="w-[104px]"></div>
				<div className="w-full flex flex-col gap-4">
					<p>Ein virtuller Klangraum des Residenytheaters.</p>
					<MainButton StartTone={StartTone}/>
				</div>
			</div>
		</div>
	 );
}

export default Hero;