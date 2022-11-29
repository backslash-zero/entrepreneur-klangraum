import { FiChevronsDown } from "react-icons/fi";

function Scroll() {
	return (
		<div className="absolute w-full flex items-center justify-center bottom-2 
						animate-pulse text-4xl ">
			<FiChevronsDown strokeWidth={1}/>
		</div>);
}

export default Scroll;