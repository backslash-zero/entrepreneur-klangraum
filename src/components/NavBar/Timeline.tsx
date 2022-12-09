import { useEffect, useState } from "react"

interface TimelineProps {
	isVisibleIntro3 : boolean,
	isVisibleStages1 : boolean,
	isVisibleStages2 : boolean,
	isVisibleStages3 : boolean,
	isVisibleStages4 : boolean,
	isVisibleStages5 : boolean,
	isVisibleStages6 : boolean,
	isVisibleStages7 : boolean,
	isVisibleStages8 : boolean,
	isVisibleStages9 : boolean,
	isVisibleStages10 : boolean,
}

function Timeline({
	isVisibleIntro3,
	isVisibleStages1,
	isVisibleStages2,
	isVisibleStages3,
	isVisibleStages4,
	isVisibleStages5,
	isVisibleStages6,
	isVisibleStages7,
	isVisibleStages8,
	isVisibleStages9,
	isVisibleStages10,
}: TimelineProps) {
	
	const checkIsVisible = () : boolean => {
		if (
			isVisibleIntro3 ||
			isVisibleStages1 ||
			isVisibleStages2 ||
			isVisibleStages3 ||
			isVisibleStages4 ||
			isVisibleStages5 ||
			isVisibleStages6 ||
			isVisibleStages7 ||
			isVisibleStages8 ||
			isVisibleStages9 ||
			isVisibleStages10
		) return true
		else return false
	}


	const [ProgressSizeString, setProgressSizeString] = useState("0%")

	useEffect(() => {
		if (isVisibleIntro3) {
			setProgressSizeString(0 + "%")
		}
		else if (isVisibleStages1) {
			setProgressSizeString(7 + "%")
		}
		else if (isVisibleStages2) {
			setProgressSizeString(10 + "%")
		}
		else if (isVisibleStages3) {
			setProgressSizeString(10 + "%")
		}
		else if (isVisibleStages4) {
			setProgressSizeString(13 + "%")
		}
		else if (isVisibleStages5) {
			setProgressSizeString(23 + "%")
		}
		else if (isVisibleStages6) {
			setProgressSizeString(33 + "%")
		}
		else if (isVisibleStages7) {
			setProgressSizeString(50 + "%")
		}
		else if (isVisibleStages8) {
			setProgressSizeString(67 + "%")
		}
		else if (isVisibleStages9) {
			setProgressSizeString(83 + "%")
		}
		else if (isVisibleStages10) {
			setProgressSizeString(100 + "%")
		}

		
	}, [isVisibleIntro3,
		isVisibleStages1,
		isVisibleStages2,
		isVisibleStages3,
		isVisibleStages4,
		isVisibleStages5,
		isVisibleStages6,
		isVisibleStages7,
		isVisibleStages8,
		isVisibleStages9,
		isVisibleStages10])
		
	const currentYear = new Date().getFullYear() 
	
	return ( 
		checkIsVisible() ?
			<div className="fixed h-6 top-7 left-5 right-28
							z-[90]
							text-fluorange-500
							flex items-center justify-between gap-2
							">
				<p>{currentYear}</p>
				<div className="relative w-full h-full rounded-sm
								flex items-center justify-between  ">
						<div className="w-full h-full border-r-2 border-r-fluorange-500
										transition-all" style={{ width: ProgressSizeString }}>
						</div>
						<div className="absolute w-full h-4 bg-fluorange-500/25 
										transition-all">
						</div>
				</div>
				<p>{currentYear + 30}</p>
			</div>
		:
		<></>
	 );
}

export default Timeline;