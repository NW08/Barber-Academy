import { type FC } from "react";
import background from "../assets/pages/Home/background.png";
import { Link } from "react-router-dom";
import Notification from "../components/Home/Notification.tsx"; // Importamos Link para navegación

const Home: FC = () => {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* --- BACKGROUND LAYER --- */}
      <div className="absolute inset-0 z-0">
        <img
          src={background}
          alt="Barber Shop Background"
          className="w-full h-full object-cover"
        />
        {/* Overlay oscuro general */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
      </div>

      {/* --- CONTENT LAYER --- */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center">
        {/* Título Principal */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tight mb-4 drop-shadow-lg">
          Barber Academy
        </h1>

        {/* Frase / Subtítulo */}
        <h2 className="text-xl md:text-3xl text-gray-200 font-medium mb-6 max-w-3xl">
          Domina el arte del corte clásico y la vanguardia moderna.
        </h2>

        {/* Descripción */}
        <p className="text-gray-300 text-base md:text-lg max-w-2xl mb-10 leading-relaxed">
          Formamos a la próxima generación de barberos de élite. Aprende de los
          mejores profesionales en un entorno real y lleva tu talento al
          siguiente nivel. Tu futuro comienza en la silla.
        </p>

        {/* --- BOTONES CON LINKS --- */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link
            to="/courses"
            className="px-8 py-3 rounded-full bg-white text-black font-bold text-lg hover:bg-[#E69100] transition-all
          duration-300 transform hover:-translate-y-1 shadow-lg text-center inline-block"
          >
            Saber más
          </Link>

          <Link
            to="/barber"
            className="px-8 py-3 rounded-full border-2 border-white text-white font-bold text-lg
          hover:bg-[#E69100]/25 transition-all duration-300 transform hover:-translate-y-1 text-center inline-block"
          >
            Visítanos
          </Link>
        </div>
        <Notification className={"mt-15"} title={"Reseñas"} />
      </div>
    </div>
  );
};

export default Home;
