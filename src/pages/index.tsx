import { AddToCartButton, HomeContainer, Product } from "@/styles/pages/home";
import Image from "next/image";
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { stripe } from "@/lib/stipe";
import { GetStaticProps } from "next";
import Stripe from "stripe";
import Link from "next/link";
import {Handbag} from "@phosphor-icons/react";
interface HomeProps {
  products: {
    id: string
    name: string
    description: string
    productImage: string
    price: number
  }[]
}
export default function Home({products}: HomeProps) {
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
          <Link href={`product/${product.id}`} key={product.id} >
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
            <AddToCartButton>
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
      id: product.id,
      name: product.name,
      description: product.description,
      productImage: product.images[0],
      price: price.custom_unit_amount
    }
  })
 
  return {
    props: {
      products
    },
    revalidate: 60 * 60
  }
}