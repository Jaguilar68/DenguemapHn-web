const rawUrl = import.meta.env.VITE_APP_URL || '';

// Este log te dirá exactamente qué valor está leyendo la Landing Page en Vercel.
if (typeof window !== 'undefined') console.log("🔍 URL de la App cargada:", rawUrl || "VACÍA");

export const APP_URL = rawUrl.replace(/\/$/, '');