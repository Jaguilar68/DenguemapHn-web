const rawUrl = (import.meta.env.VITE_APP_URL || '').trim();
export const APP_URL = rawUrl.replace(/\/$/, '');

// Log de seguridad para confirmar conexión en consola (puedes borrarlo después)
if (typeof window !== 'undefined') {
  if (import.meta.env.DEV) {
    console.info("🛰️ Conexión establecida: Landing -> App:", APP_URL || "Localhost");
  } else if (!APP_URL) {
    console.error("🚨 Error de Configuración: VITE_APP_URL no detectada en Producción.");
  }
}