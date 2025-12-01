# 💈 Barber Academy & Shop

Una plataforma integral y moderna que fusiona la gestión educativa de una **Academia de Barbería** con los servicios de un **Local Físico**.

El proyecto destaca por su diseño **Dark Mode Premium** (Negro/Oro), uso de Glassmorphism y una arquitectura Full Stack robusta.

---

## 🚀 Stack Tecnológico

La aplicación está construida sobre una arquitectura separada (Frontend/Backend) optimizada para rendimiento y seguridad.

### 💻 Frontend (Cliente)
* **Core:** React + Vite, TypeScript.
* **Estilos & UI:** Tailwind CSS, Lucide React (Iconos), Glassmorphism effects.
* **Estado & Rutas:** Context API, React Router DOM.
* **Extras:** React Toastify (Notificaciones), React Just Parallax.

### ⚙️ Backend (Servidor)
* **Core:** Node.js, Express.
* **Base de Datos:** MongoDB + Mongoose (ODM).
* **Seguridad:** JWT (Auth), Bcrypt (Hashing).
* **Servicios:** Nodemailer (Confirmación de correos y recuperación).

---

## 🌟 Módulos del Proyecto

### 1. 🎓 Academia (E-Learning)
* Visualización y venta de cursos profesionales.
* Dashboard de estudiante y gestión de perfil.
* Pasarela de pago simulada con detección de tarjetas y validaciones.

### 2. 🏢 Barber Shop (Servicios)
* Landing page comercial para el local físico.
* Catálogo de cortes y servicios, galería y ubicación.
* Sección de comunidad y "Nosotros".

---

## ✨ Funcionalidades Clave

### 🔐 Seguridad y Autenticación
* **Auth Completo:** Registro, Login y Confirmación de cuenta vía Email.
* **Recuperación:** Flujo de "Olvidé mi contraseña" con tokens temporales.
* **Protección:** Rutas privadas (Frontend) y Middleware de verificación JWT (Backend).
* **Validaciones:** Control de errores robusto (campos vacíos, duplicados, contraseñas inseguras).

### 👤 Experiencia de Usuario
* **Dashboard Modular:** Edición de avatar, datos personales y seguridad.
* **UI Animada:** Transiciones suaves y efectos parallax en el Home.
* **Persistencia:** Sesiones mantenidas mediante LocalStorage.

---

## 📖 Documentación de la API

El backend expone una API RESTful completamente documentada. Puedes consultar todos los endpoints, esquemas de petición y ejemplos de respuesta aquí:

📘 **[Ver Documentación en Postman](https://documenter.getpostman.com/view/49903825/2sB3dLVXeE)**

---

## 🛠️ Instalación Rápida

1.  **Clonar repositorio:**
    ```bash
    git clone https://github.com/NW08/Barber-Academy.git
    ```

2.  **Configurar Entorno:**
    Crea un archivo `.env` tanto en la carpeta `client` como en `server` con tus variables (Mongo URI, JWT Secret, etc.).

3.  **Instalar y Correr:**
    ```bash
    # En terminal Backend
    npm install && npm run dev

    # En terminal Frontend
    npm install && npm run dev
    ```

---
© 2025 Barber Academy - Todos los derechos reservados.
