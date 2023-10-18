import { BallCollider, CuboidCollider, RigidBody } from '@react-three/rapier'
import { useEffect, useRef, useState } from 'react'
import Room from './models/Room'


const ContactMe = () => {
	return (
		<>
			<Room side={12} x={-12} y={0} z={0} />
		</>
	)
}

export default ContactMe
