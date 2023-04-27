import { ReactNode, createContext, useState } from "react"

export interface Product {
  productId: string,
  name: string
  description: string,
  productImage: string,
  formattedPrice: string,
  price: number,
  priceId: string,

}
interface CartContextProps {
  itemsInCart: Product[],
  totalPayable: number,
  addItemToCart: (product: Product) => void
  verifyIfProductAlreadyInCart: (product: Product) => boolean
}
export const CartContext =  createContext<CartContextProps>({} as CartContextProps)

export default function CartContextProvider(props: {children: ReactNode}) {
  const [itemsInCart, setItemsInCart] = useState<Product[]>([])
  const totalPayable = itemsInCart.reduce((total, product) => {
    console.log(product.price)
    return total += product.price
  },0)
  function addItemToCart(product: Product) {
    setItemsInCart(state => [...state, product])
  }
  function verifyIfProductAlreadyInCart(product: Product) {
    return itemsInCart.some(item => item.productId === product.productId)
  }
  return (
    <CartContext.Provider value={{itemsInCart, addItemToCart,verifyIfProductAlreadyInCart, totalPayable}}>
      {props.children}
    </CartContext.Provider>
  )
}