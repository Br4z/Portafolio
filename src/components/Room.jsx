import { useTexture } from '@react-three/drei';

const Room = (props) => {
	const { side } = props
	return (
		<>
			{/* Floor */}
			<mesh
				receiveShadow
				position-y={0}
				rotation-x={-Math.PI / 2}
			>
				<planeGeometry attach='geometry' args={[side, side]} />
				<meshStandardMaterial color={'white'} />
			</mesh>

			{/* Right wall */}
			<mesh
				receiveShadow
				position-x={side / 2}
				position-y={side / 2}
				rotation-y={-Math.PI / 2}
			>
				<planeGeometry attach='geometry' args={[side, side]} />
				<meshStandardMaterial color={'white'} />
			</mesh>

			{/* Front wall */}
			<mesh
				receiveShadow
				position-z={-1 * side / 2}
				position-y={side / 2}
			>
				<planeGeometry attach='geometry' args={[side, side]} />
				<meshStandardMaterial color={'white'} />
			</mesh>
		</>
	)
}

export default Room
