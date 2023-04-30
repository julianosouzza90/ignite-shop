import { styled } from '..'

export const HomeContainer = styled('main', {
  display: 'flex',
  marginLeft: 'auto',
  overflow: 'hidden',
  maxWidth: 'calc(100vw - ((100vw - 1080px) / 2))',
})

export const Product = styled('div', {
  background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
  borderRadius: 8,
  maxHeight: '70vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '8.8rem',
  position: 'relative',

  img: {
    objectFit: 'cover',
  },

  footer: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'space-between',
    bottom: 0,
    maxWidth: '99%',
    marginBottom: '0.3rem',
    width: '100%',
    backgroundColor: '$gray800',
    borderRadius: 6,
    padding: '2.0rem 3.2rem 2.0rem 2.0rem',

    div: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.4rem',
      strong: {
        color: '$gray100',
        fontSize: '$2xl',
      },
      span: {
        color: '$green300',
        fontSize: '2.4rem',
        fontWeight: 'bold',
      },
    },
  },
})

export const DefaultButton = styled('button', {
  width: '5.6rem',
  height: '5.6rem',
  border: 'none',
  borderRadius: 8,
  zIndex: 9,
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  svg: {
    color: '#FFFF',
  },
})
export const AddToCartButton = styled(DefaultButton, {
  background: '$green500',
})
export const RemoveFromCart = styled(DefaultButton, {
  background: 'red',
})
export const SlideControlButton = styled('button', {
  position: 'absolute',
  top: 0,
  bottom: 0,
  width: '50px',
  display: 'flex',
  alignItems: 'center',

  cursor: 'pointer',

  color: '#fff',
  border: 'none',
  padding: '1rem',
  zIndex: '3',

  transition: '0.3s',

  '&:hover svg': {
    fontSize: '3.0rem',
    color: '$green300',
  },
})
export const SlideControlButtonNext = styled(SlideControlButton, {
  right: 0,
  justifyContent: 'flex-end',
  background:
    'linear-gradient(90deg, rgba(18, 18, 20, 0) 0%, rgba(18, 18, 20, 0.75) 100%)',
})
export const SlideControlButtonPrevious = styled(SlideControlButton, {
  left: 0,
  background:
    'linear-gradient(90deg, rgba(18, 18, 20, 0.75) 0%, rgba(18, 18, 20, 0) 100%)',
})
