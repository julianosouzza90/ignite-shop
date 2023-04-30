import { IProduct } from '@/contexts/CartContext'
import { useCart } from '@/hooks/useCart'
import { stripe } from '@/lib/stipe'

import {
  ButtonAddToCart,
  ImageContainer,
  ProductDetails,
  ProductDetailsContainer,
} from '@/styles/pages/product'
import { currencyBrlFormat } from '@/utils/numberFormat'
import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import Stripe from 'stripe'

interface ProductProps {
  product: IProduct
}
export default function Product({ product }: ProductProps) {
  const { addItemToCart, verifyIfProductAlreadyInCart } = useCart()
  function handleAddProductInCart() {
    addItemToCart(product)
  }
  return (
    <ProductDetailsContainer>
      <ImageContainer>
        <Image src={product?.productImage} alt="" width={320} height={320} />
      </ImageContainer>
      <ProductDetails>
        <h2>{product.name}</h2>
        <span>{product.formattedPrice}</span>
        <p>{product.description}</p>
        {!verifyIfProductAlreadyInCart(product) ? (
          <ButtonAddToCart onClick={handleAddProductInCart}>
            Colocar na sacola
          </ButtonAddToCart>
        ) : (
          ''
        )}
      </ProductDetails>
    </ProductDetailsContainer>
  )
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}
export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params?.id as string
  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })
  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        productId: product.id,
        name: product.name,
        description: product.description,
        productImage: product.images[0],
        formattedPrice: currencyBrlFormat((price.unit_amount as number) / 100),
        price: price.unit_amount,
        priceId: price.id,
      },
    },
  }
}
