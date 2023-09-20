import { useTexture } from '@react-three/drei';

const Room = (props) => {
	const { side } = props
	return (
		<>
			<mesh
				receiveShadow
				position-y={-1 * side / 6}
				rotation-x={-Math.PI / 2}
			>
				<planeGeometry attach='geometry' args={[side, side]} />
				<meshStandardMaterial color={'white'} />
			</mesh>
			<mesh
				receiveShadow
				position-x={side / 2}
				position-y={side / 3}
				rotation-y={-Math.PI / 2}
			>
				<planeGeometry attach='geometry' args={[side, side]} />
				<meshStandardMaterial color={'white'} />
			</mesh>
			<mesh
				receiveShadow
				position-z={-1 * side / 2}
				position-y={side / 3}
			>
				<planeGeometry attach='geometry' args={[side, side]} />
				<meshStandardMaterial color={'white'} />
			</mesh>
		</>
	)
}

export default Room
