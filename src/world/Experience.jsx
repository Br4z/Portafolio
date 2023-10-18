import { Physics } from '@react-three/rapier';
import Controls from './controls/Controls'
import Environments from './staging/Environments'
import Lights from './staging/Lights'
import Welcome from './scenes/welcome/Welcome'
import AboutMe from './scenes/about_me/AboutMe'
import ContactMe from './contact_me/ContactMe';


const Experience = () => {
	return (
		<>
			<Controls />
			<Environments />
			<Lights />
			<Physics>
				<Welcome />
				<AboutMe />
				<ContactMe />
			</Physics>
		</>
	)
}

export default Experience
