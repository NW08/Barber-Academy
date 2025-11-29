import React, { useEffect, useState } from "react";
import { ScrollParallax } from "react-just-parallax";
import WhatsAppIcon from "../components/Community/WhatsApp.tsx";
import InstagramIcon from "../components/Community/Instagram.tsx";
import DiscordIcon from "../components/Community/Discord.tsx";
import background from "../assets/pages/Community/community.jpeg";
import AuthGuard from "../components/Guest/Guest.tsx";

const Community: React.FC = () => {
  const isAuthenticated = false;

  // Estado para los números aleatorios
  const [stats, setStats] = useState({
    members: 0,
    students: 0,
    weekly: 0,
  });

  // Generar números aleatorios al montar el componente (Efecto Contador)
  useEffect(() => {
    // Simulamos la carga o generación de datos
    setStats({
      members: Math.floor(Math.random() * (120 - 40 + 1)) + 40, // Entre 40 y 120
      students: Math.floor(Math.random() * (80 - 20 + 1)) + 20, // Entre 20 y 80
      weekly: Math.floor(Math.random() * (15 - 5 + 1)) + 5, // Entre 5 y 15
    });
  }, []);

  return (
    <section className="relative min-h-200 w-full overflow-hidden bg-black py-20 lg:py-32 flex flex-col items-center justify-center">
      {/* --- BACKGROUND CON EFECTO PARALLAX SIMPLE --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Imagen de fondo oscura y con textura */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20 transform scale-110"
          style={{
            background: `url(${background}) center/cover no-repeat`,
          }}
        />

        {/* Gradientes para suavizar los bordes */}
        <div className="absolute inset-0 bg-linear-to-b from-black via-transparent to-black" />
        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-transparent to-black/80" />
      </div>

      <div className="container relative z-10 px-4 mx-auto text-center">
        {/* --- HEADER --- */}
        <div className="mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
            Comunidad <span className="text-[#E69100]">Exclusiva</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            No estás solo en este camino. Conéctate con otros barberos, comparte
            tu progreso y accede a eventos exclusivos.
          </p>
        </div>

        {/* --- GRID DE REDES SOCIALES (Con ScrollParallax) --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 relative">
          {/* Tarjeta 1: WhatsApp - Movimiento Lento */}
          <ScrollParallax strength={0.05}>
            <div
              className="group relative p-1 rounded-2xl bg-linear-to-br from-white/10 to-transparent hover:from-[#00b336]/40
            hover:to-[#008528]/5 transition-all duration-500"
            >
              <div
                className="bg-black/80 backdrop-blur-xl rounded-xl p-8 h-full border border-white/5 flex flex-col items-center
              justify-between transition-transform duration-300 group-hover:-translate-y-0.5"
              >
                <div className="p-4 rounded-full bg-[#25D366]/20 text-[#25D366] mb-6 shadow-[0_0_20px_rgba(37,211,102,0.3)]">
                  <WhatsAppIcon />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Canal de Difusión
                </h3>
                <p className="text-gray-400 text-sm mb-6">
                  Noticias, tips diarios y anuncios importantes directo a tu
                  móvil.
                </p>
                <a
                  href="https://web.whatsapp.com/"
                  className="w-full py-3 rounded-lg border border-[#25D366] text-[#25D366] font-bold hover:bg-[#25D366]
                  hover:text-white transition-all duration-300"
                >
                  Unirme Ahora
                </a>
              </div>
            </div>
          </ScrollParallax>

          {/* Tarjeta 2: Instagram - Movimiento Medio (Destacada) */}
          <ScrollParallax strength={0.07}>
            <div
              className="group relative p-1 rounded-2xl bg-linear-to-br from-white/10 to-transparent hover:from-[#E1306C]/40
            hover:to-[#E1306C]/5 transition-all duration-500 md:-mt-8"
            >
              <div
                className="bg-black/80 backdrop-blur-xl rounded-xl p-8 h-full border border-white/5 flex flex-col items-center
               justify-between transition-transform duration-300 group-hover:-translate-y-0.5"
              >
                <div
                  className="p-4 rounded-full bg-linear-to-tr from-[#FFDC80] via-[#E1306C] to-[#833AB4] text-white mb-6
                shadow-[0_0_20px_rgba(225,48,108,0.4)]"
                >
                  <InstagramIcon />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Síguenos en Insta
                </h3>
                <p className="text-gray-400 text-sm mb-6">
                  Inspiración visual, cortes de tendencia y detrás de cámaras.
                </p>
                <a
                  href="https://www.instagram.com/"
                  className="w-full py-3 rounded-lg border border-[#E1306C] text-[#E1306C] font-bold hover:bg-[#E1306C]
                  hover:text-white transition-all duration-300"
                >
                  Ver Perfil
                </a>
              </div>
            </div>
          </ScrollParallax>

          {/* Tarjeta 3: Discord - Movimiento Lento */}
          <ScrollParallax strength={0.05}>
            <div
              className="group relative p-1 rounded-2xl bg-linear-to-br from-white/10 to-transparent hover:from-[#5865F2]/40
            hover:to-[#5865F2]/5 transition-all duration-500"
            >
              <div
                className="bg-black/80 backdrop-blur-xl rounded-xl p-8 h-full border border-white/5 flex flex-col items-center
              justify-between transition-transform duration-300 group-hover:-translate-y-0.5"
              >
                <div className="p-4 rounded-full bg-[#5865F2]/20 text-[#5865F2] mb-6 shadow-[0_0_20px_rgba(88,101,242,0.3)]">
                  <DiscordIcon />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Servidor de Discord
                </h3>
                <p className="text-gray-400 text-sm mb-6">
                  Chat en vivo, feedback de tus cortes y networking real.
                </p>
                <a
                  href="https://discord.com/"
                  className="w-full py-3 rounded-lg border border-[#5865F2] text-[#5865F2] font-bold hover:bg-[#5865F2]
                  hover:text-white transition-all duration-300"
                >
                  Entrar al Server
                </a>
              </div>
            </div>
          </ScrollParallax>
        </div>

        {/* --- ESTADÍSTICAS --- */}
        <div className="w-full max-w-4xl mx-auto">
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10
          bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/5"
          >
            <div className="flex flex-col items-center p-4">
              <span className="text-5xl font-extrabold text-[#E69100] mb-2 tabular-nums tracking-tighter">
                {stats.members}
              </span>
              <p className="text-gray-300 text-sm uppercase tracking-wider font-semibold">
                Miembros activos
              </p>
            </div>

            <div className="flex flex-col items-center p-4">
              <span className="text-5xl font-extrabold text-white mb-2 tabular-nums tracking-tighter">
                + {stats.students}
              </span>
              <p className="text-gray-300 text-sm uppercase tracking-wider font-semibold">
                Cursos Completados
              </p>
            </div>

            <div className="flex flex-col items-center p-4">
              <span className="text-5xl font-extrabold text-[#E69100] mb-2 tabular-nums tracking-tighter">
                {stats.weekly}
              </span>
              <p className="text-gray-300 text-sm uppercase tracking-wider font-semibold">
                Nuevos esta semana
              </p>
            </div>
          </div>
        </div>
      </div>
      {!isAuthenticated && <AuthGuard />}
    </section>
  );
};

export default Community;
