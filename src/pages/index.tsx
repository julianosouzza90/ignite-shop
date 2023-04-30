import {
  AddToCartButton,
  HomeContainer,
  Product,
  RemoveFromCart,
  SlideControlButtonNext,
  SlideControlButtonPrevious,
} from '@/styles/pages/home'
import Image from 'next/image'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { stripe } from '@/lib/stipe'
import { GetStaticProps } from 'next'
import Stripe from 'stripe'
import Link from 'next/link'
import { CaretLeft, CaretRight, Handbag, Trash } from '@phosphor-icons/react'
import { useCart } from '@/hooks/useCart'
import { currencyBrlFormat } from '@/utils/numberFormat'
import { useState } from 'react'
import { HomeSkeleton } from '@/components/HomeSkeleton'

interface IProduct {
  productId: string
  priceId: string
  name: string
  description: string
  productImage: string
  formattedPrice: string
  price: number
}
interface HomeProps {
  products: IProduct[]
}
export default function Home({ products }: HomeProps) {
  const { addItemToCart, verifyIfProductAlreadyInCart, removeProductFromCart } =
    useCart()
  const [previousButtonCanBeDisplayed, setPreviousButtonCanBeDisplayed] =
    useState(false)
  const [nextButtonCanBeDisplayed, setNextButtonCanBeDisplayed] = useState(true)

  const [isLoading] = useState(false)
  // Simular delay de carregamento
  /* (() =>
    setInterval(() => {
      setIsLoading(false)
    }, 500),
  )() */

  const [sliderRef, instanceRef] = useKeenSlider({
    slideChanged(slider) {
      const currentId = slider.track.details.abs
      const maxIds = slider.track.details.maxIdx
      setPreviousButtonCanBeDisplayed(currentId > 0)
      setNextButtonCanBeDisplayed(maxIds > 0 && maxIds !== currentId)
    },
    slides: {
      perView: 3,
      spacing: 48,
    },
  })

  return isLoading ? (
    <HomeSkeleton />
  ) : (
    <HomeContainer ref={sliderRef} className="keen-slider">
      {previousButtonCanBeDisplayed && (
        <SlideControlButtonPrevious onClick={() => instanceRef.current?.prev()}>
          <CaretLeft size={48} />
        </SlideControlButtonPrevious>
      )}
      {nextButtonCanBeDisplayed && (
        <SlideControlButtonNext>
          <CaretRight size={48} onClick={() => instanceRef.current?.next()} />
        </SlideControlButtonNext>
      )}

      {products.map((product) => (
        <Product className="keen-slider__slide" key={product.productId}>
          <Link href={`product/${product.productId}`}>
            <Image src={product.productImage} alt="" width={400} height={400} />
          </Link>
          <footer>
            <div>
              <strong>{product.name}</strong>
              <span>{currencyBrlFormat(product.price / 100)}</span>
            </div>
            {!verifyIfProductAlreadyInCart(product) ? (
              <AddToCartButton onClick={() => addItemToCart(product)}>
                <Handbag size={35} />
              </AddToCartButton>
            ) : (
              <RemoveFromCart onClick={() => removeProductFromCart(product)}>
                {' '}
                <Trash size={35} />
              </RemoveFromCart>
            )}
          </footer>
        </Product>
      ))}
    </HomeContainer>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price
    return {
      productId: product.id,
      priceId: price.id,
      name: product.name,
      description: product.description,
      productImage: product.images[0],
      price: price.unit_amount,
    }
  })

  return {
    props: {
      products,
    },
    revalidate: 60 * 60,
  }
}
