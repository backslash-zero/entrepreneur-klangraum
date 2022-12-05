import { FiRotateCw } from "react-icons/fi";
import { Link } from "react-router-dom";
import DecomposingTrees from "../../assets/svg/DecomposingTrees";

function Final() {
	const scrollToTop = () => window.scrollTo(0, 0);
	return (
		<>
			<div className="flex flex-col gap-4">
				<DecomposingTrees/>
				<p>ist eine begleitende Soundinstallation und ein digitales Vermittlungsangebot des Residenztheaters zur Produktion «Der Entrepreneur», einem Theaterstück von Kevin Rittberger, inszeniert von Nora Schlocker im Marstall.</p>
				<div className="flex items-center gap-2 
								">
					<a href="https://www.residenztheater.de/stuecke/detail/der-entrepreneur" className="border-b-2 flex items-center gap-1">
						info und tickets
					</a>
				</div>
				<div className="flex items-center gap-2 font-semibold
								"
					onClick={scrollToTop}>
					<p className="border-b-2 flex items-center gap-1">
						neu anfangen
					</p>
				</div>
			</div>
	</>);
}

export default Final ;