const rawUrl = import.meta.env.VITE_APP_URL || '';

// Diagnóstico de producción: 
// Solo mostramos alertas si la configuración es crítica o incorrecta.
if (typeof window !== 'undefined') {
  if (!rawUrl) {
    console.error("%c 🚨 DengueMap Error ", "background: #ff0000; color: #fff; font-weight: bold;", "La variable VITE_APP_URL no está llegando al navegador. Revisa Vercel.");
    console.error("%c 🚨 DengueMap Config Error ", "background: #ff0000; color: #fff; font-weight: bold;", "VITE_APP_URL no detectada. Verifique las variables de entorno en Vercel.");
  } else {
    console.log("%c 🛰️ DengueMap Online ", "background: #bef264; color: #000; font-weight: bold;", `Conectado a: ${rawUrl}`);
    if (import.meta.env.DEV) {
      console.log("%c 🛰️ DengueMap Debug ", "background: #bef264; color: #000; font-weight: bold;", `Redirigiendo a: ${rawUrl}`);
    }
    
    if (rawUrl.includes('localhost') && import.meta.env.PROD) {
    if (rawUrl.includes('localhost') && !import.meta.env.DEV) {
      console.warn("⚠️ Advertencia: Estás usando localhost en un dominio de producción.");
    }
  }
}
};

export const APP_URL = rawUrl.replace(/\/$/, '');