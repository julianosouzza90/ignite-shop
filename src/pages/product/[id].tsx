import { stripe } from "@/lib/stipe"
import { ButtonAddToCart, ImageContainer, ProductDetails, ProductDetailsContainer } from "@/styles/pages/product"
import { currencyBrlFormat } from "@/utils/numberFormat"
import { GetStaticPaths, GetStaticProps } from "next"
import Image from "next/image"
import { useRouter } from "next/router"
import Stripe from "stripe"

interface ProductProps {
  product: {
    productId: string,
    name: string
    description: string,
    productImage: string,
    price: string,
    priceId: string
  }
}
export default function Product({product}: ProductProps) {

  return (
    <ProductDetailsContainer>
      <ImageContainer>
        <Image src={product.productImage} alt="" width={320} height={320}/>
      </ImageContainer>
      <ProductDetails>
          <h2>Camiseta Beyond the Limits</h2>
          <span>R$ 79,90</span>
          <p>Tempus fermentum eget lacus, quis ante. Potenti sit pharetra, ridiculus amet. Bibendum pretium arcu arcu eget viverra at metus donec hendrerit. Rhoncus, nunc, eu at ac. 
            At massa, fermentum amet ornare cras tincidunt nunc tincidunt. Netus lorem nulla nulla mattis integer velit dictum proin nibh.</p>
        <ButtonAddToCart>Colocar na sacola</ButtonAddToCart>
      </ProductDetails>
    </ProductDetailsContainer>
  )
}


export const  getStaticPaths: GetStaticPaths = () => {

  return {
    paths: [],
    fallback: false
  }
}
export const getStaticProps: GetStaticProps<any, {id: string}> = async ({params}) => {
  const productId = params?.id as string
  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price']
  })
 const price = product.default_price as Stripe.Price

  return {
    props: {
     product: {
      productId: product.id,
      name: product.name,
      description: product.description,
      productImage: product.images[0],
      price:currencyBrlFormat(price.unit_amount as number),
      priceId: price.id
     }
    }
  }     
}