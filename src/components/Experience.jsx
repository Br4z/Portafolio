import { Suspense } from 'react'
import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import Environments from '../world/Environments'
import Lights from '../world/Lights'
import Bee from '../world/Bee'
import Tree from '../world/Tree'
import WoodenFence from '../world/WoodenFence'
import Floor from '../world/Floor'
import Sign from '../world/Sign'
import WelcomeText from '../world/WelcomeText'


const Experience = () => {
	return (
		<>
			<Perf />
			<OrbitControls target={[0, 1.5, 0]} />
			<Lights />
			<Environments />
			<Suspense fallback={null}>
				<Bee position={[2, 2, 0]} scale={1.5} />
				<Tree position={[-2, 0, 2]} scale={0.04} />
				<WoodenFence position={[-1, 0, 2]} rotation-y={Math.PI / 2} />
				<WoodenFence position={[1, 0, 2]} rotation-y={-Math.PI / 2} />
				<Floor rotation-x={-Math.PI / 2} receiveShadow />
				<Sign>
					<WelcomeText />
				</Sign>
				{/* <axesHelper args={[5]} position-y={0} /> */}
			</Suspense>
		</>
	)
}

export default Experience
