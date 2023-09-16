import { OrbitControls } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef } from 'react'


const Experience = () => {
	const boxRef = useRef()
	const sphereRef= useRef()
	const torusRef = useRef()


	useFrame((state, delta) => {
		boxRef.current.rotation.x += 1 * delta;
		torusRef.current.position.y = Math.sin(state.clock.getElapsedTime());
		torusRef.current.rotation.y = Math.cos(state.clock.getElapsedTime());
		sphereRef.current.position.x = Math.sin(state.clock.getElapsedTime()) + 4;
	})

	return (
		<>
			<OrbitControls makeDefault />
			<ambientLight intensity={ 0.5 } />
			<directionalLight position={[10, 10, 5]} intensity={2} />

			<mesh ref={boxRef} position={[-4, 0, 0]}>
				<boxGeometry args={[2, 2, 2]} />
				<meshStandardMaterial color='yellow' />
			</mesh>

			<mesh ref={torusRef} position={[0, 0, 0]} rotation={[-Math.PI / 4, 0, 0]}>
				<torusGeometry args={[1, 0.4, 12, 48]} />
				<meshStandardMaterial wireframe color="purple" />
			</mesh>

			<mesh ref={sphereRef} position={[5, 0, 0]}>
				<sphereGeometry args={[1, 32, 16]} />
				<meshToonMaterial color="red" />
			</mesh>

		</>
	)
}

export default Experience
