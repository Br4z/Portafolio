import { RigidBody } from '@react-three/rapier'
import { useEffect, useRef, useState } from 'react'
import Room from './models/Room'
import { Text } from "@react-three/drei";


const AboutMe = () => {
	const ballBodyRef = useRef()

	const wakeUpBall = () => {
		ballBodyRef.current.wakeUp()
	}

	const onHandleBall = () => {
		ballBodyRef.current.applyImpulse({
			x: 0,
			y: 2,
			z: 0
		}, true)
	}

	const [play, setPlay] = useState(false)
	const [hitSound] = useState(() => new Audio('assets/sound/hit.wav'))

	useEffect(() => {
		ballBodyRef.current.sleep()
	}, [])

	useEffect(() => {
		if (play) {
			hitSound.currentTime = 0
			hitSound.volume = Math.random()
			hitSound.play()
		}
	}, [play])

	return (
		<>
			<Room side={12} x={12} y={0} z={0} />
			<RigidBody
				ref={ballBodyRef}
				colliders={'ball'}
				position={[8, 4, 0]}
				onCollisionEnter={() => setPlay(true)}
				onCollisionExit={() => setPlay(false)}
			>
				<mesh scale={0.5} onWheel={wakeUpBall} onClick={onHandleBall}>
					<sphereGeometry />
					<meshStandardMaterial color='red' />
				</mesh>
			</RigidBody>
			<Text color={'black'} scale={0.3} position={[6.1, 3, 0]} rotation-y={Math.PI / 2}>
				{"I am a Universidad del Valle's student,\n" +
					"studying my sixth semester in the systems engineering program.\n" +
					"I love Linux and anything related to programming.\n"}
			</Text>
		</>
	)
}

export default AboutMe
