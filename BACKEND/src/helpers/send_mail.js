import sendMail from "../config/nodemailer.js";

const sendMailToRegister = (userMail, token) => {
  return sendMail(
    userMail,
    "Bienvenido a Barber Academy",
    `
            <h1>CONFIRMACIÓN</h1>
            <p>Confirma tu cuenta:</p>
            <a href="${process.env.URL_FRONT}confirmar-cuenta/${token}">
            Haz Clic
            </a>
            <hr>
            <footer>¡Qué gusto verte en nuestra academia!</footer>
        `,
  );
};

const sendMailToRecoveryPassword = (userMail, token) => {
  return sendMail(
    userMail,
    "Código de Recuperación - Barber Academy",
    `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; 
    overflow: hidden;">
        
        <!-- Header -->
        <div style="background-color: #000; padding: 20px; text-align: center;">
            <h1 style="color: #E69100; margin: 0; font-size: 24px;">Barber Academy</h1>
        </div>

        <!-- Body -->
        <div style="padding: 30px; background-color: #ffffff;">
            <p style="color: #333; font-size: 16px; margin-bottom: 20px;">Hola,</p>
            <p style="color: #555; font-size: 16px; line-height: 1.5;">
                Hemos recibido una solicitud para restablecer tu contraseña. Copia el siguiente código de verificación e ingrésalo 
                en la aplicación:
            </p>
            
            <!-- Bloque del Código -->
            <div style="background-color: #f8f8f8; border: 2px dashed #E69100; border-radius: 8px; padding: 20px; text-align: 
            center; margin: 30px 0;">
                <span style="display: block; font-size: 32px; font-weight: bold; letter-spacing: 10px; color: #000; 
                font-family: 'Courier New', monospace;">
                    ${token}
                </span>
            </div>

            <p style="color: #777; font-size: 14px;">
                Este código es válido solo por tiempo limitado. Si no solicitaste este cambio, simplemente ignora este correo.
            </p>
        </div>

        <!-- Footer -->
        <div style="background-color: #f4f4f4; padding: 15px; text-align: center; border-top: 1px solid #e0e0e0;">
            <p style="color: #999; font-size: 12px; margin: 0;">
                © Barber Academy. Todos los derechos reservados.
            </p>
        </div>
    </div>
    `,
  );
};

export { sendMailToRegister, sendMailToRecoveryPassword };
