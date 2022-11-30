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
	position? : THREE.Vector3
}

function EntrLog({ position } : EntrLogInterface) {
	
	
	const { nodes, materials } = useGLTF("/entrepreneur_log.glb") as any

	const EntrepreneurTexture = useLoader(TextureLoader, 'log_entrepreneur.png')

	if (materials["Scene_-_Root"]
		&& materials["Scene_-_Root"].map
	)

	materials["Scene_-_Root"].map.image = EntrepreneurTexture.image

	return (
			<mesh
				// castShadow
				rotation={[90,0,0]}
				receiveShadow
				position={position}
				geometry={nodes.Cylinder__0.geometry}
				material={
					materials["Scene_-_Root"]
				}
			/>
	);
}

export default EntrLog;