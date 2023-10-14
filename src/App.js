import { Canvas } from '@react-three/fiber'
import Experience from './world/Experience'
import Info from './components/Info'


const App = () => {
	return (
		<>
			<Info
				name='Brandon Calderón Prieto'
				biography='Arch Linux user'
			/>
			<Canvas
				shadows
			>
				<Experience />
			</Canvas>
		</>
	)
}

export default App
