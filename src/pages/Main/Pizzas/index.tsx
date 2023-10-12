import { Head } from "../../../components/Head"
import { SnackTitle } from "../../../components/SnackTitle"
import { Snacks } from "../../../components/Snacks"

export default function Pizzas() {

  const data = [
    {
      id: 1,
      snack: 'pizza',
      name: 'Costela com barbecue',
      description: 'A fusão perfeita entre carne suculenta e molho barbecue, em cada fatia. Deliciosamente defumada!',
      price: 60.5,
      image: 'https://blog.novasafra.com.br/wp-content/uploads/2018/05/ContainerXdaXPizza.jpg'
    },
    {
      id: 2,
      snack: 'pizza',
      name: 'Camarão com catupiry',
      description: ' A combinação irresistível de camarões suculentos com o cremoso sabor do catupiry. Uma explosão de sabores marinhos!',
      price: 65.5,
      image: 'https://vivariomarrecife.com.br/wp-content/uploads/2019/07/Atl%C3%A2ntico-Camar%C3%A3o-com-Catupiri-Cortada.jpg'
    },
    {
      id: 3,
      snacl: 'pizza',
      name: 'Calabresa acebolada',
      description: 'O toque picante da calabresa combinado com a doçura das cebolas caramelizadas. Um casamento perfeito de sabores.',
      price: 50.5,
      image: 'https://fyoti.com.br/wp-content/uploads/2020/01/Receita-de-Pizza-de-liquidificador-Diferente-Pode-Adicionar-Calabresa.jpg'
    },
  ]

  console.log('data', data)

  return(
    <>
      <Head title="Pizzas"/>
      <SnackTitle>Pizzas</SnackTitle>
      <Snacks snacks={data}></Snacks>
    </>
  )
}
