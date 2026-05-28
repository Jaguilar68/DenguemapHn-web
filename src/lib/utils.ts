const rawUrl = import.meta.env.VITE_APP_URL || '';

// Log detallado para depuración en producción
if (typeof window !== 'undefined') {
  console.log("%c DengueMap System Debug ", "background: #bef264; color: #000; font-weight: bold;");
  console.log("Target App URL:", rawUrl ? rawUrl : "¡ERROR: VITE_APP_URL no definida en Vercel!");
  console.log("Full Login Link:", rawUrl ? `${rawUrl.replace(/\/$/, '')}/login` : "Link inválido");
}

export const APP_URL = rawUrl.replace(/\/$/, '');