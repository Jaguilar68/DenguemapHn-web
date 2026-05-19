# Ejemplo: Webhook Express para Stripe

Este ejemplo muestra un webhook mínimo en Node.js/Express que valida la firma de Stripe y notifica a Supabase (REST) para que registre/active el pago.

Variables de entorno necesarias:

- `STRIPE_SECRET_KEY` — clave secreta de Stripe
- `STRIPE_ENDPOINT_SECRET` — secreto del endpoint de webhook (firma)
- `SUPABASE_URL` — URL de tu proyecto Supabase
- `SUPABASE_SERVICE_ROLE_KEY` — Service Role Key (solo server)
- `PORT` — puerto donde correr el webhook (opcional)

Instalación y ejecución (ejemplo local):

```bash
cd examples/stripe-express-webhook
npm init -y
npm install express stripe body-parser
node index.cjs
```

Configuración de Stripe:

1. Crea un endpoint de webhook en tu panel de Stripe apuntando a la URL pública de este servicio.
2. Copia el `Signing secret` y ponlo en `STRIPE_ENDPOINT_SECRET`.

Producción:

- Aloja este webhook en un server seguro (Heroku, Render, Cloud Run) o en una función serverless que soporte peticiones con body raw.
- Nunca expongas `SUPABASE_SERVICE_ROLE_KEY` en el cliente.
