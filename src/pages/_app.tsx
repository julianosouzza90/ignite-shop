import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import CartContextProvider from '@/contexts/CartContext'
import { GlobalStyle } from '@/styles/global'
import { Container } from '@/styles/pages/app'
import type { AppProps } from 'next/app'
GlobalStyle()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartContextProvider>
      <Container>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Container>
    </CartContextProvider>
  )
}
