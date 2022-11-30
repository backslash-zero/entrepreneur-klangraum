import { CSSProperties, Dispatch, SetStateAction, useEffect, useRef } from "react";
import Scroll from "../commons/Scroll";

interface ScreenFrameProps {
	setVisible: Dispatch<SetStateAction<boolean>>,
	children: React.ReactNode,
	layout?: string
	last?: boolean
}

const ScreenFrame = ({ setVisible, children, layout, last=false } : ScreenFrameProps) => {

	const ContainerRef = useRef(null)
	const ObserverCallback: IntersectionObserverCallback = (entries) => {
		const [entry] = entries
		setVisible(entry.isIntersecting)
	}
	const ObserverOptions : IntersectionObserverInit = {
		root: null,
		rootMargin: "0px",  //This set of values serves to grow or shrink each side of the root element's bounding box before computing intersections, the options are similar to those of margin in CSS.
		threshold: 0.5
	}

	useEffect(
		() => {
			const observer = new IntersectionObserver(ObserverCallback, ObserverOptions)

			var ref = ContainerRef.current

			if (ref)
				observer.observe(ref)
				
			return (() =>	{
					if (ref)
						observer.unobserve(ref)
				}
			)
		}, []
	)
	var style: CSSProperties
	
	switch (layout) {
		case "top":
			style = { display: "flex" }
			break;
		
		case "bottom":
			style = { display: "flex", alignItems: "flex-end" }
			break;
		
		case "center":
			style = { display: "flex", alignItems: "center", justifyItems: "center" }
			break;
		
		default:
			style = {}
			break;
	}

	return (
		<>
			<div ref={ContainerRef} style={style} className=" 
				relative
				w-full h-screen snap-start 
				p-4 pt-24
				overflow-hidden
				text-xl
				z-10
											">
				{children}
			</div>
		</>
	);
}

export default ScreenFrame;