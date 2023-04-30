import { globalCss } from '.'

export const GlobalStyle = globalCss({
  ':root': {
    fontSize: '62.5%',
  },
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  body: {
    '-webkit-font-smoothing': 'antialiased',
    backgroundColor: '$gray900',
    color: '$gray100',
    fontSize: '1.6rem',
  },

  'body, input, textarea, button': {
    fontFamily: 'Roboto',
    fontWeight: 400,
  },
})
