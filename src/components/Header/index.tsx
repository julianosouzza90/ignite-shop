import { HeaderContainer } from './style'
import LogoImg from '../../assets/logo.svg'
import Image from 'next/image'

import Link from 'next/link'

import { CartModal } from '../CartModal'
import { useRouter } from 'next/router'
export function Header() {
  const { pathname } = useRouter()

  const cartCanBeDisplayed = pathname !== '/success'
  return (
    <HeaderContainer>
      <Link href="/">
        <Image src={LogoImg} width={120} height={120} alt="logo" />
      </Link>
      {cartCanBeDisplayed && <CartModal />}
    </HeaderContainer>
  )
}
