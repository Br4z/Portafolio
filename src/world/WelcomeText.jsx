import { Center, Float, Html, Text, Text3D } from '@react-three/drei'
import { useEffect } from 'react'
import { Color } from 'three'


const WelcomeText = () => {
	const text = `Welcome to\n Tux home`

	return (
		<Center position-y={3}>
			<Text3D
				font={'/assets/fonts/CaskaydiaCove NF_Regular.json'}
				bevelEnabled
				bevelSize={0.001}
				bevelThickness={0.1}
				height={0.1}
				lineHeight={0.5}
				letterSpacing={0.05}
				size={0.25}
			>
				{text}
				<meshStandardMaterial wireframe color='#AF5F5F' />
			</Text3D>
		</Center>
	)
}

export default WelcomeText