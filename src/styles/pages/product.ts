import { styled } from '..'

export const ProductDetailsContainer = styled('section', {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '7.2rem',
  marginLeft: '3rem',
  justifyContent: 'center',

  '@media (min-width: 790px)': {
    gridTemplateColumns: '1fr 1fr',
    marginLeft: '0',
  },
  '@media (min-width: 1027px)': {
    padding: 0,
  },
})

export const ImageContainer = styled('div', {
  background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
  borderRadius: 8,
  maxHeight: '70vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  '@media (min-width: 790px)': {
    padding: '8.8rem',
  },

  img: {
    objectFit: 'cover',
  },
})

export const ProductDetails = styled('div', {
  display: 'flex',

  flexDirection: 'column',
  position: 'relative',

  h2: {
    fontSize: '3.2rem',
    fontWeight: 'bold',
    marginBottom: '1.6rem',
  },
  span: {
    color: '$green300',
    fontSize: '3.2rem',
    marginBottom: '8.2rem',
  },
  p: {
    fontSize: '1.8rem',
    lineHeight: '2.9rem',
    color: '$gray300',
  },
})

export const ButtonAddToCart = styled('button', {
  position: 'absolute',
  bottom: 0,
  width: '100%',
  padding: '2.0rem',
  border: 0,
  borderRadius: 8,
  background: '$green500',
  color: '#FFF',
  cursor: 'pointer',

  fontSize: '1.8rem',
  fontWeight: 'bold',

  '&:hover': {
    background: '$green300',
    transition: 'all 0.2s',
  },
})
