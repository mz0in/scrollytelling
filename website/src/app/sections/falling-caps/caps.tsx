import { useScrollytelling } from "@bsmnt/scrollytelling";
import React from "react";
import { View, useGLTF } from "@react-three/drei";
import { webglTunnel } from "../../../lib/webgl";
import { GLTF } from "three-stdlib";
import { Euler, Vector3 } from "three";
import { useFrame, useThree } from "@react-three/fiber";

type GLTFResult = GLTF & {
  nodes: {
    Sphere007: THREE.Mesh;
    Sphere007_1: THREE.Mesh;
  };
  materials: {
    ["m_Cap-v2"]: THREE.MeshStandardMaterial;
    m_Outline: THREE.MeshStandardMaterial;
  };
};

const capProps: { position: Vector3, rotation: Euler }[] = [
  { position: new Vector3(-0.08, -0.1, 0.1), rotation: new Euler(0.4, -0.6, 0.4) },
  { position: new Vector3(-0.5, -0.1, 0.55), rotation: new Euler(0, -0.3, -0.5, "ZYX") },
  { position: new Vector3(0.22, 0.15, 0.4), rotation: new Euler(0.55, -0.6, 0.8) },
  { position: new Vector3(-0.05, 0.12, 1.1), rotation: new Euler(0.1, -0.6, -0.4) },
  { position: new Vector3(0.3, -0.1, 1.1), rotation: new Euler(0.1, -0.7, 0.5) }
];

const CapsModel = ({ timeline }: { timeline?: gsap.core.Timeline }) => {
  const innerRef = React.useRef<THREE.Group>(null);
  const { width } = useThree((state) => state.viewport);
  const { nodes, materials } = useGLTF("/models/Cap.glb") as GLTFResult;

  useFrame(() => {
    if (!innerRef.current) return;

    innerRef.current.children.forEach(() => {
      if (!timeline?.scrollTrigger) return;

      // Parallax y based on distance from the camera.
      // m.position.y = -0.1 + (m.position.z / 2) * timeline.scrollTrigger.progress;
    });
  });

  return (
    <group ref={innerRef}>
      {capProps.map(({position, rotation}) => {
        return (
          <group position={position.multiplyScalar(width / 2)} rotation={rotation}>
            <group>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Sphere007.geometry}
                material={materials["m_Cap-v2"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Sphere007_1.geometry}
                material={materials.m_Outline}
              />
            </group>
          </group>
        );
      })}
    </group>
  );
};

export const CapsWebgl = ({
  track,
}: {
  track: React.RefObject<HTMLElement>;
}) => {
  const { timeline } = useScrollytelling();

  return (
    <webglTunnel.In>
      {/* @ts-ignore */}
      <View track={track}>
        <CapsModel timeline={timeline} />
      </View>
    </webglTunnel.In>
  );
};
