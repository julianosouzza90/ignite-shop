import { styled } from "..";

export const ProductDetailsContainer = styled('section',{
  display: 'flex',
  gap: '7.2rem',
})

export const ImageContainer = styled('div',{
  background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
  borderRadius: 8,
  maxHeight: '70vh',
  maxWidth: '400px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '8.8rem',
  img: {
    objectFit: 'cover',
  },

})

export const ProductDetails = styled('div',{})

export const ButtonAddToCart = styled('button',{})