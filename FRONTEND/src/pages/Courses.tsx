import React from "react";
import { benefits } from "../assets/pages/Courses/CoursesConstants.ts";
import { GradientLight } from "../components/Courses/GradientLight.tsx";
import background from "../assets/pages/Home/background.png";
import { Link } from "react-router-dom"; // Usamos Link para navegación interna

// 1. Tipo para cada beneficio
interface BenefitItem {
  id: string | number;
  title: string;
  text: string;
  iconUrl: string;
  imageUrl?: string | null;
  backgroundUrl: string;
  light?: boolean;
}
const typedBenefits = benefits as BenefitItem[];

const Courses: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* --- BACKGROUND LAYER --- */}
      <div className="absolute inset-0 z-0">
        <img
          src={background}
          alt="Background"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" />
      </div>

      {/* --- CONTENT LAYER --- */}
      <div className="relative z-10 container mx-auto px-4 pt-32 pb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Nuestros Cursos
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explora nuestra oferta académica y especialízate con los mejores.
          </p>
        </div>

        {/* --- GRID DE TARJETAS --- */}
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {typedBenefits.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-size-[100%_100%] w-full max-w-[24rem] group cursor-pointer"
              style={{ backgroundImage: `url(${item.backgroundUrl})` }}
              key={item.id}
            >
              {/* 1. CONTENIDO DE TEXTO
                  - Desaparece al hacer hover (group-hover:opacity-0)
                  - Efecto de salida hacia arriba (translate-y)
              */}
              <div
                className="relative z-20 flex flex-col min-h-96 p-[2.4rem] pointer-events-none transition-all duration-500
              ease-in-out group-hover:opacity-0 group-hover:-translate-y-4"
              >
                <h4 className="h4 text-2xl md:text-3xl mb-5 text-white font-bold">
                  {item.title}
                </h4>

                <p className="body-2 mb-6 text-n-3 leading-relaxed">
                  {item.text}
                </p>

                <div className="flex items-center mt-auto">
                  <img
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                    className="opacity-80"
                  />
                </div>
              </div>

              {item.light && <GradientLight />}

              {/* 2. CAPA DEL BOTÓN (Aparece al hacer hover)
                  - Centrado absoluto
                  - Opacidad inicial 0 -> 100
                  - Z-30 para asegurar interactividad
              */}
              <div
                className="absolute inset-0 z-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all
               duration-500 ease-in-out"
              >
                <Link
                  to="/"
                  className="px-8 py-3 rounded-full border border-white bg-white/10 backdrop-blur-md text-white font-bold text-lg
                    hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 shadow-xl"
                >
                  Adquirir Curso
                </Link>
              </div>

              {/* 3. CAPA DE IMAGEN DE FONDO—ClipPath para el borde SVG—Zoom suave al hacer hover (scale-110)
               */}
              <div
                className="absolute inset-0.5 bg-n-8 overflow-hidden"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div
                  className="absolute inset-0 opacity-60 transition-all duration-700 ease-out group-hover:opacity-40
                group-hover:scale-110"
                >
                  {item.imageUrl && (
                    <>
                      <img
                        src={item.imageUrl}
                        width={380}
                        height={362}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 transition-colors duration-500" />
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
