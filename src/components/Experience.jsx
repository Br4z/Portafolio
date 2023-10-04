import { OrbitControls } from '@react-three/drei'
import Environments from '../world/Environments'
import Lights from '../world/Lights'
import Chucky from '../world/Chucky'
import ArchChan from '../world/ArchChan'
import Room from './Room'
import Sign from '../world/Sign'
import WelcomeText from '../world/WelcomeText'
import ChuckyText from '../world/ChuckyText'


const Experience = () => {
	return (
		<>
			<OrbitControls makeDefault target={[0, 1.5, 0]} />
			<Environments />
			<Lights />
			<Sign position={[0, 0, 0]} scale={1.5}>
				<WelcomeText />
			</Sign>
			<Chucky position={[3, 0, 1]} rotation-y={-Math.PI / 4} >
				<ChuckyText />
			</ Chucky >
			<ArchChan position={[-2, 0, -1]} scale={3} />
			<Room side={12} />
		</>
	)
}

export default Experience
