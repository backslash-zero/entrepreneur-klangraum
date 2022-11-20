import { Dispatch, SetStateAction, useEffect, useRef } from "react";

interface ScreenFrameProps {
	setVisible: Dispatch<SetStateAction<boolean>>,
	children: React.ReactNode,
}

const ScreenFrame = ({ setVisible, children } : ScreenFrameProps) => {

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
	
	return (
		<div ref={ContainerRef} className=" w-full h-screen snap-start bg-slate-800
											flex items-center justify-center
											border-b-2 border-red-500"
		>
			{ children }
		</div>
	);
}

export default ScreenFrame;