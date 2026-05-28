const rawUrl = import.meta.env.VITE_APP_URL || '';
const cleanUrl = rawUrl.trim().replace(/\/$/, '');
export const APP_URL = cleanUrl;