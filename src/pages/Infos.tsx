
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
			<div className="w-full md:h-screen md:overflow-y-scroll
							md:flex md:items-center md:justify-center
							bg-forest-700 text-fluorange-500">
				<div className="w-full md:w-[720px] p-4 pt-24 md:pt-40
								text-white">
					<div className="flex flex-col gap-2">
						<div className="w-full md:w-80">
							<DecomposingTrees/>
						</div>
						<p>
							ist ein virtueller Klangraum des Residenztheaters als Teil der Produktion «Der Entrepreneur», ein Theaterstück von Kevin Rittberger, inszeniert von Nora Schlocker im Marstall.
						</p>
						<p>
							Premiere am 9. Dezember 2022
						</p>
						<a className="underline underline-offset-4" href="https://www.residenztheater.de/stuecke/detail/der-entrepreneur">INFO UND TICKETS</a>
					</div>
					<h2 className="text-2xl font-display mt-4 mb-2">48°01'29.9"N 11°32'09.1"E</h2>
					<p>
						Die Baumstämme, die Sie vor dem Marstall sehen, stammen aus dem <a className="underline underline-offset-4"href="https://goo.gl/maps/dwLM2KiF6jWZN9u87">Gründwalder Forst</a> und mussten aufgrund von Borkenkäferbefall gefällt werden.
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