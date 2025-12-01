// Requerir módulos
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import routerUser from "./routes/user_route.js";
// Inicializaciones
const app = express();
dotenv.config();

// Configuraciones

// Middlewares
app.use(express.json());
app.use(
  cors({
    origin: ["https://barber-academy-aw.vercel.app", "http://localhost:5173"], // Tu URL de Vercel
    methods: ["GET", "POST", "PUT"],
    credentials: true,
  }),
);

// Variables globales
app.set("port", process.env.PORT || 3000);

// Rutas
app.get("/", (req, res) => res.send("Server On"));

// Ruta para administradores
app.use("/api", routerUser);

// Manejo de una ruta que no sea encontrada
app.use((req, res) => res.status(404).send("Endpoint no encontrado - 404"));
// Exportar la instancia de express por medio de app
export default app;
