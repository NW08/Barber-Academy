import { Router } from "express";
import {
  actualizarPassword,
  actualizarPerfil,
  comprobarTokenPassword,
  confirmarMail,
  crearNuevoPassword,
  login,
  perfil,
  recuperarPassword,
  registro,
} from "../controllers/user_controller.js";
import { verificarTokenJWT } from "../middlewares/JWT.js";

const router = Router();

router.post("/registro", registro);
router.get("/confirmar/:token", confirmarMail);
router.post("/recuperar", recuperarPassword);
router.get("/recuperar/:token", comprobarTokenPassword);
router.post("/credencial/:token", crearNuevoPassword);

//Ruta privadas
router.post("/administrador/login", login);
router.get("/administrador/perfil", verificarTokenJWT, perfil);
router.put("/actualizar/:id", verificarTokenJWT, actualizarPassword);
router.put("/administrador/perfil/:id", verificarTokenJWT, actualizarPerfil);

export default router;
