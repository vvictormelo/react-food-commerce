import { Head } from '../../components/Head'
import { OrderHeader } from '../../components/OrderHeader'

import { Container } from './styles'

import { Table } from './table'

export default function Main() {
  return (
    <Container>
      <Head title='Carrinho'/>
      <OrderHeader/>
      <Table/>
    </Container>
  )
}
