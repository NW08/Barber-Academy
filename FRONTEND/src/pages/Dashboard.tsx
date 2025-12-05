import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Hook de Lógica (El que acabamos de crear)
import { useDashboard } from "../hooks/useDashboard.ts";

// Componentes Modulares Visuales
import Sidebar from "../components/Dashboard/Sidebar.tsx";
import ProfileForm from "../components/Dashboard/ProfileForm.tsx";
import SecurityForm from "../components/Dashboard/SecurityForm.tsx";
import { useAuth } from "../context/AuthContext.tsx";
import AuthGuard from "../components/Guest/Guest.tsx";

const Dashboard: React.FC = () => {
  // Extraemos toda la lógica y estado desde nuestro Custom Hook
  const {
    activeTab,
    setActiveTab,
    isSaving,
    profile,
    passwords,
    fileInputRef,
    handleProfileChange,
    handlePasswordChange,
    handleAvatarClick,
    handleFileChange,
    handleSaveProfile,
    handleSavePassword,
    handleLogout,
  } = useDashboard();

  const { isLoggedIn } = useAuth();

  return (
    <div
      className="min-h-screen w-full bg-black text-white font-sans flex items-center justify-center p-4 lg:p-8 overflow-hidden
    relative"
    >
      {/* --- FONDO AMBIENTADO --- */}

      {/* --- CONTENEDOR PRINCIPAL (GLASSMORPHISM) --- */}
      <div
        className="relative z-10 w-full max-w-6xl bg-[#0E0C15]/80 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl
       flex flex-col lg:flex-row overflow-hidden h-[90vh] lg:h-[800px] animate-in fade-in zoom-in-95 duration-500"
      >
        {/* === SIDEBAR (Navegación y Avatar) === */}
        <Sidebar
          profile={profile}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          onAvatarClick={handleAvatarClick}
          onLogout={handleLogout}
        />

        {/* === ÁREA DE CONTENIDO PRINCIPAL === */}
        <main className="flex-1 p-6 lg:p-12 overflow-y-auto scrollbar-thin scrollbar-thumb-[#E69100]/20 scrollbar-track-transparent">
          <div className="max-w-3xl mx-auto">
            {/* Header del Contenido */}
            <header className="mb-10">
              <h1 className="text-3xl lg:text-4xl font-bold text-white mb-2">
                {activeTab === "profile"
                  ? "Configuración de Perfil"
                  : "Seguridad de la Cuenta"}
              </h1>
              <p className="text-gray-400">
                {activeTab === "profile"
                  ? "Actualiza tu información personal y cómo te ven los demás."
                  : "Gestiona tu contraseña y protege tu cuenta."}
              </p>
            </header>

            {/* Renderizado Condicional de Formularios */}
            {activeTab === "profile" && (
              <ProfileForm
                profile={profile}
                isSaving={isSaving}
                onChange={handleProfileChange}
                onSave={handleSaveProfile}
                // Hacemos el cast aquí para satisfacer a TypeScript
                fileInputRef={fileInputRef as React.RefObject<HTMLInputElement>}
                onFileChange={handleFileChange}
              />
            )}

            {activeTab === "security" && (
              <SecurityForm
                passwords={passwords}
                isSaving={isSaving}
                onChange={handlePasswordChange}
                onSave={handleSavePassword}
              />
            )}
          </div>
        </main>
      </div>

      <ToastContainer />
      {!isLoggedIn && <AuthGuard />}
    </div>
  );
};

export default Dashboard;
