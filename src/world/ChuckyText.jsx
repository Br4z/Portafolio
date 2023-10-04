import { Center, Float, Html, Text, Text3D } from '@react-three/drei'
import { useEffect } from 'react'
import { Color } from 'three'


const ChuckyText = () => {
	const text = `Click on me`

	return (
		<Center position-y={1.5}>
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
				<meshStandardMaterial color='#FFFFAF' />
			</Text3D>
		</Center>
	)
}

export default ChuckyText
