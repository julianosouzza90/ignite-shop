import * as Dialog from '@radix-ui/react-dialog'
import { styled } from '@/styles'
export const CartModalContent = styled(Dialog.Content, {
  position: 'fixed',
  minWidth: '40.0rem',
  background: '$gray800',
  top: 0,
  bottom: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  padding: '4.8rem',

  zIndex: 9,
  overflow: 'auto',

  '&::-webkit-scrollbar': {
    width: '5px',
    height: '5px',
  },

  '&::-webkit-scrollbar-thumb': {
    backgroundColor: 'grey',
    borderRadius: '5px',
  },

  h2: {
    marginBottom: '3.2rem',
    fontSize: '2.0rem',
    fontWeight: 'bold',
    color: '$gray100',
  },

  '> section': {
    display: 'flex',
    flexDirection: 'column',
    gap: '2.4rem',
    minHeight: '80vh',

    position: 'relative',
  },
})
export const CloseCartModal = styled(Dialog.Close, {
  position: 'fixed',
  right: 0,
  top: 0,
  marginRight: '1rem',
  marginTop: '1rem',
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',

  svg: {
    color: '$gray100',
  },
})

export const CartProduct = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '2.0rem',

  '&:last-of-type': {
    marginBottom: '2.0rem',
  },
})
export const ProductDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.0rem',
  strong: {
    fontSize: '1.8rem',
    color: '$gray300',
    marginBottom: '0.2rem',
  },
  span: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    color: '$gray300',
    marginBottom: '0.8rem',
  },
  button: {
    background: 'transparent',
    border: 'none',
    color: '$green500',
    fontWeight: 'bold',
    fontSize: '1.8rem',
    textAlign: 'left',
    cursor: 'pointer',
  },
})
export const ProductImageContainer = styled('div', {
  background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
  borderRadius: 8,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  img: {
    objectFit: 'cover',
  },
})

export const PurchaseInfo = styled('footer', {
  display: 'flex',
  gap: '0.3rem',
  flexDirection: 'column',
  width: '90%',
  paddingBottom: '1rem',
  div: {
    display: 'flex',
    justifyContent: 'space-between',

    p: {
      color: '$gray100',
      fontSize: '1.8rem',
    },
    span: {
      fontSize: '1.8rem',
    },

    '&:nth-child(2)': {
      marginTop: '2rem',
      p: {
        fontWeight: 'bold',
        fontSize: '2.4rem',
      },
    },
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '5.7rem',
    padding: '2.0rem',
    borderRadius: '8px',
    background: '$green300',

    border: 'none',

    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '1.8rem',
    color: '#fff',
  },
})

export const ButtonOpenCartModal = styled('button', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  position: 'relative',

  background: '$gray800',
  height: '4.8rem',

  cursor: 'pointer',

  '&:hover': {
    filter: 'brightness(.9)',
    transition: '0.2s ease',
  },

  border: 0,
  borderRadius: 6,
  padding: '2rem',
  svg: {
    color: 'white',
  },
  span: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    background: '$green300',
    color: '#FFF',
    fontWeight: 'bold',

    width: '2.4rem',
    height: '2.4rem',
    borderRadius: '100%',
    top: 0,
    right: 0,
    marginTop: '-1.5rem',
    marginRight: '-1rem',
  },
})
