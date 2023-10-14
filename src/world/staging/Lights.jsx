import { useHelper } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef, useMemo } from 'react'
import { DirectionalLightHelper, HemisphereLightHelper, PointLightHelper, SpotLightHelper } from 'three'
import { useControls } from 'leva'

const Lights = () => {
	const directionalLightRef = useRef()
	const spotLightRef = useRef()
	const hemisphereLightRef = useRef()
	const pointLightRef = useRef()

	useHelper(directionalLightRef, DirectionalLightHelper)
	useHelper(spotLightRef, SpotLightHelper)
	useHelper(hemisphereLightRef, HemisphereLightHelper)
	useHelper(pointLightRef, PointLightHelper)

	useFrame((state) => {
		spotLightRef.current.position.x = Math.sin(state.clock.getElapsedTime())
	})

	const options = useMemo(() => {
		return {
			intensitySpotLight: { value: 100, min: 0, max: 1000, step: 1 },
			colorSpotLight: { value: 'white' }
		}
	}, [])

	const { intensitySpotLight, colorSpotLight } = useControls('Spot light', options)


	return (
		<>
			<ambientLight intensity={0.5} />
			{/* <directionalLight
				castShadow
				ref={directionalLightRef}
				position={[10, 10, 5]}
				intensity={1}
				color={'white'}
				shadow-mapSize={[1024, 1024]}
				shadow-camera-far={32}
				shadow-camera-left={-8}
				shadow-camera-right={8}
				shadow-camera-top={8}
				shadow-camera-bottom={-8}
			/> */}
			<spotLight
				ref={spotLightRef}
				position={[0, 4, 2]}
				angle={Math.PI / 12}
				intensity={intensitySpotLight}
				penumbra={1}
				color={colorSpotLight}
				distance={8}
			/>
			{/* <hemisphereLight
				ref={hemisphereLightRef}
				intensity={5}
				position={[2, 10, -2]}
				color={'red'}
			/>
			<pointLight
				ref={pointLightRef}
				position={[2, 8, -2]}
				intensity={4}
				color={'red'}
			/> */}
		</>
	)
}

export default Lights
