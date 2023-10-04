import { useHelper } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { DirectionalLightHelper, PointLightHelper, SpotLightHelper } from 'three'

const Lights = () => {
	const directionalLightRef = useRef()
	const spotLightRef = useRef()
	const pointLightRef = useRef()

	useHelper(directionalLightRef, DirectionalLightHelper)
	useHelper(spotLightRef, SpotLightHelper)
	useHelper(pointLightRef, PointLightHelper)

	return (
		<>
			<ambientLight intensity={0.5} />
			<directionalLight
				castShadow
				ref={directionalLightRef}
				position={[0, 10, 10]}
				intensity={1}
				color={'white'}
				shadow-mapSize={[1024, 1024]}
				shadow-camera-far={32}
				shadow-camera-left={-8}
				shadow-camera-right={8}
				shadow-camera-top={8}
				shadow-camera-bottom={-8}
			/>
			<spotLight
				ref={spotLightRef}
				position={[0, 8, 2]}
				angle={Math.PI / 12}
				intensity={100}
				penumbra={1}
				color={'#5F87AF'}
				distance={12}
			/>
		</>
	)
}

export default Lights
