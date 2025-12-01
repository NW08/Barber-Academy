import React, { createContext, type ReactNode, use, useState } from "react";
import { toast } from "react-toastify";
import api from "../API/axiosConfig";

export interface User {
  _id: string;
  nombre: string;
  apellido: string;
  email: string;
  rol: string;
  ciudad: string; // Agregamos ciudad opcional
  avatar?: string;
}

interface AuthContextType {
  auth: User | null;
  token: string | null;
  isLoading: boolean;
  isLoggedIn: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  // NUEVA FUNCIÓN: Para actualizar el estado local sin recargar
  updateUser: (userData: Partial<User>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [auth, setAuth] = useState<User | null>(() => {
    const savedUser = localStorage.getItem("user");
    try {
      return savedUser ? JSON.parse(savedUser) : null;
    } catch (error) {
      return null;
    }
  });

  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token"),
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const { data } = await api.post("/administrador/login", {
        email,
        password,
      });

      localStorage.setItem("token", data.token);
      setToken(data.token);

      const userData = {
        _id: data._id,
        nombre: data.nombre,
        apellido: data.apellido,
        email: data.email,
        rol: data.rol,
        ciudad: data.ciudad,
      };

      localStorage.setItem("user", JSON.stringify(userData));
      setAuth(userData);

      toast.success(`Bienvenido, ${data.nombre}`, {
        position: "top-center",
        theme: "dark",
        progressClassName: "bg-[#E69100]",
      });
    } catch (error: any) {
      console.error(error);
      const errorMsg = error.response?.data?.msg || "Error al iniciar sesión";
      toast.error(errorMsg, { position: "top-right", theme: "dark" });
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setToken(null);
    setAuth(null);
    toast.info("Sesión cerrada", { theme: "dark" });
  };

  // NUEVA FUNCIÓN: Actualiza el estado global y el localStorage
  const updateUser = (userData: Partial<User>) => {
    setAuth((prev) => {
      if (!prev) {
        return null;
      }
      const updated = { ...prev, ...userData };
      localStorage.setItem("user", JSON.stringify(updated));
      return updated;
    });
  };

  const isLoggedIn = !!token && !!auth;

  return (
    <AuthContext
      value={{ auth, token, isLoading, isLoggedIn, login, logout, updateUser }}
    >
      {children}
    </AuthContext>
  );
};

export const useAuth = () => {
  const context = use(AuthContext);
  if (!context) {
    throw new Error("useAuth debe usarse dentro de un AuthProvider");
  }
  return context;
};
