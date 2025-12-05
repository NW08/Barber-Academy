import jwt from "jsonwebtoken";
import User from "../models/User.js";

const crearTokenJWT = (id, rol) => {
  return jwt.sign({ id, rol }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

const verificarTokenJWT = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ msg: "Acceso Denegado: Token Inexistente" });
  }

  try {
    const token = authorization.split(" ")[1];
    const { id, rol } = jwt.verify(token, process.env.JWT_SECRET);

    if (rol !== "administrador") {
      return res.status(403).json({ msg: "Solo Acceso Autorizado" });
    }

    const userBDD = await User.findById(id).select("-password").lean();
    if (!userBDD) {
      return res.status(401).json({ msg: "Usuario Inexistente" });
    }

    req.usuario = userBDD;
    return next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({ msg: "Token Inválido" });
  }
};

export { crearTokenJWT, verificarTokenJWT };
