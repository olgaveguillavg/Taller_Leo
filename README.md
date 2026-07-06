# Taller Motos — SOY DE MOTO

Web del taller de motos (versión "Taller Motos v2"), generada a partir de un
handoff de [Claude Design](https://claude.ai/design).

Es un **sitio estático**: no necesita build ni servidor de aplicaciones.

## Estructura

- `index.html` — la app (plantilla + lógica en el DSL de Claude Design).
- `support.js` — runtime que interpreta la plantilla y monta la app con React.
- `img/` — logos y assets.

React y Babel se cargan automáticamente desde una CDN (unpkg) en el navegador,
por eso la primera carga necesita conexión a internet.

## Ver en local

Al usar `fetch`/módulos, ábrelo con un servidor estático (no con doble clic):

```bash
npx serve .
```

Y abre la dirección que indique (p. ej. http://localhost:3000).

## Despliegue en Vercel

Es un sitio estático sin build, así que se despliega **sin configuración**:

1. Vercel → **Add New → Project** → importa este repositorio de GitHub.
2. **Framework Preset:** *Other*.
3. **Build Command:** vacío · **Output Directory:** `.` (raíz).
4. **Deploy.**

Vercel servirá `index.html` en la raíz. No hace falta ninguna modificación.
