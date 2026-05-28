<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# DengueMap — Aplicación Web Predictiva

Este repositorio contiene la aplicación web cliente (Vite + React + Tailwind) usada como ventana de entrada al sistema de predicción y visualización de riesgo.

**Resumen rápido:** la interfaz pública se despliega en un hosting estático (por ejemplo, Vercel). La base de datos y la autenticación están en Supabase. Las funciones que realizan cálculos o que requieren credenciales/secreto deben alojarse en un backend seguro (recomendado: Supabase Edge Functions).

**Landing Page:** [https://denguemap-hn.com](https://denguemap-hn.com)
**Plataforma App:** [https://app.denguemap-hn.com](https://app.denguemap-hn.com)

## Estructura del proyecto
- `src/` — código fuente de la UI (React + TypeScript)
- `src/components/` — componentes reutilizables (incluye `PredictiveMap.tsx`)
- `src/vite-env.d.ts` — definiciones de tipos para variables de entorno
- `lib/` — utilidades del proyecto
- `package.json`, `tsconfig.json`, `vite.config.ts`

## Requisitos
- Node.js (recomendado 18+)
- npm o yarn

## Scripts útiles

Instalar dependencias:

```bash
npm install
```

Desarrollo:

```bash
npm run dev
```

TypeScript (comprobación sin emitir):

```bash
npx tsc --noEmit
```

Build:

```bash
npm run build
```

## Cambios recientes y correcciones
- Se identificó un error de tipos TypeScript relacionado con JSX y `react/jsx-runtime`. Solución recomendada aplicada localmente: instalar dependencias de tipos (`@types/react`, `@types/react-dom`) y verificar `tsconfig.json` con `"jsx": "react-jsx"`.
- Recomendación de Tailwind: reemplazar `aspect-[16/9]` por `aspect-video` cuando sea apropiado para seguir convenciones.

## Dónde alojar las funciones de cálculo (recomendaciones)

- Recomendación principal: **Supabase Edge Functions**. Ventajas:
   - Integración nativa con Supabase (misma red/privilegios)
   - Fácil manejo de secretos y despliegue
   - Latencia baja y buen comportamiento en el plan gratuito para cargas moderadas

- Alternativa válida: **Vercel Serverless Functions** si prefieres mantener todo en Vercel. Considerar limitaciones de cold-start y cuota en el plan gratuito.

- Para cálculos intensivos o de larga duración:
   - Usar jobs asíncronos en background (colas + workers) o un servicio de contenedores (Cloud Run, Fly.io, AWS Fargate) para mayor control y rendimiento.
   - Si se usan modelos ML pesados, considerar instancias con GPU en hosts especializados.

## Buenas prácticas de arquitectura

- Mantener la lógica sensible y claves fuera del navegador; ejecutar validaciones y cálculos críticos en funciones server-side.
- Desplegar funciones en la misma región que la base de datos para reducir latencia.
- Emplear caché y resultados precomputados para consultas costosas.
- Para tasks largas: poner en cola (por ejemplo, RQ, BullMQ o Supabase + worker) y notificar al cliente cuando el resultado esté listo.
- Asegurar webhooks con firma y reintentos idempotentes.

## Variables de entorno y secretos
- No incluir secretos en el frontend. Guardarlos en las variables de entorno del hosting o en el gestor de secretos (Supabase, Vercel dashboard).

**Requeridas para este proyecto:**
- `VITE_APP_URL` — URL de la aplicación funcional (ej. `https://app.denguemap-hn.com`)
- `VITE_SUPABASE_URL` — URL de tu proyecto Supabase.
- `VITE_SUPABASE_ANON_KEY` — Clave pública (anon) de Supabase.

## Configuración de Conexión (Vercel + Supabase)

1. **Vercel Dashboard (Landing):**
   - Ir a Settings > Environment Variables.
   - Agregar `VITE_APP_URL` con valor `https://app.denguemap-hn.com`.
   - Realizar un **Redeploy** para aplicar cambios.

2. **Supabase Dashboard (Auth):**
   - Ir a Authentication > URL Configuration.
   - **Site URL**: `https://app.denguemap-hn.com`
   - **Redirect URLs**: Agregar `https://denguemap-hn.com/**` y `https://app.denguemap-hn.com/**`.

## Comprobaciones recomendadas después de cambios
- Ejecutar `npx tsc --noEmit` para detectar errores de tipos.
- Verificar estilos y clases de Tailwind en la UI.

## Próximos pasos sugeridos
- Mover las funciones de cálculo a Edge Functions y configurar una cola para tareas largas.
- Añadir pruebas unitarias y e2e para el flujo completo de autenticación y visualización de datos.
