import React, { type FormEvent, useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

// 1. Importamos el hook del contexto
import { useAuth } from "../context/AuthContext";

const Login: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  // 2. Consumimos el contexto (login function, estado de carga y estado de sesión)
  // Renombramos isLoading a isAuthLoading para claridad, aunque podría usarse directo
  const { login, isLoggedIn, isLoading: isAuthLoading } = useAuth();

  // Estado del formulario
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // 3. Efecto de Redirección: Si ya estás logueado, te manda al Home
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  // Manejar cambios en los inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Manejar el envío del formulario
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Validación básica
    if (!formData.email || !formData.password) {
      toast.warn("Por favor, completa todos los campos.", {
        position: "top-right",
        autoClose: 3000,
        theme: "dark",
      });
      return;
    }

    // 4. Ejecutamos el login del contexto
    // El contexto se encarga del loading, el toast de éxito y de actualizar el estado user
    login(formData.email, formData.password);
  };

  return (
    // h-screen fuerza la altura exacta de la ventana, overflow-hidden corta cualquier sobrante
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden font-sans bg-black">
      {/* --- BOTÓN VOLVER AL INICIO --- */}
      <Link
        to="/"
        className="absolute top-6 left-6 z-50 flex items-center gap-2 text-white/70 hover:text-[#E69100]
        transition-colors duration-300 group"
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
          Volver al inicio
        </span>
      </Link>

      {/* --- BACKGROUND --- */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1503951914875-452162b7f30a?q=80&w=2070&auto=format&fit=crop"
          alt="Barber Shop Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      </div>

      {/* --- 2. FORMULARIO (CARD) --- */}
      <div className="relative z-10 w-full max-w-md p-8 mx-4">
        {/* Contenedor con efecto Glassmorphism oscuro */}
        <div
          className="bg-black/80 border border-white/10 rounded-2xl shadow-2xl p-8 backdrop-blur-md transform
        transition-all duration-500 hover:shadow-[#E69100]/50 hover:shadow-2xl"
        >
          {/* Header del Formulario */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">
              Iniciar Sesión
            </h2>
            <p className="text-gray-400 text-sm">
              Accede a tu panel de{" "}
              <span className="text-[#E69100] font-semibold">
                Barber Academy
              </span>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Input: email */}
            <div className="group">
              <label className="block text-gray-300 text-sm font-medium mb-2 ml-1">
                Correo Electrónico
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  {/* Icono User SVG */}
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
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="admin@barberia.com"
                  className="w-full pl-10 pr-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white
                  placeholder-gray-500
                  focus:outline-none focus:border-[#E69100] focus:ring-1 focus:ring-[#E69100]
                  transition-all duration-300 transform focus:scale-[1.01]"
                />
              </div>
            </div>

            {/* Input: Password */}
            <div className="group">
              <label className="block text-gray-300 text-sm font-medium mb-2 ml-1">
                Contraseña
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  {/* Icono Lock SVG */}
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
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white
                  placeholder-gray-500
                  focus:outline-none focus:border-[#E69100] focus:ring-1 focus:ring-[#E69100]
                  transition-all duration-300 transform focus:scale-[1.01]"
                />
              </div>
            </div>

            {/* --- SECCIÓN DE ENLACES AUXILIARES --- */}
            <div className="flex items-center justify-between text-sm mt-2">
              <Link
                to="/signup"
                className="text-gray-400 hover:text-[#E69100] transition-colors font-medium"
              >
                ¿No tienes cuenta?
              </Link>

              <Link
                to="/validation"
                className="text-gray-400 hover:text-[#E69100] transition-colors font-medium"
              >
                ¿Olvidaste tu contraseña?
              </Link>
            </div>

            {/* Botón de Submit */}
            <button
              type="submit"
              disabled={isAuthLoading} // Usamos el loading del contexto
              className={`w-full py-3 px-4 rounded-lg font-bold text-white shadow-lg 
              transition-all duration-300 transform hover:-translate-y-1 active:scale-95
              flex items-center justify-center gap-2
              ${
                isAuthLoading
                  ? "bg-gray-600 cursor-not-allowed"
                  : "bg-[#E69100] hover:bg-[#c97e00] hover:shadow-[#E69100]/40"
              }`}
            >
              {isAuthLoading ? (
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
                  Procesando...
                </>
              ) : (
                "Ingresar"
              )}
            </button>
          </form>
        </div>

        {/* Footer pequeño */}
        <p className="text-center text-gray-500 text-xs mt-6">
          © {currentYear}. Todos los derechos reservados.
        </p>
      </div>

      {/* Container de Toastify */}
      <ToastContainer />
    </div>
  );
};

export default Login;
