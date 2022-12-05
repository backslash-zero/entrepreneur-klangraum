import { useEffect, useState } from "react"

interface TimelineProps {
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
		if (isVisibleStages1) {
			setProgressSizeString(0 + "%")
		}
		else if (isVisibleStages2) {
			setProgressSizeString(5 + "%")
		}
		else if (isVisibleStages3) {
			setProgressSizeString(10 + "%")
		}
		else if (isVisibleStages4) {
			setProgressSizeString(10 + "%")
		}
		else if (isVisibleStages5) {
			setProgressSizeString(12 + "%")
		}
		else if (isVisibleStages6) {
			setProgressSizeString(23 + "%")
		}
		else if (isVisibleStages7) {
			setProgressSizeString(34 + "%")
		}
		else if (isVisibleStages8) {
			setProgressSizeString(50 + "%")
		}
		else if (isVisibleStages9) {
			setProgressSizeString(66 + "%")
		}
		else if (isVisibleStages10) {
			setProgressSizeString(100 + "%")
		}

		
	}, [isVisibleStages1,
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
			<div className="fixed w-full h-6 top-7 left-5 
							z-30
							text-fluorange-500
							flex items-center justify-between gap-2">
				<p>{currentYear}</p>
				<div className="w-full h-full rounded-sm pt-1 pb-1
								flex items-center justify-between  
								border-l-4 border-r-4 border-fluorange-500">
						<div className="w-full h-full bg-fluorange-500/25
										transition-all" style={{ width: ProgressSizeString }}>
						</div>
				</div>
				<p>{currentYear + 30}</p>
				<div className="w-80 h-full">
			</div>
		</div>
		:
		<></>
	 );
}

export default Timeline;