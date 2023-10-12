export function currencyFormat(currency: number) {
  return new Intl.NumberFormat('pt-Br', {
    style: 'currency',
    currency: 'BRL'
  }).format(currency)
}
