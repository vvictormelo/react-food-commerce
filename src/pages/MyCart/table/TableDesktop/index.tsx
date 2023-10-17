import { useCart } from "../../../../hooks/useCart"

import { currencyFormat } from "../../../../helpers/helpers/currencyformat"

import { Container } from "./styles"

export function TableDesktop() {
  const { cart } = useCart()

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Lanche</th>
            <th>Qtd</th>
            <th>Subtotal</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            cart.map((item) => (
              <tr key={`${item.snack}-${item.id}`}>
                <td>
                  <img src={item.image} alt={item.name}/>
                </td>
                <td>
                  <h4>{item.name}</h4>
                  <span>{currencyFormat(item.price)}</span>
                </td>
                <td>{item.quantity}</td>
                <td>
                  <h5>{currencyFormat(item.subTotal)}</h5>
                </td>
                <td>
                  Deletar
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </Container>
  )
}
