import { Dispatch, SetStateAction, useRef } from "react";

interface Climate3Props {
	climateSlider: number,
	setClimateSlider: Dispatch<SetStateAction<number>>
}

function Climate3({ setClimateSlider, climateSlider } : Climate3Props) {
	
	const handleChangeSlider = (e: React.BaseSyntheticEvent) => {
		setClimateSlider(e.target.value)
	}

	return ( 
		<div className="w-full h-full relative text-forest-700
						flex flex-col gap-8">
			<p>
				Der Anstieg der globalen Temperaturen kann zu einer Beschleunigung dieser Zersetzung führen. Der gebundene Kohlenstoff wird also schneller an die Atmosphäre wieder abgegeben. Abhängig von Umgebungstemperatur und Feuchtigkeit kann Totholz also eine nicht zu vernachlässigende Rolle im Kohlenstoffzyklus und der globalen Erwärmung der kommenden Jahrzehnte spielen.
			</p>
			<div className="w-full flex flex-col items-center gap-2">
				<div className="	w-full 
									flex items-center justify-between
									font-mono text-xs text-fluorange-500">
						<p className="">+1.5°</p>
						<p className="">2.0°</p>
						<p className="">2.5°</p>
						<p className="">3.0°</p>
						<p className="">3.5°</p>
						<p className="">4.0°</p>
				</div>
				<div className="w-full h-4 pl-4 pr-4
								flex items-center justify-between">
							<div className="h-full w-[1px] bg-fluorange-500"></div>
							<div className="h-full w-[1px] bg-fluorange-500"></div>
							<div className="h-full w-[1px] bg-fluorange-500"></div>
							<div className="h-full w-[1px] bg-fluorange-500"></div>
							<div className="h-full w-[1px] bg-fluorange-500"></div>
							<div className="h-full w-[1px] bg-fluorange-500"></div>
				</div>
				{/* <div className="absolute w-full h-[1px] bg-fluorange-500 z-0"></div> */}
				<input
					className="	w-full h-6 	z-10
								flex items-center justify-center
								border-[1px] border-fluorange-500 rounded-full
								bg-transparent appearance-none cursor-pointer "
						type="range" 
						max="1" 
						min="0" 
						step="any"
						value={climateSlider}
						onChange={handleChangeSlider}>
				</input>
			</div>
		</div>
	 );
}

export default Climate3;