"use client";

import React, { Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, PerspectiveCamera, Sparkles } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import Robot from "./Robot";

export default function Scene() {
  return (
    <div className="w-full h-full absolute inset-0 z-10">
      <Canvas dpr={[1, 2]} gl={{ antialias: true, toneMappingExposure: 1 }}>
        <PerspectiveCamera makeDefault position={[0, 0.5, 7]} fov={40} />

        {/* Studio Lighting Setup */}
        <ambientLight intensity={0.4} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={1.5}
          color="#e0f2fe" // Cool key light
        />
        <directionalLight
          position={[-5, -5, -5]}
          intensity={0.8}
          color="#38bdf8" // Blue rim light
        />

        {/* Environment Map for Premium Reflections */}
        <Environment preset="city" environmentIntensity={0.5} />

        {/* Floating background particles */}
        <Sparkles
          count={100}
          scale={10}
          size={2}
          speed={0.4}
          opacity={0.3}
          color="#67e8f9"
        />

        <Suspense fallback={null}>
          <Robot />
        </Suspense>

        {/* Post-processing for glowing eyes */}
        <EffectComposer disableNormalPass>
          <Bloom luminanceThreshold={1} mipmapBlur intensity={1.2} levels={8} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
