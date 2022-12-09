// import { Dispatch, SetStateAction } from "react";

// interface Climate3Props {
// 	climateSlider: number,
// 	setClimateSlider: Dispatch<SetStateAction<number>>
// }

function Climate3() {
	
	// const handleChangeSlider = (e: React.BaseSyntheticEvent) => {
	// 	setClimateSlider(e.target.value)
	// }

	// const slider =
	// <div className="w-full flex flex-col items-center md:justify-center gap-2 pl-6 pr-6">
	// 			<div className="	w-full 
	// 								flex items-center justify-between
	// 								font-mono text-xs text-fluorange-500">
	// 					<p className="">+1.5°</p>
	// 					<p className="">2.0°</p>
	// 					<p className="">2.5°</p>
	// 					<p className="">3.0°</p>
	// 					<p className="">3.5°</p>
	// 					<p className="">4.0°</p>
	// 			</div>
	// 			<div className="w-full h-4 pl-4 pr-4
	// 							flex items-center justify-between">
	// 						<div className="h-full w-[1px] bg-fluorange-500"></div>
	// 						<div className="h-full w-[1px] bg-fluorange-500"></div>
	// 						<div className="h-full w-[1px] bg-fluorange-500"></div>
	// 						<div className="h-full w-[1px] bg-fluorange-500"></div>
	// 						<div className="h-full w-[1px] bg-fluorange-500"></div>
	// 						<div className="h-full w-[1px] bg-fluorange-500"></div>
	// 			</div>
	// 			{/* <div className="absolute w-full h-[1px] bg-fluorange-500 z-0"></div> */}
	// 			<input
	// 				className="	w-full h-6 	z-10
	// 							flex items-center justify-center
	// 							border-[1px] border-fluorange-500 rounded-full
	// 							bg-transparent appearance-none cursor-pointer"
	// 					type="range" 
	// 					max="1" 
	// 					min="0" 
	// 					step="any"
	// 					value={climateSlider}
	// 					onChange={handleChangeSlider}>
	// 			</input>
	// </div>

	return ( 
		<div className="w-full h-full relative
						flex flex-col md:items-center md:justify-center gap-8">
			<p>
				Während Pilze – wie beschrieben – bei der Zersetzung von Totholz eine zentrale Rolle spielen, zeigen sie sich in einem besonderen Element des Bühnenbilds von ihrer konstruktiven Seite. Der größte Baumstamm auf der Bühne ist aus Pilz-Myzel gewachsen. Mehr über diesen neuartigen, natürlichen und kompostierbaren Werkstoff erfahren Sie vor und nach den Vorstellungen von «Der Entrepreneur» im Foyer des Marstalls. Dort finden sie eine informative Ausstellung unserer Kooperationspartner*innen des Instituts für Naturstofftechnik der Technischen Universität Dresden.
			</p>
		</div>
	 );
}

export default Climate3;