import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"; // Importamos useParams para leer el token de la URL
import { Check, ChevronRight, Home, Loader2, XCircle } from "lucide-react"; // Añadimos iconos de carga y error
import api from "../API/axiosConfig.ts"; // Tu instancia de axios configurada

const ConfirmAccount: React.FC = () => {
  const [status, setStatus] = useState<"loading" | "success" | "error">(
    "loading",
  );
  const [msg, setMsg] = useState("");
  const { token } = useParams(); // Obtenemos el token de la URL: /confirmar/:token

  useEffect(() => {
    const confirmarCuenta = async () => {
      try {
        // Petición GET al endpoint que me mostraste: router.get("/confirmar/:token", confirmarMail);
        const { data } = await api.get(`/confirmar/${token}`);

        setMsg(data.msg); // "Cuenta confirmada exitosamente..."
        setStatus("success");
      } catch (error: any) {
        setStatus("error");
        // Capturamos el mensaje de error del backend (ej.: <<Token inválido...>>)
        setMsg(
          error.response?.data?.msg || "Hubo un error al confirmar la cuenta",
        );
      }
    };

    confirmarCuenta().catch((error) => {
      console.error("Error Fatal:", error);
    });
  }, [token]);

  return (
    <div
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black font-sans
    selection:bg-[#E69100] selection:text-black"
    >
      {/* --- BACKGROUND (Mantenemos tu diseño intacto) --- */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="absolute inset-0
          bg-[url('https://images.unsplash.com/photo-1503951914875-452162b7f30a?q=80&w=2070&auto=format&fit=crop')]
        bg-cover bg-center opacity-40 scale-110 animate-pulse-slow"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/80 to-black/60" />
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))]
        from-[#E69100]/10 via-transparent to-transparent opacity-50"
        />
      </div>

      {/* --- TARJETA CENTRAL --- */}
      <div className="relative z-10 w-full max-w-lg px-6 animate-in fade-in zoom-in-95 duration-700 slide-in-from-bottom-8">
        <div
          className="bg-[#0E0C15]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 text-center shadow-2xl
        shadow-black/50 relative overflow-hidden group"
        >
          <div
            className="absolute inset-0 border-2 border-[#E69100]/0 group-hover:border-[#E69100]/20 rounded-3xl transition-colors
          duration-500 pointer-events-none"
          />

          {/* ------------------------------------------- */}
          {/* LÓGICA DE RENDERIZADO SEGÚN EL ESTADO */}
          {/* ------------------------------------------- */}

          {/* ESTADO 1: CARGANDO */}
          {status === "loading" && (
            <div className="flex flex-col items-center py-10">
              <Loader2 className="w-16 h-16 text-[#E69100] animate-spin mb-6" />
              <h1 className="text-2xl font-bold text-white mb-2">
                Confirmando cuenta...
              </h1>
              <p className="text-gray-400">Por favor espera un momento.</p>
            </div>
          )}

          {/* ESTADO 2: ÉXITO (Tu diseño original) */}
          {status === "success" && (
            <>
              <div className="relative inline-flex items-center justify-center mb-8">
                <div className="absolute inset-0 bg-[#E69100] rounded-full opacity-20 animate-ping" />
                <div
                  className="relative w-24 h-24 bg-[#E69100]/10 rounded-full flex items-center justify-center border
                border-[#E69100]/50 shadow-[0_0_30px_rgba(230,145,0,0.3)]"
                >
                  <Check
                    className="w-10 h-10 text-[#E69100] drop-shadow-lg"
                    strokeWidth={3}
                  />
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
                ¡Cuenta Confirmada!
              </h1>

              <div className="space-y-4 mb-10">
                <p className="text-gray-300 text-lg leading-relaxed">
                  {msg} {/* Mensaje que viene del backend */}
                </p>
                <p className="text-gray-500 text-sm">
                  Ya eres parte oficial de{" "}
                  <span className="text-[#E69100] font-semibold">
                    Barber Academy
                  </span>
                  .
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <Link
                  to="/login"
                  className="group w-full py-4 bg-[#E69100] hover:bg-white text-black font-bold rounded-xl shadow-lg
                  shadow-[#E69100]/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center
                   justify-center gap-2"
                >
                  <span>Iniciar Sesión Ahora</span>
                  <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </>
          )}

          {/* ESTADO 3: ERROR (Token inválido o expirado) */}
          {status === "error" && (
            <>
              <div className="relative inline-flex items-center justify-center mb-8">
                <div
                  className="relative w-24 h-24 bg-red-500/10 rounded-full flex items-center justify-center border
                border-red-500/50 shadow-[0_0_30px_rgba(220,38,38,0.3)]"
                >
                  <XCircle
                    className="w-10 h-10 text-red-500 drop-shadow-lg"
                    strokeWidth={3}
                  />
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
                Error de Confirmación
              </h1>

              <div className="space-y-4 mb-10">
                <p className="text-gray-300 text-lg leading-relaxed">
                  {msg} {/* "Token inválido..." */}
                </p>
                <p className="text-gray-500 text-sm">
                  Es posible que el enlace haya expirado o la cuenta ya esté
                  activa.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <Link
                  to="/"
                  className="group w-full py-4 bg-transparent border border-white/10 hover:border-white/30 text-gray-400
                   hover:text-white font-medium rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Home className="w-4 h-4" />
                  <span>Volver a la Página Principal</span>
                </Link>
              </div>
            </>
          )}
        </div>

        <p className="text-center text-gray-600 text-xs mt-8 animate-pulse">
          ¿Problemas?{" "}
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

export default ConfirmAccount;
