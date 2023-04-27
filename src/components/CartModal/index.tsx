import { Handbag, X } from "@phosphor-icons/react";
import * as Dialog from "@radix-ui/react-dialog";
import { ButtonOpenCart, CartModalContent, CartProduct, CloseCartModal, ProductDetails, ProductImageContainer, PurchaseInfo } from "./style";
import { useCart } from "@/hooks/useCart";
import Image from "next/image";
import { currencyBrlFormat } from "@/utils/numberFormat";

export function CartModal() {
  const {itemsInCart, totalPayable} = useCart();
  return (
    <Dialog.Root>
      <Dialog.Trigger  asChild>
        <ButtonOpenCart>
           <span>{itemsInCart.length}</span>
          <Handbag size={20}/>
        </ButtonOpenCart>
      </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay />
      <CartModalContent>
        <h2>Sacola de Compras</h2>
          <section>
            {
              !itemsInCart.length && <p>Sua sacola está vazia :/</p>
            }
            {
              itemsInCart.map(product => (
                <CartProduct key={product.productId}>
                    <ProductImageContainer>
                       <Image src={product.productImage} alt="" width={100} height={100}/>
                    </ProductImageContainer>
                    <ProductDetails>
                      <strong>{product.name}</strong>
                      <span>R$ 58,00</span>
                      <button>Remover</button>
                    </ProductDetails>
                    <PurchaseInfo>
                      <div>Quantidade: {itemsInCart.length}</div>
                      <div>Valor Total: {currencyBrlFormat(totalPayable / 100)}</div>
                      <button>Finalizar Compra</button>
                    </PurchaseInfo>
                  </CartProduct>
              ))
            }
            
          </section>
        <Dialog.Description />
        <CloseCartModal >
          <X size={24}/>
        </CloseCartModal>
      </CartModalContent>
    </Dialog.Portal>
  </Dialog.Root>
  )
}