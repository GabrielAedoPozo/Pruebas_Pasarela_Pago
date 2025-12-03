import Stripe from "stripe";

export default async function handler(req, res) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    payment_method_types: ["card"],
    success_url: "https://tu-dominio.com/exito",
    cancel_url: "https://tu-dominio.com/cancelado",
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "Producto Ejemplo",
          },
          unit_amount: 1500, // $15.00
        },
        quantity: 1,
      },
    ],
  });

  res.status(200).json({ id: session.id });
}
