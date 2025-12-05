import { useEffect, useRef, useState } from "react";
import { ChevronDown, LogOut, User } from "lucide-react";
import { useAuth } from "../../context/AuthContext.tsx";
import { Link } from "react-router-dom";

const UserMenu = () => {
  // 1. Extraemos ‘auth’ (el usuario) y ‘logout’ del contexto
  const { auth, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Lógica para cerrar el menú al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    setIsOpen(false);
    logout();
  };

  // Si no hay usuario logueado, no mostramos nada
  if (!auth) {
    return null;
  }

  // Generamos un avatar con las iniciales usando UI Avatars (Fallback elegante)
  // Usamos tu color dorado para el fondo
  const fullName = `${auth.nombre}+${auth.apellido}`;
  const avatarUrl = `https://ui-avatars.com/api/?name=${fullName}&background=E69100&color=fff&size=128`;

  return (
    <div className="relative" ref={menuRef}>
      {/* --- BOTÓN DEL PERFIL --- */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 py-1 px-2 rounded-full hover:bg-white/5 transition-all border border-transparent
        hover:border-white/10 group focus:outline-none"
      >
        {/* Texto de Bienvenida (Visible en Desktop XL) */}
        <div className="text-right hidden xl:block">
          <p className="text-xs text-gray-400 font-medium">Bienvenido</p>
          <p className="text-sm text-white font-bold group-hover:text-[#E69100] transition-colors">
            Hola, {auth.nombre}
          </p>
        </div>

        {/* Avatar */}
        <div className="relative">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#E69100] p-0.5 transition-transform group-hover:scale-105">
            <img
              src={avatarUrl}
              alt="Perfil"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          {/* Indicador Online */}
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#0E0C15]"></div>
        </div>

        {/* Icono Chevron */}
        <ChevronDown
          className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${
            isOpen ? "rotate-180 text-[#E69100]" : ""
          }`}
        />
      </button>

      {/* --- MENÚ DESPLEGABLE (DROPDOWN) --- */}
      {isOpen && (
        <div
          className="absolute right-0 top-full mt-3 w-64 bg-[#16141F] border border-white/10 rounded-xl shadow-2xl
         shadow-black/50 overflow-hidden animate-in fade-in zoom-in-95 duration-200 z-50 origin-top-right"
        >
          {/* Header del Dropdown */}
          <div className="p-4 border-b border-white/5 bg-white/5">
            <p className="text-white font-bold text-base truncate">
              {auth.nombre} {auth.apellido}
            </p>
            <p className="text-xs text-gray-400 truncate mt-0.5">
              {auth.email}
            </p>
            <span className="inline-block mt-2 text-[10px] font-bold px-2 py-0.5 rounded bg-[#E69100]/20 text-[#E69100] uppercase tracking-wider">
              {auth.rol}
            </span>
          </div>

          {/* Opciones de Navegación */}
          <div className="py-2">
            <Link to="/dashboard" onClick={() => setIsOpen(false)}>
              <div
                className="w-full px-4 py-3 text-left text-sm text-gray-300 hover:bg-white/5 hover:text-[#E69100]
                flex items-center gap-3 transition-colors cursor-pointer border-l-2 border-transparent hover:border-[#E69100]"
              >
                <User className="w-4 h-4" />
                <span>Mi Perfil</span>
              </div>
            </Link>
          </div>

          {/* Logout */}
          <div className="border-t border-white/5 p-2 bg-black/20">
            <button
              onClick={handleLogout}
              className="w-full px-4 py-2 text-left text-sm text-red-400 hover:bg-red-500/10 hover:text-red-300 rounded-lg flex items-center
              gap-3 transition-colors group"
            >
              <LogOut className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span>Cerrar Sesión</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
