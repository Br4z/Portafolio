import { OrbitControls } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef } from 'react'


const Experience = () => {
	const boxRef = useRef()
	const sphereRef= useRef()
	const torusRef = useRef()
	const coneRef = useRef()
	const r = 1;
	let frames = 0;

	useFrame((state, delta) => {
		let x = r * Math.cos(frames * 0.01)
		let y = r * Math.sin(frames * 0.01)

		boxRef.current.position.x = -3 + x
		boxRef.current.position.y = 0 + y

		sphereRef.current.position.x = -1 + x
		sphereRef.current.position.y = -2 + y

		torusRef.current.position.x = -1 + x
		torusRef.current.position.y = 2 + y

		coneRef.current.position.x = 1 + x
		coneRef.current.position.y = 0 + y

		frames++;
	})

	return (
		<>
			<OrbitControls makeDefault />
			<ambientLight intensity={ 0.5 } />
			<directionalLight position={[10, 10, 5]} intensity={2} />

			<mesh ref={boxRef} position={[-3, 0, 0]}>
				<boxGeometry args={[2, 2, 2]} />
				<meshStandardMaterial color='yellow' />
			</mesh>

			<mesh ref={sphereRef} position={[-1, -2, 0]}>
				<sphereGeometry args={[1, 32, 16]} />
				<meshStandardMaterial color='blue' />
			</mesh>

			<mesh ref={torusRef} position={[-1, 2, 0]}>
				<torusGeometry args={[1, 0.4, 12, 48]} />
				<meshStandardMaterial color='red' />
			</mesh>

			<mesh ref={coneRef} position={[1, 0, 0]}>
				<coneGeometry args={[1, 3, 32]} />
				<meshLambertMaterial color='purple' />
			</mesh>
		</>
	)
}

export default Experience