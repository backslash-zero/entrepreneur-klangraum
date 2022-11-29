import { FiHeadphones } from "react-icons/fi";
import MainButton from "../commons/MainButtons";
import DecomposingTrees from "../../assets/svg/DecomposingTrees"
import Scroll from "../commons/Scroll";
interface HeroProps {
	StartTone: () => {}
	hasExperienceBegan: boolean
}

function Hero({ StartTone, hasExperienceBegan } : HeroProps ) {
	return ( 
		<div className="relative h-full overflow-hidden
						text-base">
			<div className="relative h-full overflow-hidden">
				<div className="
							relative p-4 pl-2
							w-full
							h-full
							flex items-start justify-start gap-4
							">
					<div className="h-full">
						<DecomposingTrees></DecomposingTrees>
					</div>
					<div className="flex-1
									relative
									w-full
									h-full
									flex flex-col justify-between
									font-sans text-fluorange-500 ">
						<div className="flex flex-col gap-4">
							<div className="text-4xl">
								<FiHeadphones />
							</div>
							<p>Für ein besonders immersives Erlebnis verwenden Sie bitte Ihre Kopfhörer.</p>
							<p className="text-sm">Es werden keine Daten gespeichert.</p>
						</div>
				{
					!hasExperienceBegan &&
					<div className="
									w-full
									flex
								">
						<div className="w-full flex flex-col gap-4">
							<p>Ein virtuller Klangraum des Residenytheaters.</p>
									<MainButton StartTone={StartTone} />
						</div>
					</div>
				}
					</div>
				</div>
			</div>
			{
				hasExperienceBegan &&
				<Scroll />
			}
		</div>
	
	 );
}

export default Hero;