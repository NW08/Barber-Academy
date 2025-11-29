import React from "react";
import {Clock, Instagram, MapPin, Phone, Star} from "lucide-react";

import {galleryImages, mapUrl, services,} from "../components/Barber/BarberConstants.tsx";

// Renombramos los imports de assets para evitar conflictos con componentes de Lucid
// y para usarlos claramente como fuentes de imagen (src).
import FacebookIcon from "../assets/components/Footer/facebook.svg";
import InstagramIcon from "../assets/components/Footer/instagram.svg";
import TwitterIcon from "../assets/components/Footer/x.svg";

import barber from "../assets/pages/Barber/barber.jpg";
import working from "../assets/pages/Barber/working.webp";

const BarberLanding: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#E69100] selection:text-black">
      {/* --- HERO SECTION --- */}
      <section
        id="inicio"
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={barber}
            alt="Barber Shop Interior"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-black/80" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 text-center pt-20">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border
          border-white/20 mb-6 animate-fade-in-up"
          >
            <Star className="w-4 h-4 text-[#E69100] fill-[#E69100]" />
            <span className="text-xs font-bold tracking-widest uppercase">
              PAZ & MIÑO
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-white mb-6 leading-tight">
            ESTILO, CORTE <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#E69100] to-[#ffb347]">
              Y CONFIANZA.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Más que un corte de cabello, ofrecemos una experiencia de cuidado
            personal. Cortes clásicos, barbería tradicional y tratamientos
            modernos para él y para ella.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://web.whatsapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className="w-full sm:w-auto px-8 py-4 border border-white text-white font-bold text-lg rounded-full
                hover:bg-white/10 transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Contáctanos
              </button>
            </a>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce opacity-50">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            ></path>
          </svg>
        </div>
      </section>

      {/* --- SOBRE NOSOTROS --- */}
      <section id="nosotros" className="py-24 bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div
                className="absolute -inset-4 bg-[#E69100]/20 rounded-2xl blur-lg group-hover:bg-[#E69100]/30 transition-all
              opacity-70"
              ></div>
              <img
                src={working}
                alt="Barbero trabajando"
                className="relative rounded-2xl shadow-2xl w-full object-cover h-[500px] grayscale group-hover:grayscale-0 transition-all
                 duration-700"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#E69100] p-6 rounded-xl shadow-xl hidden md:block">
                <p className="text-black font-bold text-3xl">10+</p>
                <p className="text-black text-sm font-medium">
                  Años de
                  <br />
                  Experiencia
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-[#E69100] font-bold uppercase tracking-widest mb-2">
                Quiénes Somos
              </h4>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                El Arte de la Barbería Tradicional
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                En <strong>Barber Shop</strong>, fusionamos la técnica de la
                vieja escuela con las tendencias más actuales. No somos solo un
                lugar para cortar cabello; somos un club social, un espacio de
                relajación y un santuario para el estilo personal.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Nuestro equipo de maestros barberos está dedicado a perfeccionar
                cada detalle, desde el desvanecido más limpio hasta el perfilado
                de barba más preciso.
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 rounded-full bg-[#E69100]"></div>
                  Ambiente relajado y exclusivo con bebidas de cortesía.
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 rounded-full bg-[#E69100]"></div>
                  Productos de grooming de la más alta calidad.
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 rounded-full bg-[#E69100]"></div>
                  Atención personalizada para cada tipo de cabello.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICIOS --- */}
      <section id="servicios" className="py-24 bg-black relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Experiencias diseñadas para elevar tu imagen personal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* ESLint Fix: Usamos service.title como key en lugar de index */}
            {services.map((service) => (
              <div
                key={service.title}
                className="group p-8 rounded-2xl bg-zinc-900 border border-white/5 hover:border-[#E69100]/50 transition-all
                duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#E69100]/10"
              >
                <div className="flex justify-between items-start mb-6">
                  <div
                    className="p-3 rounded-lg bg-[#E69100]/10 text-[#E69100] group-hover:bg-[#E69100] group-hover:text-black
                   transition-colors"
                  >
                    {/* Renderizamos el icono (asumiendo que service.icon es un componente React) */}
                    {service.icon}
                  </div>
                  <span className="text-xl font-bold text-white group-hover:text-[#E69100] transition-colors">
                    {service.price}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- GALERÍA --- */}
      <section id="galeria" className="py-24 bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Portafolio de Estilo
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Resultados reales. Clientes satisfechos. Estilo impecable.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {/* ESLint Fix: Usamos la URL de la imagen (img) como key */}
            {galleryImages.map((img) => (
              <div
                key={img}
                className="relative group overflow-hidden rounded-xl aspect-square cursor-pointer"
              >
                <img
                  src={img}
                  alt="Gallery item"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale
                  group-hover:grayscale-0"
                />
                <div
                  className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex
                items-center justify-center"
                >
                  <Instagram className="w-8 h-8 text-white" />
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-white/20 rounded-full text-white hover:bg-white hover:text-black
              transition-all inline-block"
            >
              Ver más en Instagram
            </a>
          </div>
        </div>
      </section>

      {/* --- UBICACIÓN Y CONTACTO --- */}
      <section
        id="ubicacion"
        className="py-24 bg-black relative overflow-hidden"
      >
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#E69100]/5 blur-3xl rounded-full pointer-events-none"></div>

        <div className="container mx-auto px-6">
          <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 rounded-3xl overflow-hidden bg-zinc-900 border border-white/5
           shadow-2xl"
          >
            {/* Info Panel */}
            <div className="p-10 md:p-14 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                Visítanos Hoy
              </h2>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="mt-1 p-2 rounded-full bg-[#E69100]/20 text-[#E69100]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">
                      Dirección
                    </h4>
                    <p className="text-gray-400">
                      Av. Principal 123, Centro Histórico
                      <br />
                      Ciudad, CP 12345
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 p-2 rounded-full bg-[#E69100]/20 text-[#E69100]">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">
                      Horario de Atención
                    </h4>
                    <p className="text-gray-400">
                      Lun - Vie: 09:00 AM - 08:00 PM
                    </p>
                    <p className="text-gray-400">Sáb: 10:00 AM - 06:00 PM</p>
                    <p className="text-[#E69100] font-medium mt-1">
                      Domingo: Cerrado
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 p-2 rounded-full bg-[#E69100]/20 text-[#E69100]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">
                      Contacto
                    </h4>
                    <p className="text-gray-400">+593 99 123 4567</p>
                    <p className="text-gray-400">citas@barbershop.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex gap-4">
                <a
                  href="#"
                  className="p-3 rounded-full bg-white/5 hover:bg-[#E69100] hover:text-black transition-all text-white flex
                  items-center justify-center"
                >
                  <img
                    src={InstagramIcon}
                    alt="Instagram"
                    className="w-5 h-5 filter invert"
                  />
                </a>
                <a
                  href="#"
                  className="p-3 rounded-full bg-white/5 hover:bg-[#E69100] hover:text-black transition-all text-white flex
                  items-center justify-center"
                >
                  <img
                    src={FacebookIcon}
                    alt="Facebook"
                    className="w-5 h-5 filter invert"
                  />
                </a>
                <a
                  href="#"
                  className="p-3 rounded-full bg-white/5 hover:bg-[#E69100] hover:text-black transition-all text-white flex
                   items-center justify-center"
                >
                  <img
                    src={TwitterIcon}
                    alt="Twitter"
                    className="w-5 h-5 filter invert"
                  />
                </a>
              </div>
            </div>

            {/* Map Frame */}
            <div
              className="h-[400px] lg:h-auto w-full relative grayscale invert hover:grayscale-0 hover:invert-0 transition-all
            duration-500"
            >
              <iframe
                src={mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                title="Mapa de Ubicación"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BarberLanding;
