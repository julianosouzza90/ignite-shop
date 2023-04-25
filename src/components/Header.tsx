import { HeaderContainer } from "./style";
import LogoImg from '../assets/logo.svg'
import Image from "next/image";
export function Header() {
  return <HeaderContainer>
    <Image src={LogoImg} width={120} height={120}  alt="logo"/>
  </HeaderContainer>
}