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
router.get("/recuperar/:resetPasswordToken", comprobarTokenPassword);
router.post("/credencial/:resetPasswordToken", crearNuevoPassword);

//Ruta privadas
router.post("/administrador/login", login);
router.get("/administrador/perfil", verificarTokenJWT, perfil);
router.put("/actualizar/:_id", verificarTokenJWT, actualizarPassword);
router.put("/administrador/perfil/:_id", verificarTokenJWT, actualizarPerfil);

export default router;
