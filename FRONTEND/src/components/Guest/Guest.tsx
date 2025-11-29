import React from "react";
import { Link } from "react-router-dom";

interface AuthGuardProps {
  /**
   * Opcional: Si quieres pasar contenido específico para mostrar detrás
   * y que el componente actúe como wrapper.
   * Si no se usa, simplemente pon este componente al final de tu página.
   */
  children?: React.ReactNode;
}

const AuthGuard: React.FC<AuthGuardProps> = ({ children }) => {
  return (
    <>
      {/* Si usas este componente como Wrapper, renderiza los hijos.
        Si lo usas como componente suelto sobre una página,
        <<children>> será undefined y no afectará.
      */}
      {children}

      {/* --- CAPA DE BLOQUEO (OVERLAY) --- */}
      {/* fixed inset-0: Cubre toda la ventana (viewport)
        z-[999]: Se asegura de estar encima de everything
        backdrop-blur-md: El efecto clave de desenfoque
        bg-black/60: Oscurecimiento translúcido
      */}
      <div
        className="fixed inset-0 z-999 flex items-center justify-center w-full h-full bg-black/60 backdrop-blur-md
            transition-all duration-500"
      >
        {/* --- TARJETA DE AVISO --- */}
        <div className="relative z-10 w-full max-w-md px-4 mx-4 animate-in fade-in zoom-in duration-300">
          <div className="bg-zinc-900/80 border border-white/10 rounded-2xl shadow-2xl p-8 backdrop-blur-xl text-center">
            {/* Icono de Candado Animado */}
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#E69100]/10 mb-6 group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10 text-[#E69100] transform transition-transform duration-500 group-hover:scale-110"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75
                                11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25
                                2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                />
              </svg>
            </div>

            {/* Títulos */}
            <h2 className="text-3xl font-bold text-white mb-3 tracking-tight">
              Acceso Restringido
            </h2>
            <p className="text-gray-400 text-base mb-8 leading-relaxed">
              Para ver este contenido exclusivo y acceder a las herramientas de{" "}
              <span
                className="text-[#E69100]
                            font-semibold"
              >
                Barber Academy
              </span>
              , necesitas iniciar sesión.
            </p>

            {/* Acciones */}
            <div className="flex flex-col gap-3">
              {/* Botón Principal: Login */}
              <Link
                to="/login"
                className="w-full py-3.5 px-4 rounded-lg font-bold text-white bg-[#E69100] hover:bg-[#c97e00]
                shadow-lg hover:shadow-[#E69100]/40 transition-all duration-300 transform hover:-translate-y-1"
              >
                Iniciar Sesión
              </Link>

              {/* Separador sutil */}
              <div className="flex items-center gap-3 my-1">
                <div className="h-px w-full bg-white/10"></div>
                <span className="text-xs text-gray-500 font-medium">O</span>
                <div className="h-px w-full bg-white/10"></div>
              </div>

              {/* Botón Secundario: Registro */}
              <Link
                to="/signup"
                className="w-full py-3.5 px-4 rounded-lg font-bold text-white border border-white/20
                hover:bg-white/5 hover:border-white/40 transition-all duration-300"
              >
                Crear una cuenta nueva
              </Link>
            </div>

            {/* Footer pequeño */}
            <div className="mt-6">
              <Link
                to="/"
                className="text-sm text-gray-500 hover:text-gray-300 transition-colors"
              >
                ← Volver a la página principal
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

/*
  const isAuthenticated = false;
  {!isAuthenticated && <AuthGuard />}
*/

export default AuthGuard;
