import { currencyFormat } from "../../../helpers/helpers/currencyformat"

import { useCart } from "../../../hooks/useCart"

import { Container } from "../styles"

export function ConfirmOrder() {
  const { cart } = useCart()

  const totalAmount = cart.reduce((acc, item) => (acc += item.subTotal), 0)

  return(
    <Container>
      <button type="button">Finalizar Pedido</button>
      <span>
        Total <strong>{currencyFormat(totalAmount)}</strong>
      </span>
    </Container>
  )
}
