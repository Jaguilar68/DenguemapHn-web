const rawUrl = import.meta.env.VITE_APP_URL || '';

if (import.meta.env.DEV) {
  console.log("Conectando a la App en:", rawUrl);
}

export const APP_URL = rawUrl.replace(/\/$/, '');