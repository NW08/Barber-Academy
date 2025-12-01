import{application, Router} from 'express';
import { comprobarTokenPasword, confirmarMail, crearNuevoPassword, recuperarPassword, registro, login, perfil, actualizarPassword, actualizarPerfil } from '../controllers/user_controller.js';
import { verificarTokenJWT } from '../middlewares/JWT.js';

const router = Router()


router.post('/registro',registro)
router.get('/confirmar/:token',confirmarMail)
router.post('/recuperarpassword',recuperarPassword)
router.get('/recuperarpassword/:token',comprobarTokenPasword)
router.post('/nuevopassword/:token',crearNuevoPassword)

//Ruta privadas
router.post('/administrador/login',login)
router.get('/administrador/perfil',verificarTokenJWT,perfil)
router.put('/actualizarpassword/:id',verificarTokenJWT,actualizarPassword)
router.put('/administrador/perfil/:id', verificarTokenJWT, actualizarPerfil)



export default router