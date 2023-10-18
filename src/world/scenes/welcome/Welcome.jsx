import Chucky from './models/Chucky'
import ArchChan from './models/ArchChan'
import Room from './models/Room'
import Sign from './models/Sign'
import WelcomeText from './text/WelcomeText'
import ChuckyText from './text/ChuckyText'


const Welcome = () => {
	return (
		<>
			<Sign position={[0, 0, 0]} scale={1.5}>
				<WelcomeText />
			</Sign>
			<Chucky position={[3, 0, 1]} rotation-y={-Math.PI / 4} >
				<ChuckyText />
			</ Chucky >
			<ArchChan position={[-2, 0, -1]} scale={3} />
			<Room side={12} x={0} y={0} z={0} yRotation={0}/>
		</>
	)
}

export default Welcome
