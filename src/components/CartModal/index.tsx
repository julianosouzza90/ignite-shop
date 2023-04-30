import { X, Handbag } from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'
import axios from 'axios'
import {
  ButtonOpenCartModal,
  CartModalContent,
  CartProduct,
  CloseCartModal,
  ProductDetails,
  ProductImageContainer,
  PurchaseInfo,
} from './style'
import { useCart } from '@/hooks/useCart'
import Image from 'next/image'
import { currencyBrlFormat } from '@/utils/numberFormat'

export function CartModal() {
  const { itemsInCart, totalPayable, removeProductFromCart } = useCart()
  async function handleCheckout() {
    const pricesIdAndQuantities = itemsInCart.map((product) => ({
      price: product.priceId,
      quantity: 1,
    }))
    try {
      const response = await axios.post('/api/checkoutsession', {
        pricesIdAndQuantities,
      })
      const { checkoutUrl } = response.data
      window.location.href = checkoutUrl
    } catch {}
  }
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <ButtonOpenCartModal>
          {itemsInCart.length > 0 && <span>{itemsInCart.length}</span>}
          <Handbag size={20} />
        </ButtonOpenCartModal>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay />
        <CartModalContent>
          <h2>Sacola de Compras</h2>
          <section>
            {!itemsInCart.length && <p>Sua sacola está vazia :/</p>}
            {itemsInCart.map((product) => (
              <CartProduct key={product.productId}>
                <ProductImageContainer>
                  <Image
                    src={product.productImage}
                    alt=""
                    width={100}
                    height={100}
                  />
                </ProductImageContainer>
                <ProductDetails>
                  <strong>{product.name}</strong>
                  <span>{currencyBrlFormat(product.price / 100)}</span>
                  <button onClick={() => removeProductFromCart(product)}>
                    Remover
                  </button>
                </ProductDetails>
              </CartProduct>
            ))}
            {itemsInCart.length > 0 && (
              <PurchaseInfo>
                <div>
                  <span>Quantidade:</span>
                  <p>
                    {itemsInCart.length}{' '}
                    {itemsInCart.length > 1 ? 'itens' : 'item'}
                  </p>
                </div>
                <div>
                  <span>Valor Total:</span>
                  <p>{currencyBrlFormat(totalPayable / 100)}</p>
                </div>
                <button onClick={handleCheckout}>Finalizar Compra</button>
              </PurchaseInfo>
            )}
          </section>
          <CloseCartModal>
            <X size={24} />
          </CloseCartModal>
        </CartModalContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
