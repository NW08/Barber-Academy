/*
```

### ¿Cómo integrar esto con un Backend Real?

Para pasar de estos datos quemados a una aplicación real, sigue estos pasos:

1.  **Crear un Contexto (AuthContext):**
    En lugar de `const [isLoggedIn, setIsLoggedIn] = useState(true)` dentro del Header, debes crear un archivo
    `src/context/AuthContext.tsx`. Este envolverá toda tu aplicación.

    ```tsx
    // Ejemplo simplificado de cómo se vería la integración
    // const {user, logout, isAuthenticated } = useAuth();
    ```

2.  **Manejo del Token:**
    Cuando el usuario hace login (en tu formulario de Login), el backend te devolverá un **JWT (JSON Web Token)**.
    Debes guardarlo en `localStorage` o `cookies`.
    * Al cargar la página (`useEffect`), el Contexto debe leer este token.

3.  **Variable `isLoggedIn`:**
    En el código que te di, exporté `export let isUserLoggedInGlobal`. En una app real, no exportas una variable `let`,
    sino que **consumes el hook** en las otras páginas:

    ```tsx
En otra página (ej.: Dashboard)
*/

import { useAuth } from "../context/AuthContext.tsx";
import AuthGuard from "../components/Guest/Guest.tsx";

const Dashboard = () => {
  const { isLoggedIn, user } = useAuth();
  if (isLoggedIn) {
    return <div>Hola {user?.name?.trim() || "Usuario"}</div>;
  }
  return (
    <div>
      <AuthGuard />
    </div>
  );
};

export default Dashboard;
