import { useFrame, useLoader } from "@react-three/fiber";
import { Instance, useGLTF } from '@react-three/drei'
import { Ref, useEffect, useRef, useState } from "react";
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

interface WoodLogInterface {
	count? : number
	position?: THREE.Vector3
	temp? : THREE.Object3D
}	

function WoodLog({ position, count = 1, temp = new THREE.Object3D() }: WoodLogInterface) {
	
	const InstancedRef: Ref<InstancedMesh<THREE.BufferGeometry, THREE.Material | THREE.Material[]>> = useRef(null)
	const { nodes, materials } = useGLTF("/wooden_log.glb") as any

	var VSpace = 100
	var HSpace = 100
	var offset = VSpace * 3 / 2
	
	const getPosY = (index: number): number => {
		if (index < 2)
			return (VSpace * 2)
		else if (index < 6)
			return (VSpace * 1)
		else
			return (VSpace * 0)
	}

	const getPosX = (index: number): number => {
		if (index === 0
			|| index === 2
			|| index === 6
		)
			return (HSpace * 0 - offset)
		else if (index === 1
			|| index === 3
			|| index === 7)
			return (HSpace * 1 - offset)
		else if (index === 2
			|| index === 4
			|| index === 8)
			return (HSpace * 2 - offset)
		else
			return (HSpace * 3 - offset)
	}
	useEffect(() => {
		if (count === 10)
		{
			for (let i = 0; i < count; i++) {
				temp.position.set(getPosX(i), getPosY(i), 0)	
				temp.rotation.set(0, 0, Math.random() * 360)	
				temp.rotation.set(90, 0, 0)	
				temp.updateMatrix()
				if (InstancedRef.current)
					InstancedRef.current.setMatrixAt(i, temp.matrix)
			}
		}
	
		if (InstancedRef.current)
			InstancedRef.current.instanceMatrix.needsUpdate = true
	})
	
	return (
		<instancedMesh
				rotation={[0, 0, 0]}
				receiveShadow
				ref={InstancedRef}
				args={[undefined, undefined, count]}
				// castShadow
				position={position}
				geometry={nodes.Cylinder__0.geometry}
				material={
					materials["Scene_-_Root"]
				}
			/>
	);
}

export default WoodLog;