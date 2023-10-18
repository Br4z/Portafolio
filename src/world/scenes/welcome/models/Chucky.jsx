import { useAnimations, useGLTF} from '@react-three/drei'
import { useEffect, useState, useRef } from 'react'


const Chucky = (props) => {
	const chuckyRef = useRef()
	const { nodes, materials, animations } = useGLTF('/assets/models/Chucky.glb')

	const { actions } = useAnimations(animations, chuckyRef)

	useEffect(() => {
		const action = actions['Armature|Chucky_WALK_FORWARD']
		action.play()
	}, [])

	const handleSign = (e, type) => {
		if (type == 'Chucky body') {
			const walking = actions['Armature|Chucky_WALK_FORWARD']
			const attacking = actions['Armature|Chucky_ATTACK-KNIFE-01']

			if (walking.isRunning()) {
				walking.stop()
				attacking.play()
			} else {
				attacking.stop()
				walking.play()
			}
		}
	}

	return (
		<group ref={chuckyRef} {...props} dispose={null}>
			<group name="Sketchfab_Scene" scale={0.005}>
				<group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, -0.528]}>
					<group
						name="ba44ef469c7a474589552e1d5676d8e7fbx"
						rotation={[Math.PI / 2, 0, 0]}
					>
						<group name="Object_2">
							<group name="RootNode">
								<group
									name="Mesh_Chucky"
									rotation={[0, 0.072, 0]}
									scale={1.041}
								/>
								<group
									name="Mesh_Knife"
									rotation={[0, 0.072, 0]}
									scale={1.041}
								/>
								<group
									name="Armature"
									rotation={[-Math.PI / 2, 0, 0.072]}
									scale={104.068}
								>
									<group name="Object_7">
										<primitive object={nodes._rootJoint} />
										<skinnedMesh
											onClick={(e) => { handleSign(e, 'Chucky body') }}
											castShadow
											name="Object_10"
											geometry={nodes.Object_10.geometry}
											material={materials.ChuckyBody_mat}
											skeleton={nodes.Object_10.skeleton}
											morphTargetDictionary={
												nodes.Object_10.morphTargetDictionary
											}
											morphTargetInfluences={
												nodes.Object_10.morphTargetInfluences
											}
										/>
										<skinnedMesh

											castShadow
											name="Object_11"
											geometry={nodes.Object_11.geometry}
											material={materials.ChuckyHair_mat}
											skeleton={nodes.Object_11.skeleton}
											morphTargetDictionary={
												nodes.Object_11.morphTargetDictionary
											}
											morphTargetInfluences={
												nodes.Object_11.morphTargetInfluences
											}
										/>
										<skinnedMesh
											castShadow
											name="Object_13"
											geometry={nodes.Object_13.geometry}
											material={materials.gray}
											skeleton={nodes.Object_13.skeleton}
										/>
										<group
											name="Object_9"
											rotation={[0, 0.072, 0]}
											scale={1.041}
										/>
										<group
											name="Object_12"
											rotation={[0, 0.072, 0]}
											scale={1.041}
										/>
									</group>
								</group>
							</group>
						</group>
					</group>
				</group>
			</group>
			{props.children}
		</group>
	)
}

useGLTF.preload('/assets/models/Chucky.glb')

export default Chucky
