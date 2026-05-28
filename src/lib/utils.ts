const rawUrl = import.meta.env.VITE_APP_URL || '';

console.log("DengueMap Debug - URL de la App:", rawUrl || "No definida");

export const APP_URL = rawUrl.replace(/\/$/, '');