import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { BoxGeometry, MeshStandardMaterial } from "three";

interface LogModelProps {
	props?: JSX.IntrinsicElements['group'],
}

function LogModel({ props } : LogModelProps) {
	const ref = useRef<THREE.Mesh>(null!)
	useFrame((state, delta) => (ref.current.rotation.x += 0.01))
	return (
		<group {...props} dispose={null}>
			<mesh
				ref={ref}
				scale={1}
				geometry={new BoxGeometry(1,1,1)}
				material={new MeshStandardMaterial({ color: 'hotpink' })}
			/>
			<mesh/>
		</group>
	);
}

export default LogModel;