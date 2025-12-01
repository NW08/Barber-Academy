import React, { type FormEvent, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import api from "../API/axiosConfig.ts";

const Forgot: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!email) {
      toast.warn("Por favor, ingresa tu correo electrónico.", {
        position: "top-right",
        theme: "dark",
      });
      return;
    }

    setIsLoading(true);

    try {
      // 1. Petición al Backend
      const { data } = await api.post("/recuperar", { email });

      toast.success(data.msg, {
        position: "top-center",
        theme: "dark",
        progressClassName: "bg-[#E69100]",
      });

      // 2. Extraer el Prefijo
      const { tokenPrefix } = data;

      // 3. Navegar a la pantalla de ingresar código
      // Pasamos el tokenPrefix en el <<state>> para que VerifyCode lo pueda usar
      setTimeout(() => {
        // Asegúrate que la ruta '/verify_code' coincida con tu Router
        navigate("/validation", { state: { tokenPrefix } });
      }, 1500);
    } catch (error: any) {
      console.error(error);
      const errorMsg =
        error.response?.data?.msg || "Error al solicitar recuperación.";

      toast.error(errorMsg, {
        position: "top-right",
        theme: "dark",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden font-sans bg-black">
      {/* Botón Volver al Login */}
      <Link
        to="/login"
        className="absolute top-6 left-6 z-50 flex items-center gap-2 text-white/70 hover:text-[#E69100] transition-colors
         duration-300 group"
      >
        <div
          className="p-2 rounded-full bg-black/40 border border-white/10 group-hover:border-[#E69100]/50 backdrop-blur-sm
        transition-all"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
        </div>
        <span className="font-medium text-sm hidden sm:block">
          Volver al Login
        </span>
      </Link>

      {/* Background (Mismo que Login) */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1503951914875-452162b7f30a?q=80&w=2070&auto=format&fit=crop"
          alt="Barber Shop Background"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      </div>

      {/* Card */}
      <div className="relative z-10 w-full max-w-md p-8 mx-4">
        <div
          className="bg-black/80 border border-white/10 rounded-2xl shadow-2xl p-8 backdrop-blur-md transform transition-all
        duration-500 hover:shadow-[#E69100]/50 hover:shadow-2xl"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#E69100]/10 mb-4 text-[#E69100]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-7 h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0
                  01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5
                  17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
                />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">
              Recuperar Acceso
            </h2>
            <p className="text-gray-400 text-sm">
              Ingresa tu correo y te enviaremos un código de seguridad.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="group">
              <label className="block text-gray-300 text-sm font-medium mb-2 ml-1">
                Correo Electrónico
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-500 group-focus-within:text-[#E69100] transition-colors duration-300"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ejemplo@barberia.com"
                  className="w-full pl-10 pr-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white
                   placeholder-gray-500 focus:outline-none focus:border-[#E69100] focus:ring-1 focus:ring-[#E69100]
                   transition-all duration-300"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-3 px-4 rounded-lg font-bold text-white shadow-lg transition-all duration-300 
              transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2 ${
                isLoading
                  ? "bg-gray-600 cursor-not-allowed"
                  : "bg-[#E69100] hover:bg-[#c97e00] hover:shadow-[#E69100]/40"
              }`}
            >
              {isLoading ? "Enviando..." : "Enviar Código"}
            </button>
          </form>
        </div>

        <p className="text-center text-gray-500 text-xs mt-6">
          © {currentYear} Barber Academy. Todos los derechos reservados.
        </p>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Forgot;
