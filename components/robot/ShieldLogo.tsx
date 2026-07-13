import React, { useMemo } from "react";
import * as THREE from "three";
import { RoundedBox } from "@react-three/drei";
import {
  whitePlasticMaterial,
  logoBlueMaterial,
  logoCyanMaterial,
} from "./Materials";

export const ChestShieldLogo = () => {
  const shieldShape = useMemo(() => {
    const s = new THREE.Shape();
    s.moveTo(-0.16, 0.14);
    s.quadraticCurveTo(0, 0.17, 0.16, 0.14);
    s.quadraticCurveTo(0.2, 0.0, 0.15, -0.12);
    s.quadraticCurveTo(0, -0.25, -0.15, -0.12);
    s.quadraticCurveTo(-0.2, 0.0, -0.16, 0.14);
    return s;
  }, []);

  const innerShape = useMemo(() => {
    const s = new THREE.Shape();
    s.moveTo(-0.12, 0.1);
    s.quadraticCurveTo(0, 0.13, 0.12, 0.1);
    s.quadraticCurveTo(0.15, 0.0, 0.11, -0.08);
    s.quadraticCurveTo(0, -0.19, -0.11, -0.08);
    s.quadraticCurveTo(-0.15, 0.0, -0.12, 0.1);
    return s;
  }, []);

  const extrudeSettings = {
    depth: 0.015,
    bevelEnabled: true,
    bevelSegments: 3,
    steps: 1,
    bevelSize: 0.008,
    bevelThickness: 0.008,
  };

  return (
    <group position={[0, 0.15, 0.45]}>
      {/* Marco exterior azul */}
      <mesh castShadow receiveShadow>
        <extrudeGeometry args={[shieldShape, extrudeSettings]} />
        <primitive object={logoBlueMaterial} />
      </mesh>

      {/* Fondo interior blanco */}
      <mesh position={[0, 0, 0.01]}>
        <extrudeGeometry args={[innerShape, extrudeSettings]} />
        <primitive object={whitePlasticMaterial} />
      </mesh>

      {/* Detalle de esquina superior derecha cyan */}
      <RoundedBox
        args={[0.06, 0.03, 0.015]}
        radius={0.008}
        smoothness={4}
        position={[0.09, 0.09, 0.018]}
      >
        <primitive object={logoCyanMaterial} />
      </RoundedBox>
    </group>
  );
};
