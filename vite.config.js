import { defineConfig } from 'vite';

// Sitio estático. El runtime del diseño (src/support.js) interpreta la
// plantilla <x-dc> y monta la app con el React que inyectamos en src/main.js.
export default defineConfig({
  build: {
    outDir: 'dist',
    // El <script type="text/x-dc"> inline es enorme; no lo tratamos como módulo.
    assetsInlineLimit: 0,
  },
});
