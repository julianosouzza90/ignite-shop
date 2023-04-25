
import { Header } from '@/components/Header';
import { GlobalStyle } from '@/styles/global'
import { Container } from '@/styles/pages/app';
import type { AppProps } from 'next/app'
GlobalStyle();

export default function App({ Component, pageProps }: AppProps) {
  <Header/>
  return(
    <Container>
      <Header/>
    <Component {...pageProps} />
  </Container>
  )
}
