import React, { type FormEvent, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const SignUp: React.FC = () => {
  const currentYear = new Date().getFullYear();

  // Estado del formulario
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    city: "",
    password: "",
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
    if (
      !formData.fullName ||
      !formData.email ||
      !formData.city ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      toast.warn("Por favor, completa todos los campos.", {
        position: "top-right",
        autoClose: 3000,
        theme: "dark",
      });
      return;
    }

    // 2. Validar coincidencia de contraseñas
    if (formData.password !== formData.confirmPassword) {
      toast.error("Las contraseñas no coinciden.", {
        position: "top-right",
        autoClose: 3000,
        theme: "dark",
      });
      return;
    }

    // 3. Simulación de envío
    setIsLoading(true);
    console.log("Datos de registro:", formData);

    // Simulación rápida
    setTimeout(() => {
      toast.success("¡Cuenta creada con éxito!", {
        position: "top-center",
        theme: "dark",
        progressClassName: "bg-[#E69100]",
      });
      setIsLoading(false);
    }, 1000);
  };

  return (
    // Fondo negro puro, sin imagen, ocupando toda la pantalla
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden font-sans bg-black">
      {/* --- BOTÓN VOLVER AL INICIO --- */}
      <Link
        to="/"
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
        <span className="font-medium text-sm hidden sm:block">
          Volver al inicio
        </span>
      </Link>

      {/* --- CARD DEL FORMULARIO --- */}
      <div className="relative z-10 w-full max-w-md px-4">
        <div
          className="bg-zinc-900/60 border border-white/10 rounded-2xl shadow-2xl p-8 backdrop-blur-md transform
        transition-all duration-500 hover:shadow-[#E69100]/50 hover:shadow-2xl"
        >
          {/* Header */}
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">
              Crear Cuenta
            </h2>
            <p className="text-gray-400 text-sm">
              Únete a la comunidad de{" "}
              <span className="text-[#E69100] font-semibold">
                Barber Academy
              </span>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* 1. Nombre Completo */}
            <div className="group">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  {/* Icono Usuario */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-500 group-focus-within:text-[#E69100] transition-colors duration-300"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Nombre Completo"
                  className="w-full pl-10 pr-4 py-3 bg-black/40 border border-gray-700 rounded-lg text-white
                  placeholder-gray-500 focus:outline-none focus:border-[#E69100] focus:ring-1 focus:ring-[#E69100]
                  transition-all duration-300"
                />
              </div>
            </div>

            {/* 2. Correo Electrónico */}
            <div className="group">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  {/* Icono email */}
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
                  placeholder="Correo Electrónico"
                  className="w-full pl-10 pr-4 py-3 bg-black/40 border border-gray-700 rounded-lg text-white
                  placeholder-gray-500 focus:outline-none focus:border-[#E69100] focus:ring-1 focus:ring-[#E69100]
                  transition-all duration-300"
                />
              </div>
            </div>

            {/* 3. Ciudad */}
            <div className="group">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  {/* Icono Mapa/Ubicación */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-500 group-focus-within:text-[#E69100] transition-colors duration-300"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Ciudad de residencia"
                  className="w-full pl-10 pr-4 py-3 bg-black/40 border border-gray-700 rounded-lg text-white
                  placeholder-gray-500 focus:outline-none focus:border-[#E69100] focus:ring-1 focus:ring-[#E69100]
                  transition-all duration-300"
                />
              </div>
            </div>

            {/* 4. Contraseña */}
            <div className="group">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  {/* Icono Candado */}
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
                  placeholder="Contraseña"
                  className="w-full pl-10 pr-4 py-3 bg-black/40 border border-gray-700 rounded-lg text-white
                  placeholder-gray-500 focus:outline-none focus:border-[#E69100] focus:ring-1 focus:ring-[#E69100]
                  transition-all duration-300"
                />
              </div>
            </div>

            {/* 5. Verificar Contraseña */}
            <div className="group">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  {/* Icono Candado Check */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-500 group-focus-within:text-[#E69100] transition-colors duration-300"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirmar Contraseña"
                  className="w-full pl-10 pr-4 py-3 bg-black/40 border border-gray-700 rounded-lg text-white
                  placeholder-gray-500 focus:outline-none focus:border-[#E69100] focus:ring-1 focus:ring-[#E69100]
                  transition-all duration-300"
                />
              </div>
            </div>

            {/* Botón Submit */}
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-3 px-4 rounded-lg font-bold text-white shadow-lg mt-2
              transition-all duration-300 transform hover:-translate-y-1 active:scale-95
              flex items-center justify-center gap-2
              ${
                isLoading
                  ? "bg-gray-700 cursor-not-allowed"
                  : "bg-[#E69100] hover:bg-[#c97e00] hover:shadow-[#E69100]/40"
              }`}
            >
              {isLoading ? "Registrando..." : "Crear Cuenta"}
            </button>
          </form>

          {/* Link a Login */}
          <div className="mt-6 text-center">
            <p className="text-gray-400 text-sm">
              ¿Ya tienes una cuenta?{" "}
              <Link
                to="/login"
                className="text-[#E69100] hover:text-[#ffb330] font-semibold transition-colors"
              >
                Inicia Sesión
              </Link>
            </p>
          </div>
        </div>

        <p className="text-center text-gray-600 text-xs mt-6">
          © {currentYear} Barber Academy. Todos los derechos reservados.
        </p>
      </div>

      <ToastContainer />
    </div>
  );
};

export default SignUp;
