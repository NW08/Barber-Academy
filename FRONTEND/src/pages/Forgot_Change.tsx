import React, { type FormEvent, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const ResetPassword: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  // Estado del formulario
  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  // Manejar cambios en los inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Manejar el envío del formulario
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // 1. Validar campos vacíos
    if (!formData.newPassword || !formData.confirmPassword) {
      toast.warn("Por favor, ingresa y confirma tu nueva contraseña.", {
        position: "top-right",
        autoClose: 3000,
        theme: "dark",
      });
      return;
    }

    // 2. Validar longitud mínima (ej. 8 caracteres)
    if (formData.newPassword.length < 8) {
      toast.error("La contraseña debe tener al menos 8 caracteres.", {
        position: "top-right",
        autoClose: 3000,
        theme: "dark",
      });
      return;
    }

    // 3. Validar que coincidan
    if (formData.newPassword !== formData.confirmPassword) {
      toast.error("Las contraseñas no coinciden.", {
        position: "top-right",
        autoClose: 3000,
        theme: "dark",
      });
      return;
    }

    setIsLoading(true);

    // 4. Simulación de proceso de cambio de contraseña
    setTimeout(() => {
      setIsLoading(false);

      toast.success("¡Contraseña restablecida correctamente!", {
        position: "top-center",
        autoClose: 2000,
        theme: "dark",
        progressClassName: "bg-[#E69100]",
      });

      // Simulación de redirección al inicio después del éxito
      setTimeout(() => {
        navigate("/");
      }, 2500);
    }, 1500);
  };

  return (
    // Contenedor principal: Fondo negro puro
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden font-sans bg-black">
      {/* --- BOTÓN VOLVER (Atrás) --- */}
      <Link
        to="/verify-code" // Regresa al paso anterior
        className="absolute top-6 left-6 z-50 flex items-center gap-2 text-white/70 hover:text-[#E69100]
        transition-colors duration-300 group"
      >
        <div
          className="p-2 rounded-full bg-white/5 border border-white/10 group-hover:border-[#E69100]/50 backdrop-blur-sm
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
        <span className="font-medium text-sm hidden sm:block">Cancelar</span>
      </Link>

      {/* --- CARD PRINCIPAL --- */}
      <div className="relative z-10 w-full max-w-md px-4">
        <div
          className="bg-zinc-900/60 border border-white/10 rounded-2xl shadow-2xl p-8 backdrop-blur-md transform
        transition-all duration-500 hover:shadow-[#E69100]/50 hover:shadow-2xl"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#E69100]/10 mb-4 text-[#E69100]">
              {/* Icono de Llave/Candado reiniciando */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0
                  0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                />
              </svg>
            </div>

            <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">
              Nueva Contraseña
            </h2>
            <p className="text-gray-400 text-sm max-w-xs mx-auto">
              Crea una contraseña segura para proteger tu cuenta.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Input: Nueva Contraseña */}
            <div className="group">
              <label className="block text-gray-300 text-sm font-medium mb-2 ml-1">
                Contraseña nueva
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-500 group-focus-within:text-[#E69100] transition-colors duration-300"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <input
                  type="password"
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleChange}
                  placeholder="Mínimo 8 caracteres"
                  className="w-full pl-10 pr-4 py-3 bg-black/40 border border-gray-700 rounded-lg text-white
                  placeholder-gray-600 focus:outline-none focus:border-[#E69100] focus:ring-1 focus:ring-[#E69100]
                  transition-all duration-300"
                />
              </div>
            </div>

            {/* Input: Confirmar Contraseña */}
            <div className="group">
              <label className="block text-gray-300 text-sm font-medium mb-2 ml-1">
                Confirmar contraseña
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-500 group-focus-within:text-[#E69100] transition-colors duration-300"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34
                      9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586
                      7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Repite la contraseña"
                  className="w-full pl-10 pr-4 py-3 bg-black/40 border border-gray-700 rounded-lg text-white
                  placeholder-gray-600 focus:outline-none focus:border-[#E69100] focus:ring-1 focus:ring-[#E69100]
                  transition-all duration-300"
                />
              </div>
            </div>

            {/* Botón de Submit */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-3 px-4 rounded-lg font-bold text-white shadow-lg 
                transition-all duration-300 transform hover:-translate-y-1 active:scale-95
                flex items-center justify-center gap-2
                ${
                  isLoading
                    ? "bg-gray-700 cursor-not-allowed"
                    : "bg-[#E69100] hover:bg-[#c97e00] hover:shadow-[#E69100]/40"
                }`}
              >
                {isLoading ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Actualizando...
                  </>
                ) : (
                  "Restablecer Contraseña"
                )}
              </button>
            </div>
          </form>
        </div>

        <p className="text-center text-gray-600 text-xs mt-6">
          © {currentYear} Barber Academy. Todos los derechos reservados.
        </p>
      </div>

      <ToastContainer />
    </div>
  );
};

export default ResetPassword;
