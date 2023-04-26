import { styled } from "@/styles";

export const HeaderContainer = styled('header', {
    width: '100%',
    maxWidth: 1180,
    
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    
})

export const ButtonOpenCart = styled('button',{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    position: 'relative',
    
    background: '$gray800',
    height: '4.8rem',

    cursor: 'pointer',


    '&:hover': {
        filter: 'brightness(.9)',
        transition: '0.2s ease'
    },

    border: 0,
    borderRadius: 6,
    padding: '2rem',
    svg:{
        color: 'white'
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
    }
});