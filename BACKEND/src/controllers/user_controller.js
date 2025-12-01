import {
  sendMailToRecoveryPassword,
  sendMailToRegister,
} from "../helpers/send_mail.js";
import { crearTokenJWT } from "../middlewares/JWT.js";
import User from "../models/User.js";

/**
 * @typedef {import('mongoose').Document & {
 *   encryptPassword: (pwd: string) => Promise<string>,
 *   crearToken: () => string
 * }} UserDocument
 */

const registro = async (req, res) => {
  try {
    // 1. Desestructuración y Validación (Fail Fast)
    // Es más seguro extraer explícitamente lo que esperas recibir
    const { email, password } = req.body;

    // Validación precisa: evita errores si envían campos extra vacíos que no importan
    if (!email || !password) {
      return res.status(400).json({
        msg: "Debes llenar todos los campos obligatorios",
      });
    }

    // 2. Verificación de duplicados
    // Usamos nombres descriptivos como <<usuarioExistente>> en lugar de acciones <<verificar...>>
    const usuarioExistente = await User.findOne({ email });

    if (usuarioExistente) {
      return res.status(400).json({
        msg: "El email ya se encuentra registrado",
      });
    }

    // 3. Creación del usuario
    /** @type {UserDocument} */
    const nuevoUsuario = new User(req.body);

    // Encadenamos la lógica del modelo
    nuevoUsuario.password = await nuevoUsuario.encryptPassword(password);

    // Generamos el token. Asumimos que <<crearToken>> actualiza la propiedad <<token>>.
    // dentro de la instancia y además retorna el string.
    const token = nuevoUsuario.crearToken();

    // 4. Guardar en Base de Datos (Punto Crítico)
    // IMPORTANTE: Guardamos ANTES de enviar el correo.
    // Si la DB falla, no enviamos un correo fantasma que no sirve.
    await nuevoUsuario.save();

    // 5. Enviar correo (Efecto secundario)
    await sendMailToRegister(email, token);

    // 6. Respuesta exitosa (201 Created es el código correcto para registros)
    return res.status(201).json({
      msg: "Revisa tu correo electrónico para confirmar tu cuenta",
    });
  } catch (error) {
    // Logueamos el error real en consola para el desarrollador
    console.error("Error en registro:", error);

    // Al cliente le damos un mensaje genérico por seguridad (no exponer estructura interna)
    return res.status(500).json({
      msg: "Hubo un error al crear la cuenta, por favor intente más tarde",
    });
  }
};

const confirmarMail = async (req, res) => {
  const { token } = req.params;

  try {
    // 1. Buscar usuario por token
    const usuario = await User.findOne({ token });

    // 2. Validar si el usuario existe o el token es inválido
    if (!usuario) {
      return res.status(404).json({
        msg: "Token inválido o la cuenta ya ha sido confirmada",
      });
    }

    // 3. Confirmar cuenta y limpiar token
    usuario.token = null;
    usuario.confirmEmail = true;

    await usuario.save();

    // 4. Respuesta exitosa
    return res.status(200).json({
      msg: "Cuenta confirmada exitosamente. Ya puedes iniciar sesión.",
    });
  } catch (error) {
    // 5. Manejo de errores del servidor
    console.error(error);
    return res.status(500).json({
      msg: "Error interno al confirmar la cuenta",
    });
  }
};

const recuperarPassword = async (req, res) => {
  const { email } = req.body;

  try {
    // 1. Validación temprana
    if (!email) {
      return res.status(400).json({
        msg: "Debes ingresar un correo electrónico",
      });
    }

    // 2. Búsqueda de usuario
    const usuario = await User.findOne({ email });

    if (!usuario) {
      return res.status(404).json({
        msg: "El usuario no se encuentra registrado",
      });
    }

    // 3. Generación de Token
    const token = usuario.crearToken();
    usuario.token = token;

    // 4. Guardar en BD PRIMERO
    // Es vital guardar el token antes de enviar el correo.
    // Si guardas después y falla, el usuario recibe un correo que no funciona.
    await usuario.save();

    // 5. Enviar Correo
    // Asumimos que la función de correo es asíncrona (promesa), por lo que agregamos 'await'.
    // Si el correo falla, saltará al catch y avisará del error.
    await sendMailToRecoveryPassword(email, token);

    // 6. Respuesta Exitosa
    return res.status(200).json({
      msg: "Revisa tu correo electrónico para restablecer tu contraseña",
    });
  } catch (error) {
    // Seguridad: Logueamos el error interno, pero no se lo mostramos al usuario
    console.error(error);
    return res.status(500).json({
      msg: "Error interno del servidor",
    });
  }
};

