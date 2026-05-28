const rawUrl = import.meta.env.VITE_APP_URL || '';

export const APP_URL = rawUrl.replace(/\/$/, '');