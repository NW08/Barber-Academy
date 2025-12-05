import React, { useState } from "react";
import { toast } from "react-toastify";
import api from "../API/axiosConfig";
import { type User } from "../context/AuthContext";

export const useSecurityForm = (user: User | null, token: string | null) => {
  const [isSaving, setIsSaving] = useState(false);

  const [passwords, setPasswords] = useState({
    current: "",
    new: "",
    confirm: "",
  });

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswords((prev) => ({ ...prev, [name]: value }));
  };

  const handleSavePassword = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validaciones UI
    if (!passwords.current || !passwords.new || !passwords.confirm) {
      toast.warn("Completa todos los campos.", { theme: "dark" });
      return;
    }
    if (passwords.new !== passwords.confirm) {
      toast.error("Las nuevas contraseñas no coinciden.", { theme: "dark" });
      return;
    }
    if (passwords.new.length < 8) {
      toast.error("Mínimo 8 caracteres requeridos.", { theme: "dark" });
      return;
    }

    // DEBUG: Verificar si tenemos ID y Token antes de enviar
    if (!user?._id) {
      console.error("Error CRÍTICO: No hay ID de usuario", user);
      toast.error(
        "Error: No se encuentra el ID del usuario. Recarga la página.",
        { theme: "dark" },
      );
      return;
    }
    if (!token) {
      console.error("Error CRÍTICO: No hay Token");
      toast.error("Error: Sesión no válida. Loguéate de nuevo.", {
        theme: "dark",
      });
      return;
    }

    setIsSaving(true);

    try {
      const payload = {
        passwordActual: passwords.current,
        passwordNuevo: passwords.new,
      };

      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      // CORRECCIÓN: La ruta en tu backend es "/actualizar/:_id", no "/administrador/actualizar/..."
      // Eliminamos el prefijo '/administrador' para evitar el 404
      const url = `/actualizar/${user._id}`;

      console.log("Enviando a:", url);

      await api.put(url, payload, config);

      toast.success("Contraseña actualizada con éxito.", { theme: "dark" });
      setPasswords({ current: "", new: "", confirm: "" });
    } catch (error: any) {
      console.error("❌ Error completo:", error);

      let errorMsg: string;

      if (error.response) {
        // El servidor respondió con un error (4xx, 5xx)
        console.log("Status:", error.response.status);
        console.log("Data:", error.response.data);

        // Prioridad de mensajes de error
        errorMsg =
          error.response.data?.msg ||
          error.response.data?.message ||
          `Error del servidor (${error.response.status})`;

        if (error.response.status === 404) {
          errorMsg =
            "Error 404: La ruta no coincide. Verifica tu backend (index.js/routes).";
        }
      } else if (error.request) {
        errorMsg = "El servidor no responde. Verifica tu conexión.";
      } else {
        errorMsg = error.message;
      }

      toast.error(errorMsg, { theme: "dark" });
    } finally {
      setIsSaving(false);
    }
  };

  return {
    passwords,
    isSaving,
    handlePasswordChange,
    handleSavePassword,
  };
};
