
import SideTrunc from "./SideTruncs.tsx/SideTrunc";


function Intro1() {
	return ( 
			<div className="relative w-full flex flex-col">
				<div className="flex-1 relative z-10">
					<p>
						Sie sehen zehn Baumstämme. Sie wurden wegen des Befalls durch Borkenkäfer gefällt (forstwirtschaftlich: geschlachtet) und aus dem Bayerischen Forst entfernt. Dadurch soll das weitere Übergreifen der Käfer auf benachbarte Bäume verhindert werden.
					</p>
				</div>
				<div className="w-full">
					<div className="flex items-center justify-center ">
						<SideTrunc id={1} imgID={1} rotation={0}/>
					</div>
					<div className="flex items-center justify-center">
						<SideTrunc id={2} imgID={2} rotation={6}/>
						<SideTrunc id={3} imgID={3} rotation={14}/>
					</div>
					<div className="flex items-center justify-center">
						<SideTrunc id={4} imgID={1} rotation={-25}/>
						<SideTrunc id={5} imgID={2} rotation={115}/>
						<SideTrunc id={6} imgID={3} rotation={155}/>
					</div>
					<div className="flex items-center justify-center">
						<SideTrunc id={8} imgID={3} rotation={-30}/>
						<SideTrunc id={7} imgID={2} rotation={30}/>
						<SideTrunc id={9} imgID={1} rotation={270}/>
						<SideTrunc id={10} imgID={2} rotation={57}/>
					</div>
				</div>
			</div>
	 );
}

export default Intro1;