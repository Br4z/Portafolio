import { useTexture } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier'


const Room = (props) => {
	const { side, x, y, z } = props
	return (
		<>
			{/* Floor */}
			<mesh
				receiveShadow
				position-x={x}
				position-y={y}
				rotation-x={-Math.PI / 2}
			>
				<planeGeometry attach='geometry' args={[side, side]} />
				<meshStandardMaterial color={'white'} />
			</mesh>

			{/* Left wall */}
			<mesh
				receiveShadow
				position-x={x + side / 2}
				position-y={y + side / 2}
				rotation-y={-Math.PI / 2}
			>
				<planeGeometry attach='geometry' args={[side, side]} />
				<meshStandardMaterial color={'white'} />
			</mesh>

			{/* Front wall */}
			<mesh
				receiveShadow
				position-x={x}
				position-z={z + -1 * side / 2}
				position-y={y + side / 2}
			>
				<planeGeometry attach='geometry' args={[side, side]} />
				<meshStandardMaterial color={'white'} />
			</mesh>
		</>
	)
}

export default Room
