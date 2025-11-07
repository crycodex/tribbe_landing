# Tribbe Landing Page

<div align="center">
  <h3>🏋️‍♂️ La app social fitness que convierte cada entrenamiento en una experiencia compartida</h3>
  <p>Landing page oficial de Tribbe - Entrena, Compite y Conecta</p>
</div>

---

## 📋 Tabla de Contenidos

- [Descripción](#-descripción)
- [Características](#-características)
- [Stack Tecnológico](#-stack-tecnológico)
- [Requisitos Previos](#-requisitos-previos)
- [Instalación](#-instalación)
- [Desarrollo](#-desarrollo)
- [Build](#-build)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Scripts Disponibles](#-scripts-disponibles)
- [Páginas](#-páginas)
- [Componentes Principales](#-componentes-principales)
- [Despliegue](#-despliegue)

---

## 🎯 Descripción

Tribbe es una aplicación de fitness social innovadora que permite a los usuarios registrar sus entrenamientos con fotos, competir con amigos y mantener rachas semanales. Esta landing page presenta todas las características y beneficios de la aplicación con una interfaz moderna y atractiva.

### Propuesta de Valor

- **Entrena**: Registra tus workouts con fotos y detalles
- **Compite**: Desafía a tus amigos y mantén rachas semanales
- **Conecta**: Encuentra tu tribu y comparte tu progreso

---

## ✨ Características

- 🎨 **Diseño Moderno**: Interfaz limpia y atractiva con animaciones fluidas
- 🌓 **Tema Dark/Light**: Sistema de temas adaptable a las preferencias del usuario
- 📱 **Responsive**: Diseño completamente adaptativo para todos los dispositivos
- ⚡ **Performance**: Optimizado con Vite y React para carga rápida
- 🎭 **Animaciones**: Efectos visuales atractivos con GSAP y Motion
- 🎨 **UI Components**: Biblioteca completa de componentes con shadcn/ui
- 🧩 **Componentes Reutilizables**: Arquitectura modular y escalable
- 🎯 **SEO Friendly**: Optimizado para motores de búsqueda

---

## 🛠 Stack Tecnológico

### Core
- **[React 18.3](https://react.dev/)** - Biblioteca UI moderna
- **[TypeScript 5.8](https://www.typescriptlang.org/)** - Tipado estático
- **[Vite 5.4](https://vitejs.dev/)** - Build tool ultrarrápido

### UI & Styling
- **[Tailwind CSS 3.4](https://tailwindcss.com/)** - Framework CSS utility-first
- **[shadcn/ui](https://ui.shadcn.com/)** - Componentes UI de alta calidad
- **[Radix UI](https://www.radix-ui.com/)** - Primitivos UI accesibles
- **[Lucide React](https://lucide.dev/)** - Iconos modernos

### Animaciones & Efectos
- **[GSAP 3.13](https://greensock.com/gsap/)** - Animaciones profesionales
- **[Motion 12](https://motion.dev/)** - Animaciones React (Framer Motion)
- **[Three.js 0.181](https://threejs.org/)** - Gráficos 3D
- **[OGL 1.0](https://oframe.github.io/ogl/)** - Framework WebGL ligero

### State Management & Data
- **[TanStack Query 5.83](https://tanstack.com/query)** - Gestión de estado asíncrono
- **[React Hook Form 7.61](https://react-hook-form.com/)** - Gestión de formularios
- **[Zod 3.25](https://zod.dev/)** - Validación de esquemas

### Routing & Navigation
- **[React Router DOM 6.30](https://reactrouter.com/)** - Enrutamiento SPA

### Utilidades
- **[date-fns 3.6](https://date-fns.org/)** - Manipulación de fechas
- **[clsx](https://github.com/lukeed/clsx)** - Gestión de clases CSS
- **[tailwind-merge](https://github.com/dcastil/tailwind-merge)** - Merge de clases Tailwind

### Dev Tools
- **[ESLint 9.32](https://eslint.org/)** - Linter de código
- **[TypeScript ESLint](https://typescript-eslint.io/)** - Reglas TypeScript

---

## 📦 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** >= 18.0.0 - [Instalar con nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
- **npm** >= 9.0.0 o **pnpm** >= 8.0.0 o **bun** >= 1.0.0

Para verificar las versiones instaladas:

```bash
node --version
npm --version
```

---

## 🚀 Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/tribbe_landing.git
cd tribbe_landing
```

### 2. Instalar dependencias

```bash
# Con npm
npm install

# Con pnpm
pnpm install

# Con bun
bun install
```

---

## 💻 Desarrollo

### Iniciar servidor de desarrollo

```bash
npm run dev
```

El servidor se iniciará en `http://localhost:5173` (o el siguiente puerto disponible).

### Características del modo desarrollo:
- ⚡ Hot Module Replacement (HMR)
- 🔄 Recarga instantánea de cambios
- 🐛 Source maps para debugging
- 📊 Métricas de rendimiento

---

## 🏗 Build

### Build de producción

```bash
npm run build
```

Genera una versión optimizada en la carpeta `dist/`:
- ✅ Minificación de código
- ✅ Tree-shaking
- ✅ Code splitting
- ✅ Asset optimization

### Build de desarrollo

```bash
npm run build:dev
```

Genera un build con source maps para debugging.

### Preview del build

```bash
npm run preview
```

Previsualiza el build de producción localmente.

---

## 📁 Estructura del Proyecto

```
tribbe_landing/
├── public/                    # Archivos estáticos
│   ├── favicon.ico
│   ├── placeholder.svg
│   └── robots.txt
├── src/
│   ├── assets/               # Recursos multimedia
│   │   ├── about/           # Imágenes de About
│   │   ├── icon/            # Iconos de la app
│   │   ├── app-mockup.png
│   │   └── hero-workout.jpg
│   ├── components/          # Componentes React
│   │   ├── ui/             # Componentes UI shadcn
│   │   ├── Aurora.tsx      # Efecto aurora background
│   │   ├── Ballpit.tsx     # Animación física de bolas
│   │   ├── BubbleMenu.tsx  # Menú flotante
│   │   ├── CountUp.tsx     # Animación de contadores
│   │   ├── CTA.tsx         # Call to Action
│   │   ├── DotGrid.tsx     # Grid de puntos animado
│   │   ├── FAQ.tsx         # Preguntas frecuentes
│   │   ├── Footer.tsx      # Pie de página
│   │   ├── Hero.tsx        # Sección hero
│   │   ├── Navbar.tsx      # Barra de navegación
│   │   ├── Pricing.tsx     # Planes de precios
│   │   ├── Screenshots.tsx # Capturas de la app
│   │   ├── Squares.tsx     # Efecto de cuadrados
│   │   ├── StarBorder.tsx  # Borde con estrellas
│   │   ├── Streaks.tsx     # Sección de rachas
│   │   └── Testimonials.tsx # Testimonios
│   ├── contexts/           # Contextos React
│   │   └── ThemeContext.tsx # Tema dark/light
│   ├── hooks/              # Custom hooks
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│   ├── lib/                # Utilidades
│   │   └── utils.ts        # Funciones helpers
│   ├── pages/              # Páginas
│   │   ├── About.tsx       # Sobre nosotros
│   │   ├── Index.tsx       # Página principal
│   │   ├── NotFound.tsx    # Error 404
│   │   ├── Privacy.tsx     # Política de privacidad
│   │   ├── Roadmap.tsx     # Roadmap del producto
│   │   └── Terms.tsx       # Términos y condiciones
│   ├── App.tsx             # Componente principal
│   ├── main.tsx            # Entry point
│   └── index.css           # Estilos globales
├── .eslintrc.js            # Configuración ESLint
├── components.json         # Configuración shadcn
├── package.json            # Dependencias
├── postcss.config.js       # Configuración PostCSS
├── tailwind.config.ts      # Configuración Tailwind
├── tsconfig.json           # Configuración TypeScript
├── vite.config.ts          # Configuración Vite
└── README.md               # Este archivo
```

---

## 📜 Scripts Disponibles

| Script | Descripción |
|--------|-------------|
| `npm run dev` | Inicia servidor de desarrollo |
| `npm run build` | Build de producción |
| `npm run build:dev` | Build de desarrollo con source maps |
| `npm run preview` | Previsualiza el build de producción |
| `npm run lint` | Ejecuta el linter |

---

## 📄 Páginas

### Landing Principal (`/`)
Página principal con todas las secciones:
- Hero con animación Ballpit
- Screenshots de la app
- Sección de Streaks
- Planes de precio
- FAQ
- Call to Action
- Footer

### Roadmap (`/roadmap`)
Roadmap visual del desarrollo del producto con timeline de features.

### Sobre Nosotros (`/about`)
Información sobre el equipo y la misión de Tribbe.

### Privacidad (`/privacy`)
Política de privacidad y manejo de datos.

### Términos (`/terms`)
Términos y condiciones de uso de la aplicación.

---

## 🧩 Componentes Principales

### Navbar
Barra de navegación responsive con:
- Logo animado
- Enlaces de navegación
- Cambio de tema (dark/light)
- Menú móvil adaptativo

### Hero
Sección principal con:
- Animación Ballpit de fondo
- CTA principal
- Estadísticas animadas con CountUp
- Mockup de la app

### Screenshots
Galería de capturas de pantalla de la app con carousel.

### Streaks
Muestra el sistema de rachas y gamificación.

### Pricing
Planes de precios con comparación de features.

### FAQ
Preguntas frecuentes con acordeón expandible.

### Footer
Pie de página con:
- Enlaces a redes sociales
- Enlaces legales
- Información de contacto

---

## 🚀 Despliegue

### Despliegue en Vercel (Recomendado)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push del código a GitHub
2. Importa el repositorio en Vercel
3. Vercel detectará automáticamente Vite
4. Deploy automático

### Despliegue en Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start)

1. Push del código a GitHub
2. Conecta el repositorio en Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### Despliegue manual

```bash
# 1. Generar build
npm run build

# 2. El contenido de la carpeta dist/ está listo para producción
# 3. Sube el contenido a tu servidor web o CDN
```

### Variables de Entorno

Si necesitas variables de entorno, crea un archivo `.env`:

```env
VITE_APP_NAME=Tribbe
VITE_API_URL=https://api.tribbe.app
```

**Nota**: Las variables deben empezar con `VITE_` para ser expuestas al cliente.

---

## 📝 Convenciones de Código

Este proyecto sigue las mejores prácticas de React y TypeScript:

- ✅ Componentes funcionales con hooks
- ✅ TypeScript para type safety
- ✅ Tailwind CSS para styling
- ✅ Componentes reutilizables y modulares
- ✅ Code splitting automático
- ✅ Lazy loading de componentes
- ✅ Nomenclatura consistente (PascalCase para componentes, camelCase para funciones)

---

## 🤝 Contribución

Las contribuciones son bienvenidas. Por favor:

1. Fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit de cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

## 📄 Licencia

Este proyecto está licenciado bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

---

## 📧 Contacto

Para más información sobre Tribbe:

- **Email**: contact@tribbe.app
- **Website**: [tribbe.app](https://tribbe.app)
- **Twitter**: [@tribbeapp](https://twitter.com/tribbeapp)

---

<div align="center">
  <p>Hecho con ❤️ por el equipo de Tribbe</p>
  <p>© 2025 Tribbe. Todos los derechos reservados.</p>
</div>
