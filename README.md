<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# DengueMap — Aplicación Web Predictiva

Este repositorio contiene la aplicación web cliente (Vite + React + Tailwind) usada como ventana de entrada al sistema de predicción y visualización de riesgo.

**Resumen rápido:** la interfaz pública se despliega en un hosting estático (por ejemplo, Vercel). La base de datos y la autenticación están en Supabase. Las funciones que realizan cálculos o que requieren credenciales/secreto deben alojarse en un backend seguro (recomendado: Supabase Edge Functions).

**Enlace de la app (si aplica):** (añade aquí tu URL de despliegue)

## Estructura del proyecto
- `src/` — código fuente de la UI (React + TypeScript)
- `src/components/` — componentes reutilizables (incluye `PredictiveMap.tsx`)
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

## Flujo de pago y registro (diseño actual)

1. Usuario en la UI hace click en un botón y es redirigido a la página de pago (proveedor externo: Stripe, PayPal, etc.).
2. Tras pago, el proveedor llama a un webhook en el backend de la aplicación (server-side) para validar la transacción de forma segura.
3. Una vez verificado el pago por el backend, se crea/activa la cuenta del usuario en Supabase (o se marca como elegible para registro).
4. Usuario es redirigido al flujo de login/registro en la UI y puede autenticarse con Supabase.

> Nota de seguridad: la verificación del pago debe hacerse siempre server-side (webhook firmado) antes de crear o activar usuarios.

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

Ejemplos:
- `SUPABASE_URL`, `SUPABASE_ANON_KEY` (solo para cliente), `SUPABASE_SERVICE_ROLE_KEY` (solo server)
- `PAYMENT_PROVIDER_SECRET` (solo server)

## Comprobaciones recomendadas después de cambios
- Ejecutar `npx tsc --noEmit` para detectar errores de tipos.
- Verificar estilos y clases de Tailwind en la UI.

## Próximos pasos sugeridos
- Implementar la página de pagos y configurar el webhook server-side.
- Mover las funciones de cálculo a Edge Functions y configurar una cola para tareas largas.
- Añadir pruebas unitarias y e2e para el flujo completo (pago → webhook → registro).

---

En la carpeta `examples/` encontrarás dos plantillas en español:

- `examples/stripe-express-webhook/` — ejemplo de webhook en Express para Stripe y README con pasos de ejecución.
- `examples/supabase-edge/` — plantilla de Supabase Edge Function (TypeScript) para validar webhooks y activar cuentas en Supabase.

Si quieres, puedo desplegar o adaptar cualquiera de estos ejemplos a tu proveedor preferido.

