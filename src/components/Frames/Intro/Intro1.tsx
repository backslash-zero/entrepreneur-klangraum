import MainCanvas from "../../3d/MainCanvas";
import SideTrunc from "./SideTruncs.tsx/SideTrunc";

interface Intro1Props {

}

function Intro1() {
	return ( 
		<div className="flex flex-col w-full h-full
						items-center justify-center gap-8">
			<div className="flex flex-col gap-4 w-full">
				<div className="flex gap-4">
					<SideTrunc imgID={1} rotation={0}/>
					<SideTrunc imgID={2} rotation={6}/>
				</div>
				<div className="flex gap-4">
					<SideTrunc imgID={3} rotation={14}/>
					<SideTrunc imgID={1} rotation={-25}/>
					<SideTrunc imgID={2} rotation={115}/>
					<SideTrunc imgID={3} rotation={155}/>
				</div>
				<div className="flex gap-4">
					<SideTrunc imgID={2} rotation={30}/>
					<SideTrunc imgID={3} rotation={-30}/>
					<SideTrunc imgID={1} rotation={270}/>
					<SideTrunc imgID={2} rotation={57}/>
				</div>
			</div>
			<div>
				<p>
					Sie sehen zehn Baumstämme. Sie wurden wegen des Befalls durch Borkenkäfer gefällt (forstwirtschaftlich: geschlachtet) und aus dem Bayerischen Forst entfernt. Dadurch soll das weitere Übergreifen der Käfer auf benachbarte Bäume verhindert werden.
				</p>
			</div>
		</div>
	 );
}

export default Intro1;