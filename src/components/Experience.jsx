import { OrbitControls } from '@react-three/drei'
import Chucky from '../world/Chucky'
import ArchChan from '../world/ArchChan'
import Floor from './Floor'

const Experience = () => {
	return (
		<>
			<ambientLight intensity={0.5} />
			<directionalLight position={[10, 10, 5]} intensity={2} />
			<OrbitControls makeDefault />
			<Chucky position={[3, -2, 1]} rotation-y={-Math.PI / 4}  scale={0.005} />
			<ArchChan position={[0, -2, 0]} scale={3} />
			<Floor />
		</>
	)
}

export default Experience
