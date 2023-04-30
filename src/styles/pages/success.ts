import { styled } from '..'

export const SuccessContainer = styled('section', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  minHeight: '70vh',
})
export const ImagesContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  height: '18.0rem',
  width: '100%',

  img: {
    background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
    borderRadius: '9999999px',
    padding: '2rem',
    margin: '-35px',
    zIndex: 1,
    height: '18.8rem',
    width: '18.8rem',
  },
})
export const SuccessMessage = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '2.4rem',

  span: {
    fontWeight: 'bold',
    fontSize: '3.2rem',
    marginBottom: '2.4rem',
  },
  p: {
    fontSize: '2.4rem',
    maxWidth: '590px',
    textAlign: 'center',
    lineHeight: '2.9rem',
  },
  a: {
    color: '$green500',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '2.0rem',
    marginTop: 'calc(6.4rem - 2.4rem)',
  },
})
