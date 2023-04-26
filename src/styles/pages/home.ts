import { relative } from "path";
import { styled } from "..";

export const HomeContainer = styled('main',{
  display: 'flex',
  marginLeft: 'auto',
  overflow: 'hidden',
  maxWidth: 'calc(100vw - ((100vw - 1080px) / 2))',
})


export const Product = styled('div',{
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
      fontSize: '$2xl'
    },
    span: {
      color: '$green300',
      fontSize: '2.4rem',
      fontWeight: 'bold'
    }
   }
  
  },

})

export const AddToCartButton = styled('button',{
  background: '$green500',
  width: '5.6rem',
  height: '5.6rem',
  border: 'none',
  borderRadius: 8,
  zIndex: 9,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  svg: {
    color: '#FFFF'
  }
})