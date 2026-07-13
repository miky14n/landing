import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { RoundedBox, Sphere, Cylinder, Capsule } from "@react-three/drei";
import * as THREE from "three";
import {
  whitePlasticMaterial,
  blackScreenMaterial,
  glowingMintMaterial,
  logoBlueMaterial,
  logoCyanMaterial,
} from "./Materials";

export const Eyes = () => {
  const leftEyeRef = useRef<THREE.Mesh>(null);
  const rightEyeRef = useRef<THREE.Mesh>(null);

  // Subtle breathing animation for the glow
  useFrame((state) => {
    const pulse = Math.sin(state.clock.elapsedTime * 2) * 0.1 + 0.9;
    if (leftEyeRef.current) leftEyeRef.current.scale.setScalar(pulse);
    if (rightEyeRef.current) rightEyeRef.current.scale.setScalar(pulse);
  });

  return (
    <group position={[0, 0, 0.82]}>
      <Sphere ref={leftEyeRef} args={[0.2, 32, 32]} position={[-0.4, 0, 0]}>
        <primitive object={glowingMintMaterial} />
      </Sphere>
      <Sphere ref={rightEyeRef} args={[0.2, 32, 32]} position={[0.4, 0, 0]}>
        <primitive object={glowingMintMaterial} />
      </Sphere>
    </group>
  );
};

export const Head = () => {
  return (
    <group position={[0, 1.4, 0]}>
      {/* Main White Shell */}
      <RoundedBox args={[2.2, 1.6, 1.8]} radius={0.5} smoothness={8}>
        <primitive object={whitePlasticMaterial} />
      </RoundedBox>

      {/* Black Face Screen */}
      <RoundedBox
        args={[1.8, 1.0, 0.2]}
        radius={0.3}
        smoothness={8}
        position={[0, 0, 0.85]}
      >
        <primitive object={blackScreenMaterial} />
      </RoundedBox>

      <Eyes />

      {/* Antenna */}
      <group position={[0, 0.8, 0]}>
        <Cylinder args={[0.05, 0.05, 0.6, 16]} position={[0, 0.3, 0]}>
          <primitive object={whitePlasticMaterial} />
        </Cylinder>
        <Sphere args={[0.15, 32, 32]} position={[0, 0.65, 0]}>
          <primitive object={whitePlasticMaterial} />
        </Sphere>
      </group>

      {/* Side Ears */}
      <Capsule
        args={[0.15, 0.4, 16, 32]}
        position={[-1.15, 0, 0]}
        rotation={[0, 0, Math.PI / 2]}
      >
        <primitive object={whitePlasticMaterial} />
      </Capsule>
      <Capsule
        args={[0.15, 0.4, 16, 32]}
        position={[1.15, 0, 0]}
        rotation={[0, 0, Math.PI / 2]}
      >
        <primitive object={whitePlasticMaterial} />
      </Capsule>
    </group>
  );
};

export const Logo = () => {
  // Approximating the 3D shield logo with primitives
  return (
    <group position={[0, 0.2, 0.82]}>
      {/* Main Shield Body */}
      <RoundedBox args={[0.6, 0.7, 0.1]} radius={0.15} smoothness={4}>
        <primitive object={logoBlueMaterial} />
      </RoundedBox>
      {/* Inner White Cutout (Simulated) */}
      <RoundedBox
        args={[0.4, 0.5, 0.12]}
        position={[0, 0.05, 0]}
        radius={0.1}
        smoothness={4}
      >
        <primitive object={whitePlasticMaterial} />
      </RoundedBox>
      {/* Cyan Corner Detail */}
      <RoundedBox
        args={[0.2, 0.2, 0.15]}
        position={[0.2, 0.25, 0]}
        radius={0.08}
        smoothness={4}
      >
        <primitive object={logoCyanMaterial} />
      </RoundedBox>
    </group>
  );
};

export const Body = () => {
  return (
    <group position={[0, -0.6, 0]}>
      {/* Main Torso */}
      <RoundedBox args={[1.8, 2.0, 1.6]} radius={0.6} smoothness={8}>
        <primitive object={whitePlasticMaterial} />
      </RoundedBox>

      <Logo />

      {/* Left Arm */}
      <Capsule
        args={[0.3, 1.2, 16, 32]}
        position={[-1.2, -0.2, 0]}
        rotation={[0, 0, -0.2]}
      >
        <primitive object={whitePlasticMaterial} />
      </Capsule>

      {/* Right Arm */}
      <Capsule
        args={[0.3, 1.2, 16, 32]}
        position={[1.2, -0.2, 0]}
        rotation={[0, 0, 0.2]}
      >
        <primitive object={whitePlasticMaterial} />
      </Capsule>
    </group>
  );
};
