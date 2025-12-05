import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Importamos los sub-hooks modulares
import { useProfileForm } from "./useProfileForm";
import { useSecurityForm } from "./useSecurityForm";
import { useAuth } from "../context/AuthContext";

export const useDashboard = () => {
  const navigate = useNavigate();
  // 1. Extraemos 'token' además de 'auth' para pasarlo a los formularios
  const { auth, token, logout } = useAuth();

  // Gestión de UI (Pestaña activa: Perfil o Seguridad)
  const [activeTab, setActiveTab] = useState<"profile" | "security">("profile");

  // --- Lógica de Perfil ---
  // Inyectamos auth y token
  const {
    profile,
    isSaving: isProfileSaving,
    fileInputRef,
    handleProfileChange,
    handleAvatarClick,
    handleFileChange,
    handleSaveProfile,
  } = useProfileForm(auth, token);

  // --- Lógica de Seguridad ---
  // Inyectamos auth y token (CRUCIAL para que useSecurityForm funcione)
  const {
    passwords,
    isSaving: isSecuritySaving,
    handlePasswordChange,
    handleSavePassword,
  } = useSecurityForm(auth, token);

  // --- Logout ---
  const handleLogout = () => {
    if (logout) {
      logout();
    }
    navigate("/login");
  };

  // Combinamos el estado de carga para la UI global (Loading spinner en botones)
  const isSaving = activeTab === "profile" ? isProfileSaving : isSecuritySaving;

  return {
    // Estado de UI
    activeTab,
    setActiveTab,
    isSaving,

    // Datos y Handlers de Perfil
    profile,
    fileInputRef,
    handleProfileChange,
    handleAvatarClick,
    handleFileChange,
    handleSaveProfile,

    // Datos y Handlers de Seguridad
    passwords,
    handlePasswordChange,
    handleSavePassword,

    // Acciones Globales
    handleLogout,
  };
};
