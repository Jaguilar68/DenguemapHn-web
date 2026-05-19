const express = require('express');
const Stripe = require('stripe');
const bodyParser = require('body-parser');

const app = express();
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

// Stripe exige el body raw para verificar la firma
app.post('/webhook', bodyParser.raw({ type: 'application/json' }), async (req, res) => {
  const sig = req.headers['stripe-signature'];
  let event;
  try {
    event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_ENDPOINT_SECRET);
  } catch (err) {
    console.error('Error construyendo evento Stripe:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    // Ejemplo: notificar al backend (Supabase) para activar/crear usuario
    try {
      const supabaseUrl = process.env.SUPABASE_URL;
      const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
      // Usamos fetch nativo (Node 18+) para llamar la REST API de Supabase
      await fetch(`${supabaseUrl}/rest/v1/payments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          apikey: supabaseKey,
          Authorization: `Bearer ${supabaseKey}`,
        },
        body: JSON.stringify({
          session_id: session.id,
          customer_email: session.customer_details?.email || session.customer_email || null,
          status: 'paid',
          raw: session,
        }),
      });
    } catch (err) {
      console.error('Error notificando a Supabase:', err);
    }
  }

  res.json({ received: true });
});

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Stripe webhook escuchando en puerto ${port}`));
