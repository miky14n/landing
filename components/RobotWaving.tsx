"use client";

import { useEffect, useState } from "react";

export default function RobotWaving() {
  const [eyes, setEyes] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const MAX = 5;

    const handleMove = (e: any) => {
      let x = (e.clientX / window.innerWidth - 0.5) * 16;
      let y = (e.clientY / window.innerHeight - 0.5) * 16;

      const distance = Math.sqrt(x * x + y * y);

      if (distance > MAX) {
        x = (x / distance) * MAX;
        y = (y / distance) * MAX;
      }

      setEyes({ x, y });
    };

    window.addEventListener("mousemove", handleMove);

    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div className="relative flex items-center justify-center animate-float">
      <svg
        viewBox="0 0 420 460"
        className="w-full max-w-[380px] h-auto drop-shadow-[0_0_60px_rgba(62,230,196,0.25)]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="bodyGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f4f6fa" />
            <stop offset="100%" stopColor="#c7ccd8" />
          </linearGradient>

          <linearGradient id="headGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#d7dbe4" />
          </linearGradient>

          <radialGradient id="eyeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#a8ffe8" />
            <stop offset="100%" stopColor="#2fe0b8" />
          </radialGradient>
        </defs>

        {/* Antenna */}
        <line
          x1="210"
          y1="10"
          x2="210"
          y2="50"
          stroke="#9aa1b0"
          strokeWidth="5"
        />

        <circle
          cx="210"
          cy="10"
          r="9"
          fill="url(#eyeGlow)"
          className="animate-pulseGlow"
        />

        {/* Head */}
        <rect
          x="110"
          y="48"
          width="200"
          height="150"
          rx="60"
          fill="url(#headGrad)"
          stroke="#b9bfcc"
          strokeWidth="2"
        />

        {/* Face */}
        <rect x="132" y="95" width="156" height="80" rx="34" fill="#0d1a33" />

        {/* Left Eye */}
        <g className="animate-blink">
          <circle cx="178" cy="135" r="20" fill="url(#eyeGlow)" />
          <circle
            cx={178 + eyes.x}
            cy={135 + eyes.y}
            r="7"
            fill="#ffffff"
            style={{
              transition: "all 80ms linear",
            }}
          />
        </g>

        {/* Right Eye */}
        <g className="animate-blink">
          <circle cx="242" cy="135" r="20" fill="url(#eyeGlow)" />
          <circle
            cx={242 + eyes.x}
            cy={135 + eyes.y}
            r="7"
            fill="#ffffff"
            style={{
              transition: "all 80ms linear",
            }}
          />
        </g>

        {/* Ears */}
        <rect x="94" y="105" width="18" height="46" rx="9" fill="#c7ccd8" />

        <rect x="308" y="105" width="18" height="46" rx="9" fill="#c7ccd8" />

        {/* Body */}
        <rect
          x="120"
          y="205"
          width="180"
          height="150"
          rx="42"
          fill="url(#bodyGrad)"
          stroke="#b9bfcc"
          strokeWidth="2"
        />

        {/* Shield */}
        <path
          d="M210 240 L238 250 V282 C238 305 224 320 210 328 C196 320 182 305 182 282 V250 Z"
          fill="#0d1a33"
        />

        <path
          d="M210 250 L228 257 V280 C228 296 220 306 210 312 C200 306 192 296 192 280 V257 Z"
          fill="#2fe0b8"
        />

        <path
          d="M210 250 L210 312 C220 306 228 296 228 280 V257 Z"
          fill="#2f7ce0"
        />

        {/* Left Arm */}
        <g>
          <ellipse
            cx="112"
            cy="300"
            rx="22"
            ry="55"
            fill="url(#bodyGrad)"
            stroke="#b9bfcc"
            strokeWidth="2"
          />
        </g>

        {/* Right Arm */}
        <g
          className="animate-wave"
          style={{
            transformOrigin: "300px 235px",
          }}
        >
          <ellipse
            cx="300"
            cy="270"
            rx="22"
            ry="55"
            fill="url(#bodyGrad)"
            stroke="#b9bfcc"
            strokeWidth="2"
          />

          <circle
            cx="300"
            cy="220"
            r="20"
            fill="url(#bodyGrad)"
            stroke="#b9bfcc"
            strokeWidth="2"
          />
        </g>

        {/* Legs */}
        <rect
          x="150"
          y="350"
          width="46"
          height="70"
          rx="20"
          fill="url(#bodyGrad)"
          stroke="#b9bfcc"
          strokeWidth="2"
        />

        <rect
          x="224"
          y="350"
          width="46"
          height="70"
          rx="20"
          fill="url(#bodyGrad)"
          stroke="#b9bfcc"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
}
