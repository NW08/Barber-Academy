import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import crypto from "crypto";

const userSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
      trim: true,
    },
    apellido: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },

    // Rol de usuario
    rol: {
      type: String,
      enum: ["administrador", "instructor", "estudiante"],
      required: true,
      default: "estudiante",
    },

    // Confirmación de cuenta
    token: {
      type: String,
      default: null,
    },
    confirmado: {
      type: Boolean,
      default: false,
    },

    // Recuperación de contraseña
    resetPasswordToken: {
      type: String,
      default: null,
    },
    resetPasswordExpires: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);


// Métodos del modelo

// Cifrar contraseña
userSchema.methods.encryptPassword = async function (password) {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

// Comparar contraseñas
userSchema.methods.matchPassword = async function (passwordIngresada) {
  return await bcrypt.compare(passwordIngresada, this.password);
};

// Generar token para confirmación de cuenta
userSchema.methods.crearToken = function () {
  this.token = crypto.randomBytes(32).toString("hex");
  return this.token;
};

// Confirmar cuenta del usuario
userSchema.methods.confirmarCuenta = function () {
  this.confirmado = true;
  this.token = null;
};

// Generar token para recuperación de contraseña
userSchema.methods.generarResetPasswordToken = function () {
  const resetToken = crypto.randomBytes(32).toString("hex");

  this.resetPasswordToken = resetToken;
  this.resetPasswordExpires = Date.now() + 1000 * 60 * 30; // 30 min

  return resetToken;
};

// Limpiar token de recuperación después del cambio de contraseña
userSchema.methods.limpiarResetPasswordToken = function () {
  this.resetPasswordToken = null;
  this.resetPasswordExpires = null;
};

// Actualizar contraseña 
userSchema.methods.actualizarPassword = async function (nuevaPassword) {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(nuevaPassword, salt);
};


export default mongoose.model("User", userSchema);
