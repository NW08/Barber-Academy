import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

/**
 * Función genérica para enviar correos
 * @param {string} to - Email del destinatario
 * @param {string} subject - Asunto del correo
 * @param {string} html - Contenido HTML del correo
 */
const sendMail = async (to, subject, html) => {
  try {
    const info = await transporter.sendMail({
      from: '"NAVAJA DORADA" <admin@navajad.com>',
      to,
      subject,
      html,
    });
    console.log("Email Enviado:", info.messageId);
  } catch (error) {
    console.error("Error al enviar:", error.message);
  }
};

export default sendMail;
