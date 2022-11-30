import { CSSProperties, Dispatch, SetStateAction, useEffect, useRef } from "react";
import Scroll from "../commons/Scroll";

interface ScreenFrameProps {
	setVisible: Dispatch<SetStateAction<boolean>>,
	children: React.ReactNode,
	layout?: string
	last?: boolean
	theme?: string
}

const ScreenFrame = ({ setVisible, children, layout, last=false, theme="default" } : ScreenFrameProps) => {

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
			style = { display: "flex", alignItems: "center", justifyItems: "center", fontSize: "2rem", lineHeight: "2.5rem" }
			break;
		
		default:
			style = {}
			break;
	}

	var background = <></>
	
	switch (theme) {
		case "dark":
			background = <div className="absolute w-full h-full z-0 bg-forest-700">

						</div>
			break;
		
		case "sun":
			background = <div className="absolute w-full h-full z-0 bg-fluorange-500/10 ">
							
						</div>			
						break;
		
		case "green":
			background = <div className="absolute w-full h-full z-0 bg-soil-200">

						</div>
			break;
	
		
		default:
			background = <></>
			break;
	}

	return (
		<>
			{
				background
			}
			<div ref={ContainerRef} style={style} className=" 
				relative
				w-full h-screen snap-start 
				p-4 pt-24
				overflow-hidden
				text-xl
				z-10
											">
				<div className="relative w-full h-full " style={style}>
					{ children }
				</div>
			</div>
		</>
	);
}

export default ScreenFrame;