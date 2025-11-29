import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

// Importamos los sub-hooks
import { useProfileForm } from "./useProfileForm";
import { useSecurityForm } from "./useSecurityForm";

export const useDashboard = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  // Gestión de UI (Tabs)
  const [activeTab, setActiveTab] = useState<"profile" | "security">("profile");

  // Integración de lógica modular
  // 1. Lógica de Perfil
  const {
    profile,
    isSaving: isProfileSaving,
    fileInputRef,
    handleProfileChange,
    handleAvatarClick,
    handleFileChange,
    handleSaveProfile,
  } = useProfileForm(user);

  // 2. Lógica de Seguridad
  const {
    passwords,
    isSaving: isSecuritySaving,
    handlePasswordChange,
    handleSavePassword,
  } = useSecurityForm();

  // --- Logout ---
  const handleLogout = () => {
    if (logout) {
      logout();
    }
    navigate("/login");
  };

  // Combinamos <<isSaving>> para la UI si queremos un loading general basado en la tab activa
  const isSaving = activeTab === "profile" ? isProfileSaving : isSecuritySaving;

  return {
    // UI Global
    activeTab,
    setActiveTab,
    isSaving,

    // Perfil
    profile,
    fileInputRef,
    handleProfileChange,
    handleAvatarClick,
    handleFileChange,
    handleSaveProfile,

    // Seguridad
    passwords,
    handlePasswordChange,
    handleSavePassword,

    // Auth
    handleLogout,
  };
};
