import { stripe } from '@/lib/stipe'
import {
  ImagesContainer,
  SuccessContainer,
  SuccessMessage,
} from '@/styles/pages/success'
import { GetServerSideProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import Stripe from 'stripe'

interface SuccessProps {
  costumerName: string | null
  products: {
    imageUrl: string
  }[]
}
export default function Success({ costumerName, products }: SuccessProps) {
  return (
    <SuccessContainer>
      <ImagesContainer>
        {products.map((product) => (
          <Image
            src={product.imageUrl}
            alt=""
            width={100}
            height={100}
            key={product.imageUrl}
          />
        ))}
      </ImagesContainer>
      <SuccessMessage>
        <span>Compra efetuada!</span>
        <p>
          Uhuul <b>{costumerName}</b>, sua compra de {products.length}{' '}
          {products.length > 1 ? 'camisetas' : 'camiseta'} já está a caminho da
          sua casa.
        </p>
        <Link href="/">Voltar ao catálogo</Link>
      </SuccessMessage>
    </SuccessContainer>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const sessionId = String(query.session_id)
  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items.data.price.product'],
  })

  const costumerName = session.customer_details?.name
  const products = session.line_items?.data.map((item) => {
    const product = item.price?.product as Stripe.Product
    return {
      imageUrl: product.images[0],
    }
  })

  return {
    props: {
      costumerName,
      products,
    },
  }
}
