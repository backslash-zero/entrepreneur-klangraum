
import { useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";
import DecomposingTrees from "../assets/svg/DecomposingTrees";
import Person from "../components/Infos/Person";
import ScrollToTop from "../components/utils/ScrollToTop";

function Infos() {
	useEffect(()  => {
	    document.body.classList.add('bg-forest');

	    return () => {
	        document.body.classList.remove('bg-forest');
	    };
	});
	return (
		<>
			<ScrollToTop/>
			<div className="w-full bg-forest-700 text-fluorange-500">
				<div className="w-full p-4 pt-24
								text-white">
					<div className="flex flex-col gap-2">
						<DecomposingTrees/>
						<p>
							ist eine begleitende Soundinstallation und ein digitales Vermittlungsangebot des Residenztheaters zur Produktion «Der Entrepreneur», einem Theaterstück von Kevin Rittberger, inszeniert von Nora Schlocker im Marstall.
						</p>
						<a className="underline underline-offset-4" href="https://www.residenztheater.de/stuecke/detail/der-entrepreneur">info und tickets</a>
						<p>
								
						</p>
					</div>
					<h2 className="text-2xl font-display mt-4 mb-2">48°01'32.2"N 11°32'10.4"E</h2>
					<p>
						Die Baumstämme, die Sie vor dem Residenztheater sehen können, wurden aus einem bayerischen Wald an genau <a className="underline underline-offset-4"href="https://osm.org/go/0JAacUQ-?m=">diese Stelle</a> gebracht.
					</p>
					<h2 className="text-2xl font-display mt-4 mb-2">Credits</h2>
					<div className="flex flex-col gap-2">
						<Person position="Musik und Sound"				name="Yoav Pasovsky" />
						<Person position="Design und Development"		name="Célestin Meunier"	link="https://celest.in/"/>
						<Person position="Design"						name="Helin Ulas"		link="https://helinulas.info/"/>
						<Person position="Digital-Dramaturgie"			name="Ilja Mirsky" />
						<Person position="Dramaturgie"					name="Ewald Palmetshoher" />
						<Person position="Wissenschaftliche Beratung" name="Sebastian Seibold, Technische Universität München" />
					</div>	
					<h2 className="text-2xl font-display mt-4 mb-2">Privacy</h2>
					<p>Es werden keine Daten gespeichert.</p>
					<a href="https://www.residenztheater.de/impressum"
						className="flex items-center underline underline-offset-4">
						<h2 className="text-2xl font-display mt-4 mb-2">Impressum</h2>
					</a>
				</div>
			</div>
		</>
	);
}

export default Infos;