import React, { type FormEvent, useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
// Asegúrate de que la ruta a tu configuración de axios sea correcta
import api from "../API/axiosConfig.ts";

const VerifyCode: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  // 1. Recuperar el PREFIJO (la parte oculta del token) desde el estado de navegación
  const tokenPrefix = location.state?.tokenPrefix || "";

  const [code, setCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Seguridad: Si no hay prefijo (usuario entró por URL directa o recargó), lo devolvemos al inicio.
  useEffect(() => {
    if (!tokenPrefix) {
      // Opcional: Mostrar un toast antes de redirigir
      // toast.error("Sesión expirada. Por favor solicita el código nuevamente.", { theme: "dark" });
      navigate("/recuperar");
    }
  }, [tokenPrefix, navigate]);

  // Manejar cambios en el input (Permite letras y números)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Regex: Acepta solo caracteres alfanuméricos
    if (/^[a-zA-Z0-9]*$/.test(value)) {
      if (value.length <= 6) {
        setCode(value); // Guardamos lo que escribe el usuario (sin transformar a mayúsculas aquí si quieres preservar case
        // original, aunque usualmente los tokens son case-sensitive)
      }
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Validación longitud
    if (code.length < 6) {
      toast.error("El código debe tener 6 caracteres.", {
        position: "top-right",
        theme: "dark",
      });
      return;
    }

    setIsLoading(true);

    try {
      // 2. UNIR EL TOKEN (Lógica Split Token)
      // Prefijo (Backend) + Código (Usuario) = Token Completo DB
      const fullToken = `${tokenPrefix}${code}`;

      // 3. Consultar al Backend (GET /recuperar/:token)
      // Esta ruta valida que el token exista y no haya expirado
      const { data } = await api.get(`/recuperar/${fullToken}`);

      toast.success(data.msg || "Código verificado.", {
        position: "top-center",
        autoClose: 1500,
        theme: "dark",
        progressClassName: "bg-[#E69100]",
      });

      // 4. Navegar a la pantalla de CAMBIAR PASSWORD
      // Importante: Pasamos el 'fullToken' completo porque la siguiente pantalla lo necesitará
      // para hacer el POST final de cambio de contraseña.
      setTimeout(() => {
        navigate("/change", { state: { token: fullToken } });
      }, 1500);
    } catch (error: any) {
      console.error(error);
      const errorMsg =
        error.response?.data?.msg || "Código inválido o expirado.";
      toast.error(errorMsg, {
        position: "top-right",
        theme: "dark",
      });
      setIsLoading(false);
    }
  };

  const handleResend = () => {
    // Redirigir al usuario para que vuelva a poner su correo
    navigate("/recuperar");
  };

  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden font-sans bg-black">
      {/* Botón Cancelar / Volver al Login */}
      <Link
        to="/login"
        className="absolute top-6 left-6 z-50 flex items-center gap-2 text-white/70 hover:text-[#E69100] transition-colors
        duration-300 group"
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

      <div className="relative z-10 w-full max-w-md px-4">
        <div
          className="bg-zinc-900/60 border border-white/10 rounded-2xl shadow-2xl p-8 backdrop-blur-md transform transition-all
        duration-500 hover:shadow-[#E69100]/50 hover:shadow-2xl"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#E69100]/10 mb-4 text-[#E69100]">
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
                  d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296
                  1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0
                  1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0
                  1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043
                  3.296A3.745 3.745 0 0 1 21 12Z"
                />
              </svg>
            </div>

            <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">
              Verificar Código
            </h2>
            <p className="text-gray-400 text-sm max-w-xs mx-auto">
              Introduce el código de 6 caracteres que enviamos a tu correo
              electrónico.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="group relative">
              <input
                type="text"
                name="code"
                value={code}
                onChange={handleChange}
                maxLength={6}
                // Placeholder genérico para indicar formato
                placeholder="A1B2C3"
                autoComplete="off"
                className="w-full py-4 bg-black/40 border border-gray-700 rounded-lg text-white text-3xl font-mono text-center
                tracking-[0.5em] md:tracking-[0.8em] placeholder-gray-700 focus:outline-none focus:border-[#E69100] focus:ring-1
                focus:ring-[#E69100] transition-all duration-300 shadow-inner uppercase"
              />
              <div className="absolute -bottom-6 left-0 w-full text-center">
                <span className="text-xs text-gray-500 font-mono">
                  {code.length}/6 Caracteres
                </span>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-3 px-4 rounded-lg font-bold text-white shadow-lg transition-all duration-300 transform 
                hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2 ${
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
                    Verificando...
                  </>
                ) : (
                  "Validar Token"
                )}
              </button>
            </div>
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm">
              ¿No tienes el código?{" "}
              <button
                onClick={handleResend}
                className="text-[#E69100] hover:text-[#ffb330] font-semibold transition-colors focus:outline-none hover:underline"
              >
                Solicitar nuevo
              </button>
            </p>
          </div>
        </div>

        <p className="text-center text-gray-600 text-xs mt-6">
          © {currentYear} Barber Academy. Seguridad Verificada.
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default VerifyCode;
