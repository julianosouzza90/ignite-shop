import { CartContext } from '@/contexts/CartContext'
import { useContext } from 'react'

export function useCart() {
  const cartContext = useContext(CartContext)

  return cartContext
}
