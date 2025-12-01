import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import api from "../API/axiosConfig";
import { useAuth, type User } from "../context/AuthContext";
import type { UserProfile } from "../types";

// Aceptamos el token como segundo argumento para autenticar la petición
export const useProfileForm = (user: User | null, token: string | null) => {
  const { updateUser } = useAuth(); // Función para actualizar estado global sin recargar
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isSaving, setIsSaving] = useState(false);

  // Helper para combinar Nombre + Apellido en un solo string para la UI
  const getFullName = (u: User | null) => {
    if (!u) return "";
    return `${u.nombre || ""} ${u.apellido || ""}`.trim();
  };

  // Estado local del formulario
  const [profile, setProfile] = useState<UserProfile>({
    name: getFullName(user),
    email: user?.email || "",
    city: user?.ciudad || "",
    avatarUrl: user?.avatar || "",
    bio: "", // Asumimos que bio no viene en el AuthContext por ahora
    uid: user?._id,
  });

  // Sincronizar estado si el usuario cambia (ej. al recargar)
  useEffect(() => {
    if (user) {
      setProfile((prev) => ({
        ...prev,
        name: getFullName(user),
        email: user.email || prev.email,
        city: user.ciudad || prev.city,
        uid: user._id,
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
      setProfile((prev) => ({ ...prev, avatarUrl: previewUrl }));
      toast.info("Imagen cargada. Guarda para aplicar cambios.", {
        theme: "dark",
      });
    }
  };

  const handleSaveProfile = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validaciones básicas de UI
    if (!profile.name.trim() || !profile.email.trim() || !profile.city.trim()) {
      toast.error("Nombre, email y ciudad son obligatorios.", {
        theme: "dark",
      });
      return;
    }

    if (!token) {
      toast.error(
        "No se encontró sesión activa. Por favor inicia sesión nuevamente.",
        { theme: "dark" },
      );
      return;
    }

    setIsSaving(true);

    try {
      // 1. Separar el input "Nombre Completo" en "Nombre" y "Apellido" para el Backend
      const nameParts = profile.name.trim().split(" ");
      const nombre = nameParts[0];
      // Si no hay apellido, usamos un punto para pasar la validación del backend si es estricta
      const apellido = nameParts.slice(1).join(" ") || ".";

      // 2. Preparar los datos para la API
      const payload = {
        nombre,
        apellido,
        email: profile.email,
        ciudad: profile.city,
      };

      // 3. Configuración del Header con el Token
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      // 4. Llamada al Backend
      const { data } = await api.put(
        `/administrador/perfil/${profile.uid}`,
        payload,
        config,
      );

      // 5. Actualizar el Contexto Global (AuthContext)
      // Esto actualiza el Sidebar y el Header instantáneamente
      updateUser({
        nombre: data.nombre,
        apellido: data.apellido,
        email: data.email,
        ciudad: data.ciudad,
      });

      toast.success("Perfil actualizado correctamente.", { theme: "dark" });
    } catch (error: any) {
      console.error(error);
      const errorMsg =
        error.response?.data?.msg || "Error al actualizar perfil";
      toast.error(errorMsg, { theme: "dark" });
    } finally {
      setIsSaving(false);
    }
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
