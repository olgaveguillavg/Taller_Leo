// ============================================================================
// FEATURE FLAGS · activar / desactivar secciones de la web
// ============================================================================
//
// Estas banderas controlan SOLO qué se muestra al entrar en cada sección.
// El código completo de "Motos" y "Merchandising" (listados, filtros,
// tarjetas, fichas de detalle, galerías, alertas, guardados, compartir,
// estados de stock/vendida, mini-carruseles, selectores de talla y color,
// cesta, checkout, etc.) PERMANECE INTACTO en el proyecto.
//
// ----------------------------------------------------------------------------
// PARA REACTIVAR UNA SECCIÓN CON TODA SU FUNCIONALIDAD ORIGINAL:
//   basta con cambiar su bandera a `true`. No hay que tocar nada más.
//   - MOSTRAR_MOTOS: false          → vuelve a mostrarse "Motos" tal cual estaba.
//   - MOSTRAR_MERCHANDISING: true  → vuelve a mostrarse "Merchandising" y la Cesta.
//
// Con la bandera en `false`, esa sección se sustituye por la pantalla
// "Próximamente" (ProximamenteScreen), sin perder nada del código.
// ----------------------------------------------------------------------------
export const FEATURES = {
  MOSTRAR_MOTOS: false,
  MOSTRAR_MERCHANDISING: false,
};
