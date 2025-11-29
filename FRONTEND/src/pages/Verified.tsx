import React from "react";
import { Link } from "react-router-dom";
import { Check, ChevronRight, Home } from "lucide-react";

const AccountCreated: React.FC = () => {
  return (
    <div
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black font-sans
    selection:bg-[#E69100] selection:text-black"
    >
      {/* --- BACKGROUND CON EFECTO PARALLAX --- */}
      {/* Usamos una escala ligera y posición absoluta para dar profundidad */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="absolute inset-0
        bg-[url('https://images.unsplash.com/photo-1503951914875-452162b7f30a?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center
        opacity-40 scale-110 animate-pulse-slow"
        />

        {/* Overlays de Gradiente para oscurecer y dar atmósfera */}
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/80 to-black/60" />
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-[#E69100]/10
        via-transparent to-transparent opacity-50"
        />
      </div>

      {/* --- TARJETA CENTRAL (GLASSMORPHISM) --- */}
      <div className="relative z-10 w-full max-w-lg px-6 animate-in fade-in zoom-in-95 duration-700 slide-in-from-bottom-8">
        <div
          className="bg-[#0E0C15]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 text-center shadow-2xl
         shadow-black/50 relative overflow-hidden group"
        >
          {/* Efecto de brillo en borde al hacer hover */}
          <div
            className="absolute inset-0 border-2 border-[#E69100]/0 group-hover:border-[#E69100]/20 rounded-3xl transition-colors
           duration-500 pointer-events-none"
          />

          {/* --- ICONO DE ÉXITO ANIMADO --- */}
          <div className="relative inline-flex items-center justify-center mb-8">
            {/* Círculo exterior (Pulse) */}
            <div className="absolute inset-0 bg-[#E69100] rounded-full opacity-20 animate-ping" />

            {/* Círculo medio */}
            <div
              className="relative w-24 h-24 bg-[#E69100]/10 rounded-full flex items-center justify-center border
            border-[#E69100]/50 shadow-[0_0_30px_rgba(230,145,0,0.3)]"
            >
              {/* Icono Check */}
              <Check
                className="w-10 h-10 text-[#E69100] drop-shadow-lg"
                strokeWidth={3}
              />
            </div>
          </div>

          {/* --- TEXTOS --- */}
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
            ¡Cuenta Creada!
          </h1>

          <div className="space-y-4 mb-10">
            <p className="text-gray-300 text-lg leading-relaxed">
              Tu registro se ha completado con éxito.
            </p>
            <p className="text-gray-500 text-sm">
              Ya eres parte oficial de{" "}
              <span className="text-[#E69100] font-semibold">
                Barber Academy
              </span>
              . Accede a tu cuenta para empezar a explorar nuestros cursos y
              servicios exclusivos.
            </p>
          </div>

          {/* --- BOTONES DE ACCIÓN --- */}
          <div className="flex flex-col gap-4">
            {/* Botón Principal: Iniciar Sesión */}
            <Link
              to="/login"
              className="group w-full py-4 bg-[#E69100] hover:bg-white text-black font-bold rounded-xl shadow-lg
               shadow-[#E69100]/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center
                justify-center gap-2"
            >
              <span>Iniciar Sesión Ahora</span>
              <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>

            {/* Botón Secundario: Volver al Inicio */}
            <Link
              to="/"
              className="group w-full py-4 bg-transparent border border-white/10 hover:border-white/30 text-gray-400
              hover:text-white font-medium rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Home className="w-4 h-4" />
              <span>Volver a la Página Principal</span>
            </Link>
          </div>
        </div>

        {/* Footer pequeño debajo de la tarjeta */}
        <p className="text-center text-gray-600 text-xs mt-8 animate-pulse">
          ¿Necesitas ayuda?{" "}
          <a
            href="https://web.whatsapp.com/"
            className="text-[#E69100] hover:underline"
          >
            Contáctanos
          </a>
        </p>
      </div>
    </div>
  );
};

export default AccountCreated;
