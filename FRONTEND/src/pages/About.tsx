import React from "react";
import { instructors } from "../assets/pages/About/AboutConstants.ts";
import background from "../assets/pages/About/about.jpeg";

const About: React.FC = () => {
  return (
    <div className="relative w-full bg-black min-h-screen font-sans text-white overflow-hidden">
      {/* --- 1. HERO SECTION & MISIÓN --- */}
      <section className="relative h-[80vh] flex items-center justify-center">
        {/* Fondo con Parallax suave (CSS fixed simulado) */}
        <div className="absolute inset-0 z-0">
          <img
            src={background}
            alt="Barbería Histórica"
            className="w-full h-full object-cover opacity-60"
          />
          {/* Overlay gradiente para legibilidad */}
          <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/50 to-black" />
          <div className="absolute inset-0 backdrop-blur-[2px]" />
        </div>

        {/* Contenido Hero */}
        <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl pt-20">
          <span
            className="inline-block py-1 px-3 rounded-full bg-[#E69100]/20 text-[#E69100] border border-[#E69100]/50
          text-xs font-bold tracking-widest uppercase mb-6 animate-pulse"
          >
            Nuestra Esencia
          </span>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            Más que una <span className="text-[#E69100]">Barbería</span>,<br />
            un Legado Social.
          </h1>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
            En <strong>Barber Academy</strong>, cada corte cuenta una historia y
            cada curso construye un futuro. Nos enorgullece ser una institución
            donde el 100% de los ingresos educativos se destinan a financiar
            <strong> ayudas para orfanatos locales</strong> y al mantenimiento
            de nuestro
            <strong> Museo Histórico de la Barbería</strong>, un espacio
            dedicado a preservar el arte del oficio.
          </p>

          <div className="h-1 w-24 bg-[#E69100] mx-auto rounded-full"></div>
        </div>
      </section>

      {/* --- 2. SECCIÓN INSTRUCTORES (Lógica solicitada) --- */}
      <section className="relative py-24 px-4 bg-black">
        <div className="container mx-auto">
          {/* Título de Sección */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Maestros del Oficio
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Aprende de profesionales que no solo dominan la técnica, sino que
              comparten nuestra visión de impacto comunitario.
            </p>
          </div>

          {/* GRID: 2 Columnas (md:grid-cols-2) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 justify-items-center max-w-6xl mx-auto">
            {instructors.map((instructor) => (
              <div
                key={instructor.id}
                className="block relative p-0.5 bg-no-repeat bg-cover bg-center w-full h-120 md:h-136 rounded-2xl
                overflow-hidden group cursor-pointer shadow-2xl border border-white/5"
                // Aquí se define la textura de fondo
                style={{ backgroundImage: `url(${instructor.backgroundUrl})` }}
              >
                {/* Overlay semitransparente (NO SÓLIDO) para que se vea la textura pero el texto resalte */}
                <div className="absolute inset-0 bg-black/60 transition-opacity duration-500 group-hover:opacity-0 z-10" />

                {/* --- A. CONTENIDO DE TEXTO (Estado Normal) --- */}
                <div
                  className="relative z-20 flex flex-col justify-end h-full p-8 md:p-12 pointer-events-none transition-all
                duration-500 ease-in-out group-hover:opacity-0 group-hover:-translate-y-8"
                >
                  {/* Decoración: Línea naranja */}
                  <div className="w-12 h-1 bg-[#E69100] mb-6 rounded-full" />

                  <h4 className="text-3xl md:text-4xl mb-4 text-white font-bold leading-tight drop-shadow-lg">
                    {instructor.name}
                  </h4>

                  <p className="text-base md:text-lg text-gray-200 leading-relaxed font-light">
                    {instructor.bio}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-[#E69100] font-bold text-sm uppercase tracking-wider">
                    <span>Ver perfil</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </div>
                </div>

                {/* --- B. CAPA DE IMAGEN REAL (Estado Hover) ---
                    Se eliminó <<bg-black>> de aquí para que no tape el fondo del padre
                */}
                <div className="absolute inset-0 z-0">
                  <div
                    className="absolute inset-0 opacity-0 transition-all duration-700 ease-out group-hover:opacity-100
                  group-hover:scale-105"
                  >
                    <img
                      src={instructor.imageUrl}
                      alt={instructor.name}
                      className="w-full h-full object-cover"
                    />

                    {/* Gradiente inferior para legibilidad en hover */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-80" />

                    {/* Nombre en Hover */}
                    <div
                      className="absolute bottom-8 left-0 right-0 text-center transform translate-y-4 group-hover:translate-y-0
                    transition-transform duration-700 delay-100"
                    >
                      <span
                        className="inline-block px-6 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full
                      text-white font-bold text-lg"
                      >
                        {instructor.name}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Decorativo de la sección */}
          <div className="mt-20 text-center">
            <p className="text-gray-500 text-sm">
              Nuestros instructores donan parte de su tiempo para mantener vivo
              el legado.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
