"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function RobotFielObjetivo({
  isWaving = true,
}: {
  isWaving?: boolean;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Captura y suavizado físico del ratón
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 85, damping: 22 });
  const springY = useSpring(mouseY, { stiffness: 85, damping: 22 });

  // Rotación del contenedor en perspectiva para la salida del cuadro
  const rotateX = useTransform(springY, [-1, 1], [12, -12]);
  const rotateY = useTransform(springX, [-1, 1], [-12, 12]);

  // Seguimiento de la mirada (limitado al espacio interno del visor)
  const eyesX = useTransform(springX, [-1, 1], [-10, 10]);
  const eyesY = useTransform(springY, [-1, 1], [-7, 7]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;

      mouseX.set(Math.max(-1, Math.min(1, x)));
      mouseY.set(Math.max(-1, Math.min(1, y)));
    };

    const handleMouseLeave = () => {
      mouseX.set(0);
      mouseX.set(0);
    };

    window.addEventListener("mousemove", handleMouseMove);
    containerRef.current?.addEventListener("mouseleave", handleMouseLeave);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div
      ref={containerRef}
      className="w-[340px] h-[440px] rounded-[32px] bg-[#020d20] relative flex items-center justify-center overflow-visible select-none [perspective:1200px]"
    >
      {/* 1. FONDO EXACTO CON DETALLES DE CÓDIGO Y DIODOS */}
      <div className="absolute inset-0 rounded-[32px] overflow-hidden pointer-events-none z-0">
        <div className="absolute top-16 left-10 w-2.5 h-2.5 bg-[#4effca] rounded-full blur-[1.5px] opacity-80" />
        <div className="absolute top-36 right-12 w-2 h-2 bg-[#4effca] rounded-full blur-[1px] opacity-60" />
        <div className="absolute bottom-28 right-10 w-3 h-3 bg-[#4effca] rounded-full blur-[2px] opacity-70" />
        <div className="absolute bottom-14 left-14 w-2.5 h-2.5 bg-cyan-400 rounded-full blur-[1.5px] opacity-50" />

        <div className="absolute left-4 top-[40%] font-mono text-[8px] text-cyan-400/15 whitespace-pre leading-relaxed">
          {
            "// status\nconst ai = init();\nif (bot.ready) {\n  bot.protect();\n}"
          }
        </div>
        <div className="absolute right-4 bottom-[35%] font-mono text-[8px] text-cyan-400/15 text-right whitespace-pre leading-relaxed">
          {"10010 001\n1010 0011\n110110 01"}
        </div>
      </div>

      {/* 2. CONTENEDOR DEL ROBOT CON TRANSFORMACIÓN ESPACIAL */}
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="w-full h-full relative flex items-center justify-center z-10"
      >
        <svg
          viewBox="0 0 340 420"
          className="w-[108%] h-[108%] drop-shadow-[0_25px_45px_rgba(0,0,0,0.6)] overflow-visible"
        >
          <defs>
            {/* VOLUMEN BLANDO 3D (Gradiente radial complejo que imita la arcilla plástica del render original) */}
            <radialGradient id="clayRender3D" cx="40%" cy="25%" r="65%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="30%" stopColor="#f3f7fa" />
              <stop offset="75%" stopColor="#c3d3e1" />
              <stop offset="100%" stopColor="#9cb2c4" />
            </radialGradient>

            {/* Sombra de oclusión suave para simular hendiduras y relieves */}
            <filter
              id="innerShadow3D"
              x="-10%"
              y="-10%"
              width="120%"
              height="120%"
            >
              <feDropShadow
                dx="0"
                dy="8"
                stdDeviation="6"
                floodColor="#869db0"
                floodOpacity="0.5"
              />
            </filter>

            {/* Gradiente lineal para el interior del visor */}
            <linearGradient id="visorInner" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#24292e" />
              <stop offset="100%" stopColor="#0f1114" />
            </linearGradient>

            {/* Filtro Neon Glow para la mirada de diodo */}
            <filter id="eyeGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* ================= CUELLO CILÍNDRICO (EN RELIEVE REAL) ================= */}
          {/* El conector cilíndrico exacto de la imagen con sombreado de órbita */}
          <g id="cuello-cilindrico">
            <rect
              x="144"
              y="244"
              width="52"
              height="24"
              rx="5"
              fill="#93a8b9"
            />
            <ellipse cx="170" cy="244" rx="26" ry="6" fill="#6d8190" />
            <ellipse
              cx="170"
              cy="254"
              rx="26"
              ry="4"
              fill="#a8bdcd"
              opacity="0.4"
            />
          </g>

          {/* ================= TORSO CON MASA Y CURVATURA ================= */}
          <g id="torso-exacto">
            <path
              d="M 98 254 C 98 238, 242 238, 242 254 L 260 382 C 260 402, 80 402, 80 382 Z"
              fill="url(#clayRender3D)"
            />
            {/* Sombra de oclusión inferior del torso */}
            <path
              d="M 80 382 C 120 400, 220 400, 260 382 C 248 394, 92 394, 80 382 Z"
              fill="#889da9"
              opacity="0.6"
            />
          </g>

          {/* ================= ESCUDO OBJETIVO (SÓLO BORDES EXACTOS) ================= */}
          <g id="escudo-lineal" transform="translate(170, 314) scale(1.1)">
            {/* Sombra paralela interna para simular inserción en el pecho */}
            <path
              d="M-20,-20 L0,-20 L20,-20 L20,2 C20,13 11,22 0,26 C-11,22 -20,13 -20,2 Z"
              fill="none"
              stroke="#7e94a4"
              strokeWidth="6"
              opacity="0.25"
              transform="translate(0, 2)"
            />
            {/* Ala Izquierda - Azul Real */}
            <path
              d="M-20,-20 L0,-20 M-20,-20 L-20,2 C-20,13 -11,22 0,26"
              fill="none"
              stroke="#1e51a4"
              strokeWidth="5.5"
              strokeLinecap="round"
            />
            {/* Ala Derecha - Verde Esmeralda */}
            <path
              d="M20,-20 L0,-20 M20,-20 L20,2 C20,13 11,22 0,26"
              fill="none"
              stroke="#10b981"
              strokeWidth="5.5"
              strokeLinecap="round"
            />
          </g>

          {/* ================= BRAZO IZQUIERDO ================= */}
          <g id="brazo-izq">
            <path
              d="M 88 258 C 65 270, 46 312, 52 370 C 56 388, 78 388, 76 370 C 71 322, 86 282, 96 268 Z"
              fill="url(#clayRender3D)"
            />
          </g>

          {/* ================= BRAZO DERECHO ANIMADO ================= */}
          <motion.g
            id="brazo-der-saludo"
            animate={isWaving ? { rotate: [0, -22, 6, -22, 6, 0] } : {}}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            style={{ transformOrigin: "244px 264px" }}
          >
            <path
              d="M 252 258 C 275 270, 294 312, 288 370 C 284 388, 262 388, 264 370 C 269 322, 254 282, 244 268 Z"
              fill="url(#clayRender3D)"
            />
          </motion.g>

          {/* ================= ANTENA SUPERIOR ================= */}
          <g id="antena-fiel">
            <rect x="166" y="32" width="8" height="38" fill="#9db1be" rx="4" />
            <circle cx="170" cy="24" r="13" fill="url(#clayRender3D)" />
          </g>

          {/* ================= CABEZA Y OREJAS INCRUSTADAS (UNIFICADO EN UN SOLO TRAZADO) ================= */}
          {/* Al unir las orejas con la cabeza en una única silueta continua, logramos el look exacto de la imagen */}
          <g id="cabeza-unificada" filter="url(#innerShadow3D)">
            {/* Silueta Base unificada: Oreja Izquierda + Cabeza + Oreja Derecha */}
            <path
              d="M 64 146 
                 C 64 115, 52 118, 52 134 
                 C 52 152, 64 150, 64 160 
                 C 64 216, 276 216, 276 160 
                 C 276 150, 288 152, 288 134 
                 C 288 118, 276 115, 276 146 
                 C 276 90, 64 90, 64 146 Z"
              fill="url(#clayRender3D)"
            />

            {/* Sombra de relieve e inserción para denotar la curvatura de las orejas incrustadas */}
            <path
              d="M 64 125 C 57 127, 57 155, 64 158"
              fill="none"
              stroke="#9bb0bc"
              strokeWidth="2.5"
              strokeLinecap="round"
              opacity="0.7"
            />
            <path
              d="M 276 125 C 283 127, 283 155, 276 158"
              fill="none"
              stroke="#9bb0bc"
              strokeWidth="2.5"
              strokeLinecap="round"
              opacity="0.7"
            />

            {/* Sombra base del mentón para dar profundidad esférica sobre el cuello */}
            <path
              d="M 64 146 C 64 220, 276 220, 276 146 C 276 232, 64 232, 64 146 Z"
              fill="#9cb1be"
              opacity="0.5"
            />
          </g>

          {/* ================= VISOR NEGRO INTEGRADO ================= */}
          <g id="visor-pantalla">
            <rect
              x="88"
              y="90"
              width="164"
              height="98"
              rx="49"
              fill="url(#visorInner)"
            />
            {/* Reflejo superior del cristal */}
            <path
              d="M 106 98 Q 170 112, 234 98 Q 210 93, 170 93 Q 130 93, 106 98 Z"
              fill="#ffffff"
              opacity="0.12"
            />
          </g>

          {/* ================= OJOS DE NEÓN INTERACTIVOS ================= */}
          <motion.g id="mirada-cursor" style={{ x: eyesX, y: eyesY }}>
            {/* Ojo Izquierdo */}
            <circle
              cx="138"
              cy="139"
              r="19"
              fill="#52ffc8"
              filter="url(#eyeGlow)"
              opacity="0.4"
            />
            <circle cx="138" cy="139" r="14" fill="#3ee4af" />
            <circle cx="138" cy="139" r="9" fill="#adffe6" />

            {/* Ojo Derecho */}
            <circle
              cx="202"
              cy="139"
              r="19"
              fill="#52ffc8"
              filter="url(#eyeGlow)"
              opacity="0.4"
            />
            <circle cx="202" cy="139" r="14" fill="#3ee4af" />
            <circle cx="202" cy="139" r="9" fill="#adffe6" />
          </motion.g>
        </svg>
      </motion.div>
    </div>
  );
}
