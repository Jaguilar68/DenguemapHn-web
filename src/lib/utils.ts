const rawUrl = import.meta.env.VITE_APP_URL || '';

// Diagnóstico de producción: 
// Solo mostramos alertas si la configuración es crítica o incorrecta.
if (typeof window !== 'undefined' && !import.meta.env.DEV) {
  if (!rawUrl) {
    console.error("%c DengueMap Config Error ", "background: #ef4444; color: #fff; font-weight: bold;", "VITE_APP_URL no definida.");
  } else if (rawUrl.includes('localhost')) {
    console.warn("DengueMap: Se detectó localhost en un entorno de producción.");
  }
}

export const APP_URL = rawUrl.replace(/\/$/, '');