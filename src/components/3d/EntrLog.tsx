import { useFrame, useLoader } from "@react-three/fiber";
import { useGLTF } from '@react-three/drei'
import { useRef, useState } from "react";
import { BoxGeometry, InstancedMesh, MeshStandardMaterial, TextureLoader } from "three";
import { GLTF } from "three-stdlib";
import * as THREE from "three";

type GLTFResult = GLTF & {
  nodes: {
    Cylinder__0: THREE.Mesh;
  };
  materials: {
    ["Scene_-_Root"]: THREE.MeshStandardMaterial;
  };
};


interface EntrLogInterface {
	position?: THREE.Vector3
	isVisibleIntro3?: boolean
}

function EntrLog({ position, isVisibleIntro3 } : EntrLogInterface) {
	
	
	const { nodes, materials } = useGLTF("/entrepreneur_log.glb") as any

	const EntrepreneurTexture = useLoader(TextureLoader, 'log_entrepreneur.png')

	if (materials["Scene_-_Root"]
		&& materials["Scene_-_Root"].map
	)

	materials["Scene_-_Root"].map.image = EntrepreneurTexture.image

	const ref = useRef<any>()

	useFrame((state, delta) => {
		if (ref.current && ref.current.rotation)
			ref.current.rotation.y += 0.005
	})



	return (
		<group
			position={isVisibleIntro3 ? [0, 0, 0] :[0, 0, 0]}
			rotation={[90,180,0]}
			ref={ref}
		>
			<mesh
				// castShadow
				position={
					[0, 0, -20]
				}
				receiveShadow
				// position={position}
				geometry={nodes.Cylinder__0.geometry}
				material={
					materials["Scene_-_Root"]
				}
				/>
		</group>
	);
}

export default EntrLog;