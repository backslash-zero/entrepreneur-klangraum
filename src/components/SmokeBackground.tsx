import { MutableRefObject, useEffect, useRef } from "react";

import SmokeMachine from '@bijection/smoke'


interface CanvasSmokeProps {
	ammount: number, // slider temperature
}

const CanvasSmoke = ({ ammount } : CanvasSmokeProps) => {
	// Refer to HTML Canvas
	const canvasRef: MutableRefObject<HTMLCanvasElement> = useRef<any>()
	const party = useRef<any>()

	useEffect(() => {
		const ctx = canvasRef.current.getContext("2d")
		if (ctx)
		{
			// 15,38,30		Forest green
			// 253, 95, 0	Fluo orange
			// 6, 24, 18	Very dark forest
			// 233, 226, 221 Dark soil
			// 232, 215, 204 Very Dark soil
			party.current = SmokeMachine(ctx, [253, 95, 0])
			party.current.step(1000)
			party.current.start()
		}

		const handleResize = () => {
			if (ctx)
			{
				ctx.canvas.height = window.innerHeight;
      			ctx.canvas.width = window.innerWidth;
			}
		}
		handleResize()
		window.addEventListener("resize", handleResize)
		return (() => {
				window.removeEventListener("resize", handleResize)
			}
		);
	}, [])
	
	const map = (value:number, x1:number, y1:number, x2:number, y2:number) => (value - x1) * (y2 - x2) / (y1 - x1) + x2;

	useEffect(() => {

		let ammountSmoke = 0.1;

		const options = {
			minLifetime: 3000 * (ammount),
			maxLifetime: 5 * (ammount),
		}

		if (party.current) {
			party.current.setPreDrawCallback(() => {
				party.current.addSmoke((window.innerWidth / 2), // x
					window.innerHeight * 1.2, // y
					ammountSmoke, // ammount
					options); // options
				}
			)
		}
		
		
	}, [ammount])


	var opacity = "" + map(ammount,0,1,0.2,1)

	return (
		<div className="relative h-full w-full opacity-50"
			style={{opacity: opacity}}>
			<canvas 
				className=""
				ref={canvasRef}>
			</canvas>
		</div>
	);
}

export default CanvasSmoke;