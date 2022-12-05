import { useFrame, useLoader } from "@react-three/fiber";
import { Environment, useGLTF } from '@react-three/drei'
import { useEffect, useRef, useState } from "react";
import { BoxGeometry, MeshPhysicalMaterial, Plane, PlaneGeometry, TextureLoader } from "three";
import { GLTF } from "three-stdlib";
import * as THREE from "three";
import { isVisible } from "@testing-library/user-event/dist/utils";

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
	isVisibleClimate?: boolean
	climateSlider?: number
}

function EntrLog({ position, isVisibleIntro3, isVisibleClimate, climateSlider=0 } : EntrLogInterface) {
	
	
	const { nodes, materials } = useGLTF("/entrepreneur_log.glb") as any

	const EntrepreneurTexture = useLoader(TextureLoader, 'log_entrepreneur.png')

	if (materials["Scene_-_Root"]
		&& materials["Scene_-_Root"].map
	)

	materials["Scene_-_Root"].map.image = EntrepreneurTexture.image

	const ref = useRef<any>()

	const glassMaterial = new MeshPhysicalMaterial()

	glassMaterial.map = materials["Scene_-_Root"].normalmap
	glassMaterial.normalMap = materials["Scene_-_Root"].normalMap
	glassMaterial.normalMapType = materials["Scene_-_Root"].normalMapType
	glassMaterial.normalScale = new THREE.Vector2( 5, 5 )
	glassMaterial.color = new THREE.Color( 0x000000 )
	glassMaterial.roughness = 0
	glassMaterial.thickness = 1
	glassMaterial.envMapIntensity = 1
	glassMaterial.ior = 0
	glassMaterial.transmission = climateSlider


	useFrame((state, delta) => {
		if (ref.current && ref.current.rotation)
		{
			ref.current.rotation.y += 0.005
			if (isVisibleClimate)
			{
				ref.current.rotation.x += 0.003
				ref.current.rotation.z += 0.003
			}
			else
			{
				ref.current.rotation.x = 90
				ref.current.rotation.z = 0 
			}
		}
	})



	return (
		<group
			position={isVisibleIntro3 ? [0, 0, 0] :[0, 0, 0]}
			rotation={[90,180,0]}
			ref={ref}
		>
			
			{
				isVisibleClimate ?
					<>
						<mesh
							// castShadow
							position={
								[0, 0, -20]
							}
							receiveShadow
							// position={position}
							geometry={nodes.Cylinder__0.geometry}
							material={
								glassMaterial
							}
							/>
					</>
					:
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
			}
		</group>
	);
}

export default EntrLog;

useGLTF.preload("/entrepreneur_log.glb")