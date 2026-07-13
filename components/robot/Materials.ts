import * as THREE from "three";

// Plástico blanco prémium satinado (Especificación exacta: Roughness 0.28, Metalness 0)
export const whitePlasticMaterial = new THREE.MeshPhysicalMaterial({
  color: "#f8fafc",
  roughness: 0.28,
  metalness: 0.0,
  clearcoat: 0.4,
  clearcoatRoughness: 0.15,
  reflectivity: 0.5,
});

// Visor de la pantalla negro cristalino
export const blackScreenMaterial = new THREE.MeshPhysicalMaterial({
  color: "#090d16",
  roughness: 0.12,
  metalness: 0.0,
  clearcoat: 1.0,
  clearcoatRoughness: 0.05,
});

// Ojos mint auto-emisivos estables
export const glowingMintMaterial = new THREE.MeshStandardMaterial({
  color: "#000000",
  emissive: "#4bfbca",
  emissiveIntensity: 1.6,
});

export const logoBlueMaterial = new THREE.MeshPhysicalMaterial({
  color: "#215cd4",
  roughness: 0.3,
  metalness: 0.0,
  clearcoat: 0.3,
});

export const logoCyanMaterial = new THREE.MeshPhysicalMaterial({
  color: "#3ae4b5",
  roughness: 0.3,
  metalness: 0.0,
  clearcoat: 0.3,
});
