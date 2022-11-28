import { Canvas, useFrame } from "@react-three/fiber";
import LogModel from "./LogModel";



function MainCanvas() {
	return ( 
		<div className="w-full h-full">
			<Canvas>
				<ambientLight />
				<LogModel/>
			</Canvas>
		</div>
	 );
}

export default MainCanvas;