# Taskly Solutions - Landing Page

Landing page profesional one-page para Taskly Solutions, una marca de automatizaciones y bots para emprendedores y negocios en Latinoamérica.

## Stack Tecnológico

- **React 18** - Biblioteca de UI
- **TypeScript** - Tipado estático
- **Vite** - Build tool y dev server
- **Tailwind CSS** - Framework de estilos utility-first
- **Heroicons** - Iconos SVG

## Características

- Diseño one-page con scroll suave entre secciones
- Diseño responsive (mobile-first)
- Animaciones sutiles y efectos de glow
- Paleta de colores tech/futurista (verde + morado)
- Formulario de contacto funcional (demo)
- Navegación sticky con efecto blur

## Estructura del Proyecto

```
src/
├── components/       # Componentes reutilizables
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Section.tsx
│   └── Icon.tsx
├── sections/        # Secciones de la landing
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── Process.tsx
│   ├── Cases.tsx
│   ├── About.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── hooks/           # Custom hooks
│   ├── useSmoothScroll.ts
│   └── useScrollAnimation.ts
├── styles/          # Estilos globales
│   └── globals.css
├── App.tsx          # Componente principal
└── main.tsx         # Entry point
```

## Instalación

1. Instala las dependencias:

```bash
npm install
```

2. Inicia el servidor de desarrollo:

```bash
npm run dev
```

## Personalización

### Colores

Los colores personalizados están definidos en `tailwind.config.js`:

- `primary-green` - Verde principal (#10b981)
- `primary-purple` - Morado principal (#8b5cf6)
- `dark-bg` - Fondo oscuro (#0a0a0f)
- `dark-surface` - Superficie oscura (#111118)

### Secciones

Cada sección está en `src/sections/` y puede ser modificada independientemente. Las secciones incluyen:

1. **Navbar** - Navegación principal
2. **Hero** - Sección principal con CTA
3. **Services** - Grid de servicios
4. **Process** - Timeline del proceso de trabajo
5. **Cases** - Casos de uso y beneficios
6. **About** - Información sobre Taskly
7. **Contact** - Formulario de contacto
8. **Footer** - Pie de página

## Notas

- El formulario de contacto actualmente solo hace `console.log` de los datos (sin backend)
- Los iconos usan Heroicons v2
- El diseño está optimizado para móviles primero (mobile-first)

## Licencia

Este proyecto es privado y propiedad de Taskly Solutions.


