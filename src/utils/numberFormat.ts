export const currencyBrlFormat = (value: number) =>  new Intl.NumberFormat('pt-br',{
  style: 'currency',
  currency: 'BRL'
}).format(value)