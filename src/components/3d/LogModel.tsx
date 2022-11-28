import { useFrame } from "@react-three/fiber";
import { useGLTF } from '@react-three/drei'
import { useRef } from "react";
import { BoxGeometry, MeshStandardMaterial } from "three";
import { GLTF } from "three-stdlib";
import * as THREE from "three";

interface LogModelProps {
	props?: JSX.IntrinsicElements['group'],
	material?: string
	isPlaying: boolean
}

type GLTFResult = GLTF & {
  nodes: {
    Cylinder__0: THREE.Mesh;
  };
  materials: {
    ["Scene_-_Root"]: THREE.MeshStandardMaterial;
  };
};

function LogModel({ props }: LogModelProps) {
	
	const { nodes, materials } = useGLTF("/wooden_log.glb") as any

	const ref = useRef<THREE.Mesh>(null!)
	useFrame((state, delta) => (ref.current.rotation.y += 0.01))

	const glassMaterial = new THREE.MeshPhysicalMaterial(
		{
			roughness: 0,  
  			transmission: 1,  
  			reflectivity: 0.5, // Add refraction!
		}
	)
	return (
		<group {...props} dispose={null}>
			<mesh
				// castShadow
				// receiveShadow
				ref={ref}
				rotation={[0, 0 ,40]}
				scale={0.01}
				geometry={nodes.Cylinder__0.geometry}
				material={
					materials["Scene_-_Root"]
				}
			/>
			<mesh/>
		</group>
	);
}

export default LogModel;