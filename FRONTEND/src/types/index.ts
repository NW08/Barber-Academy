// Definición centralizada del perfil de usuario
// Úsala en todos los componentes para evitar conflictos de tipos
export interface UserProfile {
  uid?: string;
  name: string;
  email: string;
  city: string;
  bio: string;
  avatarUrl: string; // Estandarizado como 'avatarUrl' para el frontend
}
