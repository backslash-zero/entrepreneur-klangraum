import { useFrame, useLoader } from "@react-three/fiber";
import { useGLTF } from '@react-three/drei'
import { useRef } from "react";
import { BoxGeometry, InstancedMesh, MeshStandardMaterial, TextureLoader } from "three";
import { GLTF } from "three-stdlib";
import * as THREE from "three";

interface LogModelProps {
	props?: JSX.IntrinsicElements['group'],
	material?: string
	isMute: boolean
}

type GLTFResult = GLTF & {
  nodes: {
    Cylinder__0: THREE.Mesh;
  };
  materials: {
    ["Scene_-_Root"]: THREE.MeshStandardMaterial;
  };
};

function LogModel({ props, isMute }: LogModelProps) {
	
	const { nodes, materials } = useGLTF("/wooden_log.glb") as any

	const ref = useRef<THREE.Mesh>(null!)

	useFrame((state, delta) => {
		if (!isMute)
			ref.current.rotation.y += 0.01
	})

	console.log()

	const colorMapEntrepreneur = useLoader(TextureLoader, 'log_entrepreneur.png')

	const EntrepreneurMaterial = new THREE.MeshStandardMaterial(
		{
			...materials["Scene_-_Root"]
		}
	)
	
	if (EntrepreneurMaterial && EntrepreneurMaterial.map)
		EntrepreneurMaterial.map.image = colorMapEntrepreneur.image

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
					EntrepreneurMaterial
				}
			/>
			<mesh />
		</group>
	);
}

export default LogModel;