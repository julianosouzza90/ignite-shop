import {  HeaderContainer } from "./style";
import LogoImg from '../../assets/logo.svg'
import Image from "next/image";

import Link from "next/link";
import { useCart } from "@/hooks/useCart";
import { CartModal } from "../CartModal";
export function Header() {
  const { itemsInCart } = useCart()
  return <HeaderContainer>
    <Link href="/">
     <Image src={LogoImg} width={120} height={120}  alt="logo"/>
    </Link>
    <CartModal/>
  </HeaderContainer>
}