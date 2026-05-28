const rawUrl = import.meta.env.VITE_APP_URL || '';

// Este log te dirá exactamente qué valor está leyendo la Landing Page en Vercel.
if (typeof window !== 'undefined') {
  console.log("%c 🛰️ DEBUG APP_URL ", "background: #bef264; color: #000; font-weight: bold;", rawUrl ? `[${rawUrl}]` : "❌ NO DEFINIDA EN VERCEL");
}

export const APP_URL = rawUrl.replace(/\/$/, '');