import sendMail from "../config/nodemailer.js"


const sendMailToRegister = (userMail, token) => {

    return sendMail(
        userMail,
        "Bienvenido a Barber Academy",
        `
            <h1>CONFIRMACIÓN</h1>
            <p>Confirma tu cuenta:</p>
            <a href="${process.env.URL_FRONTEND}confirm/${token}">
            Confirmar Cuenta
            </a>
            <hr>
            <footer>¡Qué gusto verte en nuestra academia!</footer>
        `
    )
};

const sendMailToRecoveryPassword = (userMail, token) => {

    return sendMail(
        userMail,
        "Recuperar Contraseña",
        `
            <h1>Barber Academy</h1>
            <p>Si solicitaste restablecer tu contraseña copia el siguiente código. De lo contrario, ignora este correo.</p>
            <a href="${process.env.URL_FRONTEND}reset/${token}">
            Restablecer Contraseña
            </a>
            <hr>
            <footer>¡Qué gusto verte en nuestra academia!</footer>
        `
        )
};


export {
    sendMailToRegister,
    sendMailToRecoveryPassword
}
