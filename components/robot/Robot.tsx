import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";
import { Head, Body } from "./RobotParts";

export default function Robot() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    // Subtle mouse tracking for the head (1-2 degrees of motion)
    const targetX = (state.pointer.x * Math.PI) / 15;
    const targetY = (state.pointer.y * Math.PI) / 15;

    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      targetX,
      0.05,
    );
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      -targetY,
      0.05,
    );
  });

  return (
    <Float
      speed={1.5} // Animation speed
      rotationIntensity={0.2} // Subtle rotation
      floatIntensity={0.8} // Gentle up/down
      floatingRange={[-0.1, 0.1]}
    >
      <group ref={groupRef} dispose={null}>
        <Head />
        <Body />
      </group>
    </Float>
  );
}
