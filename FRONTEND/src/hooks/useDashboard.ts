import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Importamos los sub-hooks modulares
import { useProfileForm } from "./useProfileForm";
import { useSecurityForm } from "./useSecurityForm";
import { useAuth } from "../context/AuthContext";

export const useDashboard = () => {
  const navigate = useNavigate();
  // Extraemos la información del usuario Y el token del contexto
  const { auth, token, logout } = useAuth();

  // Gestión de UI (Pestaña activa: Perfil o Seguridad)
  const [activeTab, setActiveTab] = useState<"profile" | "security">("profile");

  // --- 1. Lógica de Perfil ---
  // Pasamos 'auth' y 'token' a useProfileForm para asegurar que la petición tenga credenciales
  const {
    profile,
    isSaving: isProfileSaving,
    fileInputRef,
    handleProfileChange,
    handleAvatarClick,
    handleFileChange,
    handleSaveProfile,
  } = useProfileForm(auth, token);

  // --- 2. Lógica de Seguridad ---
  // Hook independiente para cambio de contraseña
  const {
    passwords,
    isSaving: isSecuritySaving,
    handlePasswordChange,
    handleSavePassword,
  } = useSecurityForm();

  // --- 3. Logout ---
  const handleLogout = () => {
    if (logout) {
      logout();
    }
    navigate("/login");
  };

  // Combinamos el estado de carga para la UI global
  // Si estamos en la tab de perfil, usamos el loading de perfil, etc.
  const isSaving = activeTab === "profile" ? isProfileSaving : isSecuritySaving;

  // Retornamos
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
