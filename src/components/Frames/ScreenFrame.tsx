import { CSSProperties, Dispatch, SetStateAction, useEffect, useRef } from "react";
import InsectTexture from '../../assets/images/InsectTexture.svg'
import Div100vh from "react-div-100vh";
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
	var TextStyle: CSSProperties
	
	switch (layout) {
		case "top":
			style = { display: "flex" }
			break;
		
		case "bottom":
			style = { display: "flex", alignItems: "flex-end" }
			break;
		
		case "center":
			style = { 
				paddingTop: "20%", 
				fontSize: "2rem", 
				lineHeight: "2.5rem",

			}
			break;
		
		default:
			style = { display: "flex" }
			break;
	}

	var background = <></>
	
	switch (theme) {
		case "dark":
			background = <div className="absolute w-full h-full z-0 bg-forest-700 ">

						</div>
			break;
		
		case "sun":
			background = <div className="absolute w-full h-full z-0 bg-soil-200 ">
	
						</div>			
						break;
		
		case "green":
			background = <div className="absolute w-full h-full z-0 bg-soil-200"></div>;
			break;
		
		default:
			background = <></>
			break;
	}

	return (
		<div className="
				relative
				w-full snap-start
				overflow-hidden">
					{ background }
			<Div100vh ref={ContainerRef} className=" 
				relative
				w-full 
				md:flex md:items-center md:justify-center
				p-4 pt-24
				text-xl
				z-10">
				<div className="relative w-full h-full md:w-[720px] md:items-center md:justify-center" style={style}>
					{ children }
				</div>
			</Div100vh>
		</div>
	);
}

export default ScreenFrame;