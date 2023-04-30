import { stripe } from '@/lib/stipe'
import type { NextApiRequest, NextApiResponse } from 'next'
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { pricesIdAndQuantities } = req.body
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    res.status(405).json({ error: 'Method not allowed.' })
  }

  const checkoutSession = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: pricesIdAndQuantities,
    success_url:
      'http://localhost:3000/success/?session_id={CHECKOUT_SESSION_ID}',
    cancel_url: 'http://localhost:3000/cancel',
  })

  return res.status(201).json({
    checkoutUrl: checkoutSession.url,
  })
}
