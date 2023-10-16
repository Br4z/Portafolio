import { Physics } from '@react-three/rapier';
import { Perf } from 'r3f-perf'
import Controls from './controls/Controls'
import Environments from './staging/Environments'
import Lights from './staging/Lights'
import Welcome from './scenes/welcome/Welcome'
import AboutMe from './scenes/about_me/AboutMe'


const Experience = () => {
	return (
		<>
			<Perf />
			<Controls />
			<Environments />
			<Lights />
			<Physics debug>
				<Welcome />
				<AboutMe />
			</Physics>
		</>
	)
}

export default Experience
