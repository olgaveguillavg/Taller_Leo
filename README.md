# Taller Motos — SOY DE MOTO

Web del taller de motos (versión "Taller Motos v2"), generada a partir de un
handoff de [Claude Design](https://claude.ai/design) y empaquetada como
proyecto **Vite + React**.

## Cómo funciona

- `index.html` — la app (plantilla `<x-dc>` + lógica en el DSL de Claude Design).
- `src/main.js` — punto de entrada: inyecta **React y ReactDOM locales**
  (empaquetados desde `node_modules`, sin CDN) en `window` y arranca el runtime.
- `src/support.js` — runtime que interpreta la plantilla y monta la app con React.
- `public/img/` — logos y assets (servidos en la raíz, p. ej. `/img/logo-v2.png`).

React ya no depende de ninguna CDN: Vite lo empaqueta en el build. Las tipografías
(Google Fonts) y algunas imágenes de la sección *Nosotros* sí se cargan de forma
remota.

## Desarrollo

```bash
npm install
npm run dev      # servidor de desarrollo (http://localhost:5173)
```

## Build de producción

```bash
npm run build    # genera dist/
npm run preview  # sirve dist/ para probar el build
```

## Despliegue en Vercel

Es un proyecto Vite estándar, así que Vercel lo detecta automáticamente:

1. Vercel → **Add New → Project** → importa este repositorio.
2. **Framework Preset:** *Vite* (autodetectado).
3. **Build Command:** `npm run build` · **Output Directory:** `dist` (autodetectado).
4. **Deploy.**

No hace falta ninguna configuración adicional.
