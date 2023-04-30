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
  const successUrl = process.env.STRIPE_SUCCESS_URL as string
  const cancelUrl = process.env.STRIPE_CANCEL_URL as string
  const checkoutSession = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: pricesIdAndQuantities,
    success_url: successUrl,
    cancel_url: cancelUrl,
  })

  return res.status(201).json({
    checkoutUrl: checkoutSession.url,
  })
}
