import { MutableRefObject, useEffect, useRef } from "react";

import SmokeMachine from '@bijection/smoke'


const startSmoke = (party : any) => {
	party.step(1000)
	party.start()
}

const drawSmoke = (ctx : CanvasRenderingContext2D, multiplier: number) => {
	const canvas = ctx.canvas;
	const smokeColor: number[] = [197 * multiplier, 172 * multiplier, 155 * multiplier]
	console.log(smokeColor)
	const ammountGenerators = 2;
	
	let ammountSmoke = (0.5 * canvas.width / 500);
	
	const party = SmokeMachine(ctx, smokeColor)
	
	const options = {
		minLifetime: 8000,
		maxLifetime: 12000,
	}

	party.step(1000)
	party.start()
	party.setPreDrawCallback(() => {
		for(var i = 0; i <= ammountGenerators; i++){
				party.addSmoke((canvas.width/ammountGenerators) * i, canvas.height * 1.2, ammountSmoke, options);
		}
    })
}

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
			party.current = SmokeMachine(ctx, [0,0,0])
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
	

	useEffect(() => {
		const ammountGenerators = 2;
		let ammountSmoke = (ammount);

		const options = {
			minLifetime: 8000,
			maxLifetime: 12000,
		}

		if (party.current)
		{
			party.current.setPreDrawCallback(() => {
			for(var i = 0; i <= ammountGenerators; i++){
				party.current.addSmoke((window.innerWidth/ammountGenerators) * i, window.innerHeight * 1.2, ammountSmoke, options);
		}
    })
		}
	}, [ammount])

	return (
		<div className="h-full w-full">
			<canvas 
				className=""
				ref={canvasRef}>
			</canvas>
		</div>
	);
}

export default CanvasSmoke;