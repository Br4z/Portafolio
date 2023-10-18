import { useEffect, useRef } from 'react'
import { useAnimations, useGLTF } from '@react-three/drei'


export function ArchChan(props) {
	const archChanRef = useRef()
	const { nodes, materials, animations } = useGLTF('/assets/models/Arch_chan.glb')

	const { actions } = useAnimations(animations, archChanRef)

	useEffect(() => {
		const action = actions['MorphBake']
		action.play()
	}, [])

	return (
		<group ref={archChanRef} {...props} dispose={null}>
			<group name="Sketchfab_Scene">
				<group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
					<group name="root">
						<group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
							<group name="Armature_59">
								<group name="GLTF_created_0">
									<primitive object={nodes.GLTF_created_0_rootJoint} />
									<skinnedMesh
										castShadow
										name="Object_7"
										geometry={nodes.Object_7.geometry}
										material={materials["Material.005"]}
										skeleton={nodes.Object_7.skeleton}
										morphTargetDictionary={nodes.Object_7.morphTargetDictionary}
										morphTargetInfluences={nodes.Object_7.morphTargetInfluences}
									/>
									<group name="Arch-chan_58" />
								</group>
							</group>
						</group>
					</group>
				</group>
			</group>
		</group>
	)
}

useGLTF.preload('/assets/models/Arch_chan.glb')

export default ArchChan
