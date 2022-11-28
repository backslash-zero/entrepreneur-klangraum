import { Dispatch, SetStateAction } from "react";

interface Climate3Props {
	setClimateSlider : Dispatch<SetStateAction<number>>
}

function Climate3({ setClimateSlider } : Climate3Props) {
	
	const handleChangeSlider = (e: React.BaseSyntheticEvent) => {
		setClimateSlider(e.target.value)
	}

	return ( 
		<div className="w-full h-full relative">
			<div>
				<p>
					Der Anstieg der globalen Temperaturen kann zu einer Beschleunigung dieser Zersetzung führen. Der gebundene Kohlenstoff wird also schneller an die Atmosphäre wieder abgegeben. Abhängig von Umgebungstemperatur und Feuchtigkeit kann Totholz also eine nicht zu vernachlässigende Rolle im Kohlenstoffzyklus und der globalen Erwärmung der kommenden Jahrzehnte spielen.
				</p>
				<div className="absolute w-full bottom-0">
					<input
						className="w-full"
						type="range" 
						min="2" 
						max="5.5" 
						step="0.1" 
						onChange={handleChangeSlider}>
					</input>
				</div>
			</div>
		</div>
	 );
}

export default Climate3;