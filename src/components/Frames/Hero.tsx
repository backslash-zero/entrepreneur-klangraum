import { FiHeadphones } from "react-icons/fi";
import MainButton from "../commons/MainButtons";
import DecomposingTrees from "../../assets/svg/DecomposingTrees"

interface HeroProps {
	StartTone: () => {}
	hasExperienceBegan: boolean
}

function Hero({ StartTone, hasExperienceBegan }: HeroProps) {
	return ( 
		<div className="relative h-full overflow-hidden
						
						font-sans text-fluorange-500
						">
			<div className="relative h-full 
							md:flex md:items-center md:justify-center
							overflow-hidden">
				<div className="
							relative
							w-full md:w-[720px] md:h-auto
							h-full
							flex flex-col 
							items-start justify-start  md:justify-center
							gap-8
							">
					<div className="w-full">
						<DecomposingTrees/>
					</div>
					<p>Ein virtueller Klangraum des Residenztheaters.</p>
					<div className="flex-1 md:flex-0 md:h-auto
									relative
									w-full
									h-full
									flex flex-col justify-between md:justify-center md:items-start md:gap-8
									">
						<div className="flex flex-col gap-4">
							<div className="text-4xl">
								<FiHeadphones />
							</div>
							<p>Für ein besonders immersives Erlebnis verwenden Sie bitte Ihre Kopfhörer.</p>
							<p className="text-xs italic">Es werden keine Daten gespeichert.</p>
						</div>
					{
						!hasExperienceBegan &&
						<div className="
										w-full md:w-80
										flex
									">
							<div className="w-full flex flex-col items-center gap-4">
										<MainButton StartTone={StartTone} />
							</div>
						</div>
					}
					</div>
				</div>
			</div>
		</div>
	
	 );
}

export default Hero;