import Person from "../components/Infos/Person";

function Infos() {
	return (

		<div className="w-full h-full bg-forest-700 text-soil-200">
			<div className="w-full h-full p-4 
							text-white">
				<h1 className="font-display text-4xl mb-4">decomposing trees</h1>
				<p>
					<i>decomposing trees</i> ist eine begleitende Soundinstallation und ein digitales Vermittlungsangebot des Residenztheaters zur Produktion «Der Entrepreneur», einem Theaterstück von Kevin Rittberger, inszeniert von Nora Schlocker im Marstall.
				</p>
				<a href="https://www.residenztheater.de/stuecke/detail/der-entrepreneur">info und tickets</a>
				<h2 className="text-3xl font-display mt-4 mb-2">Credits</h2>
				<div className="flex flex-col gap-2">
					<Person position="Musik und Sound"				name="Yoav Pasovsky" />
					<Person position="Programmierung und Webdesign"	name="Célestin Meunier" link="https://celest.in/"/>
					<Person position="Design"						name="Helin Ulas" link=""/>
					<Person position="Digital-Dramaturgie"			name="Ilja Mirsky" />
					<Person position="Dramaturgie"					name="Ewald Palmetshoher" />
					<Person position="Wissenschaftliche Beratung" name="Sebastian Seibold, Technische Universität München" />
				</div>	
				<h2 className="text-3xl font-display mt-4 mb-2">Privacy</h2>
				<p>Es werden keine Daten gespeichert.</p>
				<h2 className="text-3xl font-display mt-4 mb-2">Impressum</h2>
				<p>Es werden keine Daten gespeichert.</p>
				<h3 className="text-md font-display font-bold mt-2">Herausgeber</h3>
				<p>Bayerisches StaatsschauspielMax-Joseph-Platz 180539 München
					presse@residenztheater.deTel. +49 89 2185 01
					Ust-Identifikationsnummer: DE 814173354
				</p>
				<div className="flex flex-col gap-2">	
					<Person position="Staatsintendant" name="Andreas Beck"></Person>
					<Person position="Geschäftsführende Direktorin" name="Dr. Katja Funken-Hamann, LL.M"></Person>
				</div>
				<p>Rechtsgeschäftlich wird das Bayerische Staatsschauspiel vertreten durch den Staatsintendanten gemeinsam mit der Geschäftsführenden Direktorin, in Angelegenheiten der laufenden Verwaltung und in Vertretung des Staatsintendanten in nicht künstlerischen Angelegenheiten durch die Geschäftsführende Direktorin.</p>
			</div>
		</div>
	);
}

export default Infos;