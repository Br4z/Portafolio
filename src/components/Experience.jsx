import { OrbitControls } from '@react-three/drei'
import Environments from '../world/Environments'
import Lights from '../world/Lights'
import Chucky from '../world/Chucky'
import ArchChan from '../world/ArchChan'
import Room from './Room'


const Experience = () => {
	return (
		<>
			<OrbitControls makeDefault />
			<Environments />
			<Lights />
			<Chucky position={[3, -2, 1]} rotation-y={-Math.PI / 4} scale={0.005} />
			<ArchChan position={[0, -2, 0]} scale={3} />
			<Room side={12} />
		</>
	)
}

export default Experience
