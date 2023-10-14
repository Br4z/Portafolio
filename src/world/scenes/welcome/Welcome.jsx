import { Suspense } from 'react'
import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import Bee from './models/Bee'
import Tree from './models/Tree'
import WoodenFence from './models/WoodenFence'
import Floor from './models/Floor'
import Sign from './models/Sign'
import WelcomeText from './text/WelcomeText'


const Welcome = () => {
	return (
		<>
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

export default Welcome
