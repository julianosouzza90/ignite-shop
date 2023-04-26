import { ReactNode, createContext, useState } from "react"

interface Product {
  productId: string,
  name: string
  description: string,
  productImage: string,
  price: string,
  priceId: string,

}
interface CartContextProps {
  itemsInCart: Product[]
  addItemToCart: (product: Product) => void
}
export const CartContext =  createContext<CartContextProps>({} as CartContextProps)

export default function CartContextProvider(props: {children: ReactNode}) {
  const [itemsInCart, setItemsInCart] = useState<Product[]>([])

  function addItemToCart(product: Product) {
    setItemsInCart([...itemsInCart, product])
    console.log('ok')
    console.log(itemsInCart)
  }

  return (
    <CartContext.Provider value={{itemsInCart, addItemToCart}}>
      {props.children}
    </CartContext.Provider>
  )
}