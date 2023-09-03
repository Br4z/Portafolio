import { Canvas } from '@react-three/fiber'
import Experience from './components/Experience'
import Info from './components/Info'


const App = () => {
	return (
		<>
			<Info
				name="Brandon Calderon Prieto"
				biography="Arch Linux user"
			/>
			<Canvas
				//camera={{ position: [1, 0, 5] }}
			>
				<Experience />
			</Canvas>
		</>
	)
}

export default App