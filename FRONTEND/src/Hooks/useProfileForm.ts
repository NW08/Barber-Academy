import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import type { User } from "../context/AuthContext.tsx";

// Exportamos la interfaz para usarla en otros lados
export interface UserProfile {
  name: string;
  email: string;
  city: string;
  avatar: string;
  bio: string;
}

export const useProfileForm = (user: User | null) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isSaving, setIsSaving] = useState(false);

  // Inicialización del estado
  const [profile, setProfile] = useState<UserProfile>({
    name: user?.name || "Usuario",
    email: user?.email || "usuario@ejemplo.com",
    city: "Ubicación no definida",
    avatar: user?.avatar || "",
    bio: "Sin biografía.",
  });

  // Actualizar el estado si el usuario del contexto cambia (ej.: al cargar)
  useEffect(() => {
    if (user) {
      setProfile((prev) => ({
        ...prev,
        name: user.name,
        email: user.email,
        avatar: user.avatar,
      }));
    }
  }, [user]);

  const handleProfileChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleAvatarClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setProfile((prev) => ({ ...prev, avatar: previewUrl }));
      toast.info("Imagen cargada. No olvides guardar los cambios.", {
        theme: "dark",
      });
    }
  };

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();

    if (!profile.name.trim() || !profile.email.trim() || !profile.city.trim()) {
      toast.error("Todos los campos personales son obligatorios.", {
        theme: "dark",
      });
      return;
    }

    setIsSaving(true);
    // Simulación de API
    setTimeout(() => {
      setIsSaving(false);
      toast.success("Perfil actualizado correctamente.", {
        theme: "dark",
      });
    }, 1500);
  };

  return {
    profile,
    isSaving,
    fileInputRef,
    handleProfileChange,
    handleAvatarClick,
    handleFileChange,
    handleSaveProfile,
  };
};
