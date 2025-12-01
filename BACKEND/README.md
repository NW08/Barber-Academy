# Backend - Barber Academy
Este repositorio contiene el código fuente del servidor (Backend) encargado de la lógica de negocio, conexión a base de datos y autenticación de usuarios. Provee una API RESTful segura para el registro, inicio de sesión, recuperación de contraseñas y gestión de perfiles.

## 📋 Características

* **Autenticación Segura:** Registro e inicio de sesión mediante **JWT (JSON Web Tokens)**.
* **Gestión de Cuentas:** Validación de usuarios mediante confirmación por correo electrónico.
* **Recuperación de Contraseña:** Flujo completo de "Olvidé mi contraseña" con tokens temporales.
* **Protección de Rutas:** Middleware para proteger endpoints privados (`/perfil`).
* **Validaciones Robustas:** Manejo de errores para campos vacíos, emails duplicados, contraseñas inseguras y tokens inválidos.

## 🛠️ Tecnologías Utilizadas

* **Node.js** - Entorno de ejecución.
* **Express** - Framework para el servidor web.
* **MongoDB / Mongoose** - Base de datos NoSQL y ODM.
* **JWT (JsonWebToken)** - Para la autenticación de sesiones.
* **Bcrypt** - Para el hasheo y seguridad de contraseñas.
* **Nodemailer** - Para el envío de correos de confirmación y recuperación.


## 📖 Documentación de la API

A continuación se describen los principales endpoints disponibles.

### 🔓 Autenticación (Público)
📘 **Documentación Backend:** [Ver aquí](https://documenter.getpostman.com/view/49903825/2sB3dLVXeE)
