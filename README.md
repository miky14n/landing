# isIA — Landing Page

Réplica de la landing page "isIA" construida con Next.js 14 (App Router) y Tailwind CSS. El robot del héroe es un SVG animado: el brazo derecho saluda en bucle y el cuerpo flota suavemente.

## Cómo correrlo

```bash
npm install
npm run dev
```

Abre http://localhost:3000

## Estructura

- `app/page.tsx` — la página completa (navbar, hero, tarjetas de features)
- `app/layout.tsx` — layout raíz + metadata
- `app/globals.css` — Tailwind + fuente Plus Jakarta Sans
- `components/RobotWaving.tsx` — el robot SVG animado (saludo + flotación + parpadeo de ojos)
- `components/Icons.tsx` — íconos de las tres tarjetas
- `tailwind.config.ts` — colores de marca (`isia-teal`, `isia-navy`) y keyframes de animación

## Personalizar

- **Colores**: edita `isia-teal` en `tailwind.config.ts`.
- **Textos**: todos los textos están directamente en `app/page.tsx` (arrays `navLinks` y `features`, más el JSX del hero).
- **Velocidad del saludo**: ajusta `wave: "wave 2.2s ease-in-out infinite"` en `tailwind.config.ts`.
