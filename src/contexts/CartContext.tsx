import { ReactNode, createContext, useState } from 'react'

export interface IProduct {
  productId: string
  name: string
  description: string
  productImage: string
  formattedPrice: string
  price: number
  priceId: string
}
interface CartContextProps {
  itemsInCart: IProduct[]
  totalPayable: number
  addItemToCart: (product: IProduct) => void
  verifyIfProductAlreadyInCart: (product: IProduct) => boolean
  removeProductFromCart: (product: IProduct) => void
}
export const CartContext = createContext<CartContextProps>(
  {} as CartContextProps,
)

export default function CartContextProvider(props: { children: ReactNode }) {
  const [itemsInCart, setItemsInCart] = useState<IProduct[]>([])

  const totalPayable = itemsInCart.reduce((total, product) => {
    return (total += product.price)
  }, 0)

  function addItemToCart(product: IProduct) {
    setItemsInCart((state) => [...state, product])
  }
  function removeProductFromCart(product: IProduct) {
    setItemsInCart((oldCart) =>
      oldCart.filter((item) => item.productId !== product.productId),
    )
  }
  function verifyIfProductAlreadyInCart(product: IProduct) {
    return itemsInCart.some((item) => item.productId === product.productId)
  }
  return (
    <CartContext.Provider
      value={{
        itemsInCart,
        addItemToCart,
        verifyIfProductAlreadyInCart,
        totalPayable,
        removeProductFromCart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  )
}
