import { Canvas } from '@react-three/fiber'
import Experience from './components/Experience'
import Info from './components/Info'


const App = () => {
	const cameraSettings = {
		position: [0, 5, 8],
		fov: 60
	}

	return (
		<>
			<Info
				name='Brandon Calderón Prieto'
				biography='Arch Linux user'
			/>
			<Canvas shadows camera={cameraSettings}>
				<Experience />
			</Canvas>
		</>
	)
}

export default App