const comprobarTokenPassword = async (req, res) => {
  const { token } = req.params;

  try {
    // 1. Verificación simple: ¿Existe el token?
    if (!token) {
      return res.status(400).json({ msg: "Token no proporcionado" });
    }

    // 2. Buscar usuario por token
    const usuario = await User.findOne({ token });

    // 3. Validación de existencia
    // Simplificamos la lógica: si no hay usuario, el token es inválido.
    if (!usuario) {
      return res.status(404).json({
        msg: "Lo sentimos, el token no es válido o ya expiró",
      });
    }

    // 4. Respuesta exitosa
    return res.status(200).json({
      msg: "Token confirmado, ya puedes crear tu nuevo password",
    });
  } catch (error) {
    // Seguridad: No devolver el error crudo al cliente
    console.error(error);
    return res.status(500).json({
      msg: "Error interno del servidor",
    });
  }
};

const crearNuevoPassword = async (req, res) => {
  const { token } = req.params;
  const { password, confirmPassword } = req.body;

  try {
    // 1. Validaciones de entrada (Fail Fast)
    // Usamos status 400 (Bad Request) porque es error del cliente, no <<No encontrado>> (404)
    if (!password || !confirmPassword) {
      return res.status(400).json({ msg: "Debes llenar todos los campos" });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ msg: "Los passwords no coinciden" });
    }

    // 2. Buscar usuario
    const usuario = await User.findOne({ token });

    if (!usuario) {
      // Aquí sí usamos 404 porque el recurso (usuario con ese token) no existe
      return res
        .status(404)
        .json({ msg: "Lo sentimos, no se puede validar la cuenta" });
    }

    // 3. Actualización de credenciales
    // Es buena práctica limpiar el token inmediatamente para evitar reuso (Replay Attack)
    usuario.token = null;
    usuario.password = await usuario.encryptPassword(password);

    await usuario.save();

    // 4. Respuesta exitosa
    return res.status(200).json({
      msg: "Felicitaciones, ya puedes iniciar sesión con tu nuevo password",
    });
  } catch (error) {
    // Seguridad: Ocultar detalles del error al cliente
    console.error(error);
    return res.status(500).json({ msg: "Error interno del servidor" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. Validación de campos (Fail Fast)
    // Usamos 400 (Bad Request) porque es un error de <<petición mal formada>>
    if (!email || !password) {
      return res.status(400).json({
        msg: "Lo sentimos, debes llenar todos los campos",
      });
    }

    // 2. Buscar usuario
    const usuario = await User.findOne({ email });

    // 3. Validar existencia del usuario
    if (!usuario) {
      return res.status(404).json({
        msg: "Credenciales Inválidas",
      });
    }

    // 4. Validar cuenta confirmada
    // Usamos 403 (Forbidden) porque el usuario existe, pero no tiene permiso aún
    if (!usuario.confirmEmail) {
      return res.status(403).json({
        msg: "Tu cuenta no ha sido confirmada aún",
      });
    }

    // 5. Validar contraseña
    // matchPassword suele devolver booleano, es mejor un if directo
    const passwordCorrecto = await usuario.matchPassword(password);

    if (!passwordCorrecto) {
      return res.status(401).json({
        msg: "Credenciales Inválidas",
      });
    }

    // 6. Generar Token
    // Eliminamos el console.log(token) por seguridad (no exponer credenciales en logs)
    const token = crearTokenJWT(usuario._id, usuario.rol);

    // 7. Respuesta
    // Desestructuramos para enviar solo lo necesario
    const { nombre, apellido, direccion, telefono, _id, rol } = usuario;

    return res.status(200).json({
      token,
      nombre,
      apellido,
      direccion,
      telefono,
      _id,
      rol,
      email: usuario.email, // Estandarizamos la respuesta
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Error interno del servidor" });
  }
};

const perfil = (req, res) => {
  const usuario = req.usuario;

  if (!usuario) {
    // Si llegamos aquí sin usuario, el middleware falló o no se implementó bien
    return res.status(500).json({
      msg: "Error de servidor: No se pudo recuperar el perfil autenticado",
    });
  }

  // 2. Crear una copia limpia del objeto
  // Usamos .toObject() si es de Mongoose, o Spread Operator {...} si ya es un objeto plano
  const perfilUsuario = usuario.toObject ? usuario.toObject() : { ...usuario };

  // 3. Eliminar datos sensibles o técnicos (Clean Code: Exclusión explícita)
  delete perfilUsuario.token;
  delete perfilUsuario.confirmEmail;
  delete perfilUsuario.createdAt;
  delete perfilUsuario.updatedAt;
  delete perfilUsuario.__v;
  delete perfilUsuario.password;

  // 4. Respuesta
  res.status(200).json(perfilUsuario);

  // 2. Respuesta limpia
  return res.status(200).json(perfilUsuario);
};

const actualizarPassword = async (req, res) => {
  // Obtenemos el ID del usuario ya autenticado (desde el middleware)
  const { _id } = req.usuario;
  const { passwordActual, passwordNuevo } = req.body;

  try {
    // 1. Validación de entrada (Fail Fast)
    if (!passwordActual || !passwordNuevo) {
      return res.status(400).json({
        msg: "Debes llenar todos los campos",
      });
    }

    if (passwordNuevo.length < 8) {
      return res
        .status(400)
        .json({ msg: "La nueva contraseña debe tener al menos 8 caracteres" });
    }

    // 2. Buscar usuario en BDD
    // Cambiamos <<userBDD>> por <<usuario>>
    const usuario = await User.findById(_id);

    if (!usuario) {
      return res.status(404).json({
        msg: "El usuario no existe",
      });
    }

    // 3. Verificar contraseña actual
    const passwordCorrecto = await usuario.matchPassword(passwordActual);

    if (!passwordCorrecto) {
      return res.status(401).json({
        msg: "La contraseña actual es incorrecta",
      });
    }

    // 4. Actualizar contraseña
    usuario.password = await usuario.encryptPassword(passwordNuevo);
    await usuario.save();

    // 5. Respuesta exitosa
    return res.status(200).json({
      msg: "Contraseña actualizada correctamente",
    });
  } catch (error) {
    // Seguridad: Logueamos el error real, pero ocultamos detalles al cliente
    console.error(error);
    return res.status(500).json({
      msg: "Error interno del servidor al actualizar la contraseña",
    });
  }
};

const actualizarPerfil = async (req, res) => {
  const { _id } = req.usuario;
  const { nombre, apellido, direccion, celular, email } = req.body;

  try {
    // 1. Validación de campos obligatorios (Fail Fast)
    if (!nombre || !apellido || !direccion || !celular || !email) {
      return res.status(400).json({
        msg: "Debes llenar todos los campos",
      });
    }

    // 2. Buscar usuario
    const usuario = await User.findById(_id);

    if (!usuario) {
      return res.status(404).json({
        msg: "Usuario no encontrado",
      });
    }

    // 3. Validación de Email único
    // Solo verificamos si el usuario REALMENTE cambió su correo
    if (usuario.email !== email) {
      const emailOcupado = await User.findOne({ email });
      if (emailOcupado) {
        return res.status(400).json({
          msg: "El correo ya está registrado por otro usuario",
        });
      }
    }

    // 4. Actualización de datos
    // Actualizamos las propiedades del objeto Mongoose
    usuario.nombre = nombre;
    usuario.apellido = apellido;
    usuario.direccion = direccion;
    usuario.celular = celular;
    usuario.email = email;

    await usuario.save();

    // 5. Preparar Respuesta (Clean Code)
    // Usamos .toObject() para convertir el documento de Mongoose a objeto JS puro
    const respuesta = usuario.toObject();

    // Eliminamos datos sensibles antes de enviar
    delete respuesta.password;
    delete respuesta.token;
    delete respuesta.confirmEmail;
    delete respuesta.__v;
    delete respuesta.createdAt;
    delete respuesta.updatedAt;

    return res.status(200).json(respuesta);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      msg: "Error interno al actualizar el perfil",
    });
  }
};

export {
  confirmarMail,
  registro,
  recuperarPassword,
  comprobarTokenPassword,
  crearNuevoPassword,
  login,
  perfil,
  actualizarPassword,
  actualizarPerfil,
};
