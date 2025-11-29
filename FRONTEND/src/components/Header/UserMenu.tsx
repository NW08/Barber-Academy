import { useEffect, useRef, useState } from "react";
import { ChevronDown, LogOut, User } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";

const UserMenu = () => {
  const { user, logout } = useAuth();
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

  if (!user) {
    return null;
  }

  return (
    <div className="relative" ref={menuRef}>
      {/* Botón del Perfil */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 py-1 px-2 rounded-full hover:bg-white/5 transition-all border border-transparent
        hover:border-white/10 group"
      >
        {/* Texto de Bienvenida (Solo Desktop XL) */}
        <div className="text-right hidden xl:block">
          <p className="text-xs text-gray-400 font-medium">Bienvenido</p>
          <p className="text-sm text-white font-bold group-hover:text-[#E69100] transition-colors">
            Hola, {user.name}
          </p>
        </div>

        {/* Avatar */}
        <div className="relative">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#E69100] p-0.5">
            <img
              src={user.avatar}
              alt="User Profile"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          {/* Indicador Online */}
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#0E0C15]"></div>
        </div>

        {/* Icono Chevron */}
        <ChevronDown
          className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* --- MENÚ DESPLEGABLE (DROPDOWN) --- */}
      {isOpen && (
        <div
          className="absolute right-0 top-full mt-3 w-60 bg-[#16141F] border border-white/10 rounded-xl shadow-2xl
         shadow-black/50 overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        >
          {/* Header del Dropdown */}
          <div className="p-4 border-b border-white/5 bg-white/5">
            <p className="text-white font-bold">{user.name}</p>
            <p className="text-xs text-gray-400 truncate">{user.email}</p>
          </div>

          {/* Opciones */}
          <div className="py-2">
            <Link to="/dashboard">
              <button
                className="w-full px-4 py-3 text-left text-sm text-gray-300 hover:bg-white/5 hover:text-[#E69100]
      flex items-center gap-3 transition-colors"
              >
                <User className="w-4 h-4" />
                Mi Perfil
              </button>
            </Link>
          </div>
          {/* Logout */}
          <div className="border-t border-white/5 p-2">
            <button
              onClick={handleLogout}
              className="w-full px-4 py-2 text-left text-sm text-red-400 hover:bg-red-500/10 rounded-lg flex items-center
              gap-3 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Cerrar Sesión
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
