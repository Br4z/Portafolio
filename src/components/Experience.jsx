import { OrbitControls } from '@react-three/drei'
import Bee from '../world/Bee'
import Tree from '../world/Tree'
import WoodenFence from '../world/WoodenFence'

const Experience = () => {
	return (
		<>
			<ambientLight intensity={0.5} />
			<directionalLight position={[10, 10, 5]} intensity={2} />
			<OrbitControls makeDefault />
			<Bee position-x={2} scale={1.5} />
			<Tree position={[-2, -2, 2]} scale={0.04} />
			<WoodenFence position={[0, -2, 0]} />
			<mesh position-y={-2} rotation-x={-Math.PI / 2} >
				<planeGeometry attach='geometry' args={[12, 12]} />
				<meshStandardMaterial attach='material' color='green' />
			</mesh>
		</>
	)
}

export default Experience
