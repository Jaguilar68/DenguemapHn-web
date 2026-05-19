// Plantilla de Supabase Edge Function (TypeScript)
// Guarda este archivo en el directorio de funciones de Supabase y despliega con `supabase functions deploy`.

import Stripe from 'stripe';
import { createClient } from '@supabase/supabase-js';

const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY') || '', { apiVersion: '2022-11-15' });

export default async function (req: Request) {
  const payload = await req.text();
  const sig = req.headers.get('stripe-signature') || '';
  const endpointSecret = Deno.env.get('STRIPE_ENDPOINT_SECRET') || '';

  let event: any;
  try {
    event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
  } catch (err: any) {
    console.error('Error validando webhook:', err.message);
    return new Response(err.message, { status: 400 });
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;

    const supabaseUrl = Deno.env.get('SUPABASE_URL') || '';
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || '';
    const supabase = createClient(supabaseUrl, supabaseKey, { global: { headers: { 'x-my-source': 'edge-function' } } });

    // Ejemplo: marcar la tabla `users` o `payments` en Supabase
    try {
      await supabase.from('payments').insert({
        session_id: session.id,
        email: session.customer_details?.email || null,
        status: 'paid',
        raw: session,
      });

      // Opcional: activar/crear usuario
      if (session.customer_details?.email) {
        await supabase.from('users').upsert({ email: session.customer_details.email, active: true }, { onConflict: ['email'] });
      }
    } catch (err) {
      console.error('Error escribiendo en Supabase:', err);
      return new Response('error supabase', { status: 500 });
    }
  }

  return new Response('ok');
}
