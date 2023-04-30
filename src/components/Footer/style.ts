import { styled } from '@/styles'

export const FooterContainer = styled('footer', {
  marginTop: '3rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  width: '100%',

  p: {
    lineHeight: '2.9rem',
    marginBottom: '1rem',
  },
  div: {
    display: 'flex',
    alignItems: 'center',
    gap: '2rem',

    a: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '0.4rem',
      color: '#FFF',
      textDecoration: 'none',
      transition: '0.2s',
      '&:hover': {
        filter: 'brightness(.9)',
      },
    },
    svg: {
      color: '#FFF',
    },
  },
})
