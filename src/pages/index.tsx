import { AddToCartButton, HomeContainer, Product } from "@/styles/pages/home";
import Image from "next/image";
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { stripe } from "@/lib/stipe";
import { GetStaticProps } from "next";
import Stripe from "stripe";
import Link from "next/link";
import {Handbag} from "@phosphor-icons/react";
import { useCart } from "@/hooks/useCart";

interface Product {
  
    productId: string,
    priceId: string,
    name: string
    description: string
    productImage: string,
    formattedPrice: string,
    price: number
  
}
interface HomeProps {
  products: Product[]
}
export default function Home({products}: HomeProps) {
const {addItemToCart} = useCart()

const [sliderRef] = useKeenSlider({
  slides: {
    perView: 3,
    spacing: 48
  }
})

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
       {
          products.map(product => (
          <Link href={`product/${product.productId}`} key={product.productId} >
              <Product className="keen-slider__slide">
          <Image src={product.productImage} alt="" width={400} height={400} />
          <footer>
            <div>
              <strong>{product.name}</strong>
              <span>{new Intl.NumberFormat('pt-br',{
                style: 'currency',
                currency: 'BRL'
              }).format(product.price)}</span>
            </div>
            <AddToCartButton onClick={() => addItemToCart(product)}>
                <Handbag size={35}/>
            </AddToCartButton>
          </footer>
        </Product>
          </Link>
        ))
       }
    </HomeContainer>
  )
}


export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price
    return {
      productId: product.id,
      priceId: price.id,
      name: product.name,
      description: product.description,
      productImage: product.images[0],
      price: price.custom_unit_amount,
 

    }
  })
 
  return {
    props: {
      products
    },
    revalidate: 60 * 60
  }
}