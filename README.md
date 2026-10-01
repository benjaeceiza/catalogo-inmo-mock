# 🏡 Terracota Real Estate - Plataforma Inmobiliaria (MVP)

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

Una plataforma inmobiliaria completa y autogestionable, desarrollada como Producto Mínimo Viable (MVP). Diseñada para ofrecer una experiencia de usuario (UX) premium en la búsqueda de propiedades, junto con un panel de administración (SaaS) integral para la gestión del catálogo.

## ✨ Características Principales

El proyecto está dividido en dos grandes módulos con ruteo independiente:

### 👁️ Vista Cliente (Catálogo Público)
- **Diseño Moderno:** Interfaz responsiva con efectos *Glassmorphism* y UI limpia.
- **Catálogo Dinámico:** Grilla de propiedades con filtros en tiempo real (por operación, tipo de inmueble y búsqueda por texto).
- **Detalle de Propiedad:** Vista inmersiva con galería de imágenes inteligente, características detalladas y estado de la propiedad (Venta/Alquiler).
- **Integración con WhatsApp:** Botón flotante global y Call-to-Actions (CTAs) directos en cada propiedad con mensajes pre-armados.
- **Secciones Corporativas:** Páginas de "Nosotros" y "Contacto" diseñadas para generar confianza y captar *leads* (tasaciones).

### ⚙️ Panel de Administración (Dashboard)
- **Métricas en Tiempo Real:** Visualización rápida del total de propiedades, publicaciones activas y pausadas.
- **CRUD Completo:** Creación, edición y eliminación de propiedades.
- **Gestión de Estado:** Posibilidad de pausar/suspender publicaciones sin perder los datos.
- **Auto-generación de Contenido:** Al cargar una nueva propiedad, el sistema asigna automáticamente una galería de imágenes premium para agilizar la carga en la demo.
- **Formulario Modal:** Interfaz limpia para la carga de datos (título, precio, ubicación, metros cuadrados, etc.).

## 🛠️ Tecnologías Utilizadas

- **Frontend:** React (con Hooks: `useState`, `useEffect`)
- **Herramienta de Construcción:** Vite
- **Enrutamiento:** React Router DOM v6
- **Estilos:** CSS3 Puro (Variables, Flexbox, CSS Grid)
- **Iconografía:** React Icons
- **Base de Datos (Mock):** Archivo estático `JSON` manejado a través del estado global para simular persistencia durante la sesión.

## 🚀 Instalación y Ejecución Local

1. Clonar el repositorio:
```bash
   git clone [https://github.com/TU_USUARIO/TU_REPOSITORIO.git](https://github.com/TU_USUARIO/TU_REPOSITORIO.git)
```

2. Instalar las dependencias:
```bash
  npm install
```

3. Iniciar el servidor de desarrollo:
```bash
npm run dev
```

4. Abrir el navegador en http://localhost:5173.