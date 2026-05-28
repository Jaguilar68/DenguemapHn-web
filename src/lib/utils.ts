const rawUrl = import.meta.env.VITE_APP_URL || '';

if (typeof window !== 'undefined') {
  const status = rawUrl ? `CONECTADO A: ${rawUrl}` : "⚠️ ERROR: VITE_APP_URL NO DEFINIDA";
  console.log(`%c 🛰️ DengueMap System | ${status} `, "background: #000; color: #bef264; font-weight: bold; padding: 4px;");
}

export const APP_URL = rawUrl.replace(/\/$/, '');