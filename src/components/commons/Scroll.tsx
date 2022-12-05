import { FiChevronsDown } from "react-icons/fi";

interface ScrollProps {
	hero?: boolean
}

function Scroll({ hero=false } : ScrollProps) {
	
	var style : React.CSSProperties = {}
	if (!hero)
		style = {opacity: "0.5"}
	return (
		<div className="relative w-full items-center justify-center z-20
						flex flex-col gap-2
						text-5xl text-fluorange-500"
			style={style}>
			{
				hero &&
				<p className="text-xs">bitte nach unten scrollen</p>
			}
			<FiChevronsDown
				className="animate-pulse animate-bounce"
				strokeWidth={1} />
		</div>);
}

export default Scroll;