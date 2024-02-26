import { useAnimations, useGLTF } from "@react-three/drei";
import React, { useEffect, useRef } from "react";

export function Cook(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "/models/Characters_Captain_Barbarossa.gltf"
  );
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions["Walk"].timeScale = 0.5;
    actions["Walk"].play();
  });
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="CharacterArmature">
          <primitive object={nodes.Root} />
          <skinnedMesh
            castShadow
            name="Captain_Barbarossa_"
            geometry={nodes.Captain_Barbarossa_.geometry}
            material={materials.Atlas}
            skeleton={nodes.Captain_Barbarossa_.skeleton}
          />
          <skinnedMesh
            castShadow
            name="Ernest"
            geometry={nodes.Ernest.geometry}
            material={materials.Atlas}
            skeleton={nodes.Ernest.skeleton}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/Characters_Captain_Barbarossa.gltf");