import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { TextureLoader, Vector3 } from "three";
import EntrLog from "./EntrLog";
import WoodLog from "./WoodLog";

interface WoodLogProps {
	props?: JSX.IntrinsicElements['group'],
}

function LogHandler(props: JSX.IntrinsicElements["group"]) {
	const ref = useRef<THREE.Group>(null!)

	useFrame((state, delta) => {
			ref.current.rotation.y += 0.01
	})

	const EntrepreneurTexture = useLoader(TextureLoader, 'log_entrepreneur.png')

	return (
		<group
			ref={ref}
			{...props}
			dispose={null}
			scale={0.008}
		>
			{
				
				// <WoodLog count={10}/>
			}
			{/* <EntrLog /> */}
		</group>
	);
}

export default LogHandler;