import { useTexture } from "@react-three/drei";

const Floor = () => {
	const textureProps = useTexture({
		map: '/assets/textures/floor/color.jpg',
		normalMap: '/assets/textures/floor/normal.jpg',
		displacementMap: '/assets/textures/floor/height.png',
		roughnessMap: '/assets/textures/floor/roughness.jpg',
		aoMap: '/assets/textures/floor/ao.jpg',
	})

	return (
		<mesh position-y={-2.5} rotation-x={-Math.PI / 2} >
			<planeGeometry attach='geometry' args={[12, 12]} />
			<meshStandardMaterial {...textureProps} />
		</mesh>
	)
}

export default Floor
