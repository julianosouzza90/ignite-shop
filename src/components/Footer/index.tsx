import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react'
import { FooterContainer } from './style'

export function Footer() {
  return (
    <FooterContainer>
      <p>
        Projeto desenvolvido como desafio proposto no <b>Ignite React</b> da
        Rocketseat.
      </p>
      <div>
        <a
          href="https://www.linkedin.com/in/juliano-souza-dev/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedinLogo size={32} />
          juliano-souza-dev
        </a>
        <a
          href="https://github.com/julianosouzza90"
          target="_blank"
          rel="noreferrer"
        >
          <GithubLogo size={32} />
          julianosouzza90
        </a>
      </div>
    </FooterContainer>
  )
}
