import { FiRotateCw } from "react-icons/fi";
import { Link } from "react-router-dom";
import DecomposingTrees from "../../assets/svg/DecomposingTrees";




function Final() {
	
	const scrollToTop = () => {
		const element = document.getElementById("start")
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	}

	return (
		<>
			<div className="flex flex-col gap-4">
				<DecomposingTrees/>
				<p>ist eine begleitende Soundinstallation und ein digitales Vermittlungsangebot des Residenztheaters zur Produktion «Der Entrepreneur», einem Theaterstück von Kevin Rittberger, inszeniert von Nora Schlocker im Marstall.</p>
				<div className="flex items-center gap-2 cursor-pointer 
								">
					<a href="https://www.residenztheater.de/stuecke/detail/der-entrepreneur" className="font-display font-semibold border-b-2 flex items-center gap-1">
						INFO UND TICKETS
					</a>
				</div>
				<div className="flex items-center gap-2 cursor-pointer"
					onClick={scrollToTop}>
					<p className="font-display font-semibold border-b-2 flex items-center gap-1">
						NEU ANFANGEN
					</p>
				</div>
			</div>
	</>);
}

export default Final ;