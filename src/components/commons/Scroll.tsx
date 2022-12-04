import { FiChevronsDown } from "react-icons/fi";

interface ScrollProps {
	hero?: boolean
}

function Scroll({ hero=false } : ScrollProps) {
	
	var style : React.CSSProperties = {}
	if (!hero)
		style = {opacity: "0.5"}
	return (
		<div className="relative w-full flex items-center justify-center z-20
						animate-pulse animate-bounce text-5xl text-fluorange-500"
			style={style}>
			<FiChevronsDown strokeWidth={1}/>
		</div>);
}

export default Scroll;