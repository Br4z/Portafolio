import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import Environments from '../world/Environments'
import Lights from '../world/Lights'
import Bee from '../world/Bee'
import Tree from '../world/Tree'
import WoodenFence from '../world/WoodenFence'
import Floor from '../world/Floor'


const Experience = () => {
	return (
		<>
			<Perf />
			<Lights />
			<OrbitControls makeDefault />
			<Environments />
			<Bee position-x={2} scale={1.5} />
			<Tree position={[-2, -2, 2]} scale={0.04} />
			<WoodenFence position={[-1, -2, 2]} rotation-y={Math.PI / 2} />
			<WoodenFence position={[1, -2, 2]} rotation-y={-Math.PI / 2} />
			<Floor />
		</>
	)
}

export default Experience
