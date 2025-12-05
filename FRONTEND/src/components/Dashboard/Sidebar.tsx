import React from "react";
import { Camera, ChevronLeft, LogOut, Shield, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface UserProfile {
  name: string;
  city: string;
  avatarUrl: string;
}

interface SidebarProps {
  profile: UserProfile;
  activeTab: "profile" | "security";
  setActiveTab: (tab: "profile" | "security") => void;
  onAvatarClick: () => void;
  onLogout: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  profile,
  activeTab,
  setActiveTab,
  onAvatarClick,
  onLogout,
}) => {
  const navigate = useNavigate();

  return (
    <aside
      className="w-full lg:w-80 bg-black/40 border-b lg:border-b-0 lg:border-r border-white/5 p-6 flex flex-col
    justify-between"
    >
      {/* Header Sidebar */}
      <div>
        <div
          className="flex items-center gap-3 mb-10 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <div className="p-2 rounded-lg bg-[#E69100]/10 border border-[#E69100]/20">
            <ChevronLeft className="w-5 h-5 text-[#E69100]" />
          </div>
          <span className="font-bold text-sm tracking-widest uppercase text-gray-400 hover:text-white transition-colors">
            Volver al inicio
          </span>
        </div>

        {/* Tarjeta de Usuario Mini */}
        <div className="text-center mb-10">
          <div
            className="relative w-24 h-24 mx-auto mb-4 group cursor-pointer"
            onClick={onAvatarClick}
          >
            <div className="w-full h-full rounded-full overflow-hidden border-2 border-[#E69100] p-1">
              <img
                src={profile.avatarUrl}
                alt="Avatar"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div
              className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100
             transition-opacity"
            >
              <Camera className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-xl font-bold text-white">{profile.name}</h2>
          <p className="text-sm text-gray-500 mt-1">{profile.city}</p>
        </div>

        {/* Menú de Navegación */}
        <nav className="space-y-2">
          <button
            onClick={() => setActiveTab("profile")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
              activeTab === "profile"
                ? "bg-[#E69100] text-black font-bold shadow-lg shadow-[#E69100]/20"
                : "text-gray-400 hover:bg-white/5 hover:text-white"
            }`}
          >
            <User className="w-5 h-5" />
            Editar Perfil
          </button>

          <button
            onClick={() => setActiveTab("security")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
              activeTab === "security"
                ? "bg-[#E69100] text-black font-bold shadow-lg shadow-[#E69100]/20"
                : "text-gray-400 hover:bg-white/5 hover:text-white"
            }`}
          >
            <Shield className="w-5 h-5" />
            Seguridad
          </button>
        </nav>
      </div>

      {/* Footer Sidebar */}
      <div className="pt-6 border-t border-white/5">
        <button
          onClick={onLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:bg-red-500/10 hover:text-red-300
           transition-colors"
        >
          <LogOut className="w-5 h-5" />
          Cerrar Sesión
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
