import React, { useState } from "react";
import { toast } from "react-toastify";

export const useSecurityForm = () => {
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

  const handleSavePassword = (e: React.FormEvent) => {
    e.preventDefault();

    // Validaciones
    if (!passwords.current || !passwords.new || !passwords.confirm) {
      toast.warn("Completa todos los campos de contraseña.", { theme: "dark" });
      return;
    }
    if (passwords.new !== passwords.confirm) {
      toast.error("Las nuevas contraseñas no coinciden.", { theme: "dark" });
      return;
    }
    if (passwords.new.length < 6) {
      toast.error("La contraseña debe tener al menos 6 caracteres.", {
        theme: "dark",
      });
      return;
    }

    setIsSaving(true);
    // Simulación de API
    setTimeout(() => {
      setIsSaving(false);
      setPasswords({ current: "", new: "", confirm: "" });
      toast.success("Contraseña actualizada con éxito.", { theme: "dark" });
    }, 1500);
  };

  return {
    passwords,
    isSaving, // Nota: Este es un estado de carga independiente del perfil
    handlePasswordChange,
    handleSavePassword,
  };
};
