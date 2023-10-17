import { Link } from 'react-router-dom'

import { useCart } from '../../hooks/useCart'

import logoImg from '../../assets/logo.svg'

import { Container } from './styles'

import { ReactComponent as CartIcon } from '../../assets/shopping-cart.svg'

export function OrderHeader() {
  const { cart } = useCart()

  return (
    <Container>
      <Link to='/' >
        <img src={logoImg} alt='Food Commerce'/>
      </Link>

      <div>
        <div>
          <h3>Meus Pedidos</h3>
          <span>
            <strong>{`${cart.length}`.padStart(2, '0')} lanche(s)</strong>
          </span>
        </div>
        <CartIcon/>
      </div>
    </Container>
  )
}
