import{application, Router} from 'express';
import { comprobarTokenPasword, confirmarMail, crearNuevoPassword, recuperarPassword, registro, login, perfil } from '../controllers/user_controller.js';
import { verificarTokenJWT } from '../middlewares/JWT.js';

const router = Router()


router.post('/registro',registro)
router.get('/confirmar/:token',confirmarMail)

router.post('/recuperarpassword',recuperarPassword)
router.get('/recuperarpassword/:token',comprobarTokenPasword)
router.post('/nuevopassword/:token',crearNuevoPassword)

router.post('/usuario/login',login)

router.get('/usuario/perfil',verificarTokenJWT,perfil)



export default router