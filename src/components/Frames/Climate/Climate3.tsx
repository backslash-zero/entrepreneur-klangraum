import { Dispatch, SetStateAction, useRef } from "react";

interface Climate3Props {
	setClimateSlider : Dispatch<SetStateAction<number>>
}

function Climate3({ setClimateSlider } : Climate3Props) {

	const input = useRef<HTMLInputElement>()
	
	const handleChangeSlider = (e: React.BaseSyntheticEvent) => {
		setClimateSlider(e.target.value)
	}

	return ( 
		<div className="w-full h-full relative text-forest-700">
				<p>
					Der Anstieg der globalen Temperaturen kann zu einer Beschleunigung dieser Zersetzung führen. Der gebundene Kohlenstoff wird also schneller an die Atmosphäre wieder abgegeben. Abhängig von Umgebungstemperatur und Feuchtigkeit kann Totholz also eine nicht zu vernachlässigende Rolle im Kohlenstoffzyklus und der globalen Erwärmung der kommenden Jahrzehnte spielen.
				</p>
			<div className="	absolute bottom-10
								w-full 
								flex items-center justify-between 
								font-mono text-xs text-fluorange-500">
					<p className="w-4">1.5</p>
					<p className="w-4">2.0</p>
					<p className="w-4">2.5</p>
					<p className="w-4">3.0</p>
					<p className="w-4">3.5</p>
					<p className="w-4">4.0</p>
				</div>
			<div className="	
								absolute bottom-4
								w-full h-4 
								pl-2 pr-2
								flex items-center justify-between">
						<div className="h-full w-[1px] bg-fluorange-500"></div>
						<div className="h-full w-[1px] bg-fluorange-500"></div>
						<div className="h-full w-[1px] bg-fluorange-500"></div>
						<div className="h-full w-[1px] bg-fluorange-500"></div>
						<div className="h-full w-[1px] bg-fluorange-500"></div>
						<div className="h-full w-[1px] bg-fluorange-500"></div>
			</div>
			<div className="w-full pl-2 pr-2
							absolute bottom-6">
				<input
					className="	w-full h-[1px] 
								bg-fluorange-500	
								flex items-center justify-center
								bg-transparent appearance-none cursor-pointer "
						type="range" 
						min="0" 
						max="1" 
						step="any"
						// value="0.2"
				onChange={handleChangeSlider}>
				</input>
			</div>
		</div>
	 );
}

export default Climate3;