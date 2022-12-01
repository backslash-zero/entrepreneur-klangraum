import { FiChevronsDown } from "react-icons/fi";

function Scroll() {
	return (
		<div className="relative w-full flex items-center justify-center z-20
						animate-pulse text-4xl text-fluorange-500">
			<FiChevronsDown strokeWidth={1}/>
		</div>);
}

export default Scroll;