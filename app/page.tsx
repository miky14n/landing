import RobotWaving from "@/components/RobotWaving";
import { GearIcon, BarsIcon, CubeIcon } from "@/components/Icons";
import ChatModal from "@/components/ChatModal";

const navLinks = ["Servicios", "Nosotros", "Casos de Éxito"];

const features = [
  {
    icon: <GearIcon />,
    title: "Automatización Eficiente",
    description:
      "Automatización eficiente in consectatur adipiscing elit, sed do eiusmod products.",
  },
  {
    icon: <BarsIcon />,
    title: "Análisis Predictivo",
    description:
      "Análisis predictive coumpiting into platfornal touudaism, crails and maintaine dats.",
  },
  {
    icon: <CubeIcon />,
    title: "Soluciones a Medida",
    description:
      "Soluciones a medida with our solutions are viorsitice, rendrined and requerement.",
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
        <section className="grid lg:grid-cols-2 gap-10 items-center pt-16 pb-24">
          <RobotWaving />

          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-white">
              Inteligencia
              <br />
              Artificial que
              <br />
              <span className="text-isia-teal">Impula tu Negocio</span>
            </h1>

            <p className="mt-6 text-white/60 max-w-md leading-relaxed">
              isIA agencia es valor sit amet, consectetur adipiscing elit,
              sed dii nonommy nibh euismod commodo consetetursut valoores
              minteliguntat netnt-dobr agolulantus.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#"
                className="rounded-full bg-isia-teal text-[#06231c] font-semibold px-6 py-3 hover:brightness-95 transition"
              >
                Descubre Cómo
              </a>
              <a
                href="#"
                className="rounded-full border border-white/25 text-white font-semibold px-6 py-3 hover:bg-white/10 transition"
              >
                Ver Soluciones
              </a>
            </div>
          </div>
        </section>

        {/* Feature cards */}
        <section className="grid sm:grid-cols-3 gap-6 pb-20">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.06] transition-colors"
            >
              <div className="w-11 h-11 rounded-xl bg-isia-teal/10 flex items-center justify-center mb-5">
                {feature.icon}
              </div>
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
