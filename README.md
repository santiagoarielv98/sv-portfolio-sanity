# SV Portfolio Sanity

Proyecto de portfolio personal desarrollado con Next.js 15, React 19, TypeScript y Sanity CMS. Este proyecto está pensado para ser un sitio web moderno, interactivo y multilingüe que muestra mis proyectos, experiencia, skills y servicios.

## Tecnologías Principales

- **Next.js 15**: Framework React con soporte para SSR, SSG y ISR
- **React 19**: La versión más reciente de React con nuevas características
- **TypeScript**: Tipado estático para JavaScript
- **Sanity CMS**: CMS headless para gestionar el contenido
- **Tailwind CSS 4**: Framework CSS utility-first para diseño rápido
- **next-intl**: Internacionalización para soporte multilingüe
- **React Hook Form**: Manejo de formularios
- **Zod**: Validación de datos
- **Resend**: Envío de emails

## Características

- 🌐 **Multilingüe**: Soporte para Español e Inglés
- 🌓 **Tema Claro/Oscuro**: Cambio de tema basado en preferencias del usuario
- 📱 **Responsive**: Diseño adaptable a todo tipo de dispositivos
- ⚡ **Rendimiento**: Optimizado para una carga rápida y SEO
- 📊 **CMS**: Administración de contenido con Sanity Studio integrado

## Configuración del Proyecto

### Requisitos previos

- Node.js 20.x o superior
- NPM 10.x o superior

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/santiagoarielv98/sv-portfolio-sanity.git
cd sv-portfolio-sanity

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

El servidor de desarrollo estará disponible en http://localhost:3000.

### Scripts

- `npm run dev`: Inicia el servidor de desarrollo con Turbopack
- `npm run build`: Compila el proyecto para producción
- `npm run start`: Inicia el servidor de producción
- `npm run lint`: Ejecuta ESLint para verificar el código
- `npm run typegen`: Genera los tipos de TypeScript para Sanity

## Estructura de Directorios

- `src/app`: Rutas y componentes de la aplicación
- `src/app/(studio)`: Configuración del Studio de Sanity
- `src/app/[lang]`: Rutas multilingües
- `src/app/api`: API Routes para formularios y otros servicios
- `src/components`: Componentes reutilizables
- `src/lib`: Utilidades, hooks y configuraciones
- `src/schemas`: Esquemas de Sanity CMS

## Despliegue

El proyecto está optimizado para ser desplegado en Vercel. También puede ser desplegado en cualquier otra plataforma que soporte Next.js.

## Licencia

Este proyecto es de código abierto bajo la licencia MIT.