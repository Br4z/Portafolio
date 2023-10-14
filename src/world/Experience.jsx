import { Suspense } from 'react'
// import { Physics } from "@react-three/rapier";
import Controls from './controls/Controls'
import { Perf } from 'r3f-perf'
import Environments from './staging/Environments'
import Lights from './staging/Lights'
import Welcome from './scenes/welcome/Welcome'
import AboutMe from './scenes/about_me/AboutMe'


const Experience = () => {
	return (
		<>
			<Perf />
			<Controls />
			<Lights />
			<Environments />
			<Welcome />
			<AboutMe />
		</>
	)
}

export default Experience
