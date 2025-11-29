import React, {
  createContext,
  type ReactNode,
  use,
  useEffect,
  useState,
} from "react";
import { toast } from "react-toastify"; // Opcional, para feedback visual

// 1. Definimos la forma de nuestro Usuario
export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: "admin" | "student" | "client"; // Para futuro control de roles
}

// 2. Definimos qué datos y funciones compartirá el contexto
interface AuthContextType {
  user: User | null;
  isLoggedIn: boolean;
  isLoading: boolean; // Útil para no mostrar la UI hasta saber si hay sesión
  login: (email: string, password: string) => void;
  logout: () => void;
}

// 3. Creamos el contexto
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// --- DATOS QUEMADOS (MOCK) ---
const MOCK_USER: User = {
  id: "u-123456",
  name: "Alejandro",
  email: "cliente@barberia.com",
  avatar:
    "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=200&auto=format&fit=crop",
  role: "client",
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // 4. Efecto para verificar sesión al cargar la página (Persistencia)
  useEffect(() => {
    const checkSession = () => {
      // Simulamos buscar un token en localStorage
      const storedToken = localStorage.getItem("barber_auth_token");

      if (storedToken) {
        // Si hay token, "restauramos" al usuario mocker
        setUser(MOCK_USER);
      }
      setIsLoading(false);
    };

    checkSession();
  }, []);

  // 5. Función de Login Simulada
  const login = (email: string, password: string) => {
    setIsLoading(true);

    // Simulación de llamada a API
    setTimeout(() => {
      // Aquí validarías email/pass reales
      console.log(`Logueando con: ${email} - ${password}`); // Solo para debug

      // Guardamos “token” y seteamos usuario
      localStorage.setItem("barber_auth_token", "mock_jwt_token_123");
      setUser(MOCK_USER);

      toast.success(`¡Bienvenido de nuevo, ${MOCK_USER.name}!`, {
        theme: "dark",
        position: "top-center",
      });

      setIsLoading(false);
    }, 1000);
  };

  // 6. Función de Logout
  const logout = () => {
    localStorage.removeItem("barber_auth_token");
    setUser(null);
    toast.info("Has cerrado sesión correctamente", {
      theme: "dark",
      position: "bottom-right",
    });
  };

  return (
    <AuthContext
      value={{
        user,
        isLoggedIn: !!user, // true si user existe, false si es null
        isLoading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext>
  );
};

// 7. Hook personalizado para usar el contexto fácilmente
export const useAuth = () => {
  const context = use(AuthContext);
  if (!context) {
    throw new Error("useAuth debe usarse dentro de un AuthProvider");
  }
  return context;
};
