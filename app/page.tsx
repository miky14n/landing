import RobotWaving from "@/components/RobotWaving";
import { GearIcon, BarsIcon, CubeIcon, Mesage } from "@/components/Icons";
import ChatModal from "@/components/ChatModal";
import dynamic from "next/dynamic";
import Image from "next/image";

// Lazy load the 3D scene to prevent SSR hydration errors
const RobotScene = dynamic(() => import("../components/robot/Scene"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center w-full h-screen text-cyan-400/50 font-mono">
      Initializing AI Core...
    </div>
  ),
});
const navLinks = ["Servicios", "Nosotros", "Casos de Éxito"];

const features = [
  {
    icon: "🍔",
    sector: "Sector Gastronómico",
    title: "Pedidos Omnicanal Inteligentes",
    description:
      "Agentes que toman órdenes por WhatsApp, aplican reglas de tu menú y envían el detalle estructurado directo a cocina sin errores humanos.",
  },
  {
    icon: "🏥",
    sector: "Sector Salud y Clínicas",
    title: "Gestión de Citas Autónoma",
    description:
      "Asistentes que consultan la disponibilidad de tus especialistas en tiempo real, agendan pacientes y envían recordatorios automáticos para reducir el ausentismo médico.",
  },
  {
    icon: "🛍️",
    sector: "Sector Retail e Importadoras",
    title: "Vendedor Consultivo 24/7",
    description:
      "Conectamos tu inventario a un agente IA capaz de cotizar, recomendar productos estratégicos (up-selling) y cerrar ventas en milisegundos a cualquier hora de la madrugada.",
  },
  {
    icon: "🏢",
    sector: "Sector Inmobiliario",
    title: "Broker Virtual Inmobiliario",
    description:
      "Califica a tus prospectos (leads) al instante, realiza un match exacto con tu catálogo de propiedades y agenda visitas físicas automáticamente para tus asesores humanos.",
  },
  {
    icon: "✈️",
    sector: "Sector Turismo y Agencias",
    title: "Concierge Turístico Global",
    description:
      "Atiende a viajeros de todo el mundo en su idioma nativo, cotiza itinerarios complejos y resuelve dudas sobre visas o clima sin importar las diferencias de zona horaria.",
  },
  {
    icon: "🎓",
    sector: "Sector Educación",
    title: "Orientador Académico IA",
    description:
      "Guía a miles de prospectos por tus procesos de admisión, mallas curriculares y becas simultáneamente, absorbiendo sin colapsar los picos altos de demanda estudiantil.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#060a1a] relative overflow-hidden">
      {/* ambient background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 right-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[140px]" />
        <div className="absolute top-40 left-1/3 w-[500px] h-[500px] bg-isia-teal/10 rounded-full blur-[140px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-6">
        {/* Navbar */}
        <header className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md px-6 py-4">
          <span className="text-2xl font-extrabold text-white">
            is<span className="text-isia-teal">IA</span>
          </span>

          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm text-white/80 hover:text-white transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>

          <a
            href="#contacto"
            className="rounded-full border border-white/25 px-5 py-2 text-sm text-white hover:bg-white/10 transition-colors"
          >
            Contacto
          </a>
        </header>

        {/* Hero */}
        <section className="grid items-center gap-12 py-20 lg:grid-cols-2">
          <div className="relative flex items-center justify-center">
            <div className="relative aspect-square w-full max-w-[650px]">
              <Image
                src="/ImagenOfi.png"
                alt="Robot"
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>

          <div className="max-w-xl">
            <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl">
              Conectamos
              <br />
              tus Sistemas
              <br />
              <span className="text-isia-teal">Automatizamos tus Metas.</span>
            </h1>

            <p className="mt-6 leading-relaxed text-white/60">
              En isIA aplicamos Ingeniería de automatización con IA que conectan
              tus sistemas y ejecutan tus procesos diarios. Sin cambiar tus
              sistemas, diseñamos soluciones que se adaptan a tus sueños.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#"
                className="rounded-full bg-isia-teal px-6 py-3 font-semibold text-[#06231c] transition hover:brightness-95"
              >
                Descubre Cómo
              </a>

              <a
                href="#"
                className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Ver Soluciones
              </a>
            </div>
          </div>
        </section>

        {/* Feature cards */}
        <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-20">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.06] transition-colors"
            >
              <div className="w-11 h-11 rounded-xl bg-isia-teal/10 flex items-center justify-center mb-5 text-xl">
                {feature.icon}
              </div>
              <p className="text-isia-teal text-xs font-semibold uppercase tracking-wide mb-2">
                {feature.sector}
              </p>
              <h3 className="text-white font-semibold text-lg mb-2">
                {feature.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </section>
      </div>

      <ChatModal />
    </main>
  );
}
