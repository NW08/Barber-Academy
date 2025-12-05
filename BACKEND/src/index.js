import connection from "./database.js";
import app from "./server.js";

const iniciarServidor = async () => {
  try {
    // 1. Conectamos a la Base de Datos PRIMERO
    await connection();

    // 2. Si la BD conecta, entonces levantamos el servidor
    const port = app.get("port");
    app.listen(port, () => {
      console.log(`Server On: http://localhost:${port}`);
    });
  } catch (error) {
    // 3. Si algo falla (BD o Servidor), matamos el proceso o logueamos
    console.error("Error al iniciar la aplicación:", error);
    // Opcional: process.exit(1); para detener la app si la BD es crítica
  }
};

// Ejecutamos la función
iniciarServidor().catch((error) => {
  console.error("Error Fatal:", error);
});
