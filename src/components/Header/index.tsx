import { ButtonOpenCart, HeaderContainer } from "./style";
import LogoImg from '../../assets/logo.svg'
import Image from "next/image";
import { Handbag } from "@phosphor-icons/react";
import Link from "next/link";
import { useCart } from "@/hooks/useCart";
export function Header() {
  const { itemsInCart } = useCart()
  return <HeaderContainer>
    <Link href="/">
     <Image src={LogoImg} width={120} height={120}  alt="logo"/>
    </Link>
    <ButtonOpenCart>
      <span>{itemsInCart.length}</span>
      <Handbag size={20}/>
    </ButtonOpenCart>
  </HeaderContainer>
}