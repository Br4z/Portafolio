import React, { useRef } from "react"
import { useGLTF } from "@react-three/drei"
import { RigidBody } from "@react-three/rapier"

{/* <RigidBody type={"fixed"} colliders={"trimesh"} friction={0.7} restitution={1}>
	<group {...props} dispose={null}>
		<group name="Scene">
			<mesh
				name="Hause"
				geometry={nodes.Hause.geometry}
				material={materials.wall}
			/>
			<mesh
				name="FloorHause"
				geometry={nodes.FloorHause.geometry}
				material={materials.floor}
			/>
		</group>
	</group>
</RigidBody> */}

export function House(props) {
	const { nodes, materials } = useGLTF("/assets/models/house.glb")
	return (
			<group {...props} dispose={null}>
					<group name="Scene">
						<mesh
							name="Hause"
							geometry={nodes.Hause.geometry}
							material={materials.wall}
						/>
						<mesh
							name="FloorHause"
							geometry={nodes.FloorHause.geometry}
							material={materials.floor}
						/>
					</group>
			</group>
	)
}

export default House
useGLTF.preload("/assets/models/house.glb")
