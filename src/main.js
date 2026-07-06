// Punto de entrada Vite.
// Inyecta React y ReactDOM (empaquetados desde node_modules, sin CDN) en
// window ANTES de cargar el runtime del diseño. support.js comprueba
// `window.React && window.ReactDOM` y, si ya existen, no descarga nada de la CDN.
import React from 'react';
import * as ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

window.React = React;
// El runtime usa ReactDOM.createRoot (API UMD de React 18). En el paquete ESM
// vive en 'react-dom/client', así que lo añadimos al objeto ReactDOM global.
window.ReactDOM = Object.assign({}, ReactDOM, { createRoot });

// Import dinámico: se ejecuta DESPUÉS de fijar los globales de arriba, de modo
// que support.js encuentra React ya disponible al arrancar.
import('./support.js');
