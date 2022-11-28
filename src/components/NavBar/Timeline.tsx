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
	const [ProgressSize, setProgressSize] = useState(0)

	useEffect(() => {
		if (isVisibleStages1) {
			setProgressSize(0)
			setProgressSizeString(0 + "%")
		}
		else if (isVisibleStages2) {
			setProgressSize(5)
			setProgressSizeString(5 + "%")
		}
		else if (isVisibleStages3) {
			setProgressSize(10)
			setProgressSizeString(10 + "%")
		}
		else if (isVisibleStages4) {
			setProgressSize(10)
			setProgressSizeString(10 + "%")
		}
		else if (isVisibleStages5) {
			setProgressSize(12)
			setProgressSizeString(12 + "%")
		}
		else if (isVisibleStages6) {
			setProgressSize(23)
			setProgressSizeString(23 + "%")
		}
		else if (isVisibleStages7) {
			setProgressSize(34)
			setProgressSizeString(34 + "%")
		}
		else if (isVisibleStages8) {
			setProgressSize(50)
			setProgressSizeString(50 + "%")
		}
		else if (isVisibleStages9) {
			setProgressSize(66)
			setProgressSizeString(66 + "%")
		}
		else if (isVisibleStages10) {
			setProgressSize(100)
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
		
	
	return ( 
		checkIsVisible() ?
		<div className="fixed w-full h-6 top-7 left-5 
						flex">
			<div className="w-full h-full bg-forest-10 rounded-full 
							flex items-center p-1
							border border-1 border-fluorange-500">
				<div className="w-full h-full bg-fluorange-500/25 rounded-full" style={{width : ProgressSizeString}}></div>
			</div>
			<div className="w-56 h-full">

			</div>
		</div>
		:
		<></>
	 );
}

export default Timeline;