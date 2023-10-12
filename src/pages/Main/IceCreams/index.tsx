import { Head } from "../../../components/Head"
import { SnackTitle } from "../../../components/SnackTitle"
import { Snacks } from "../../../components/Snacks"

export default function iceCreams() {

  const data = [
    {
      id: 1,
      snack: 'ice-cream',
      name: 'Chocolate Belga',
      description: 'A indulgência doce da Bélgica em cada colherada.',
      price: 13.5,
      image: 'https://blog.gsuplementos.com.br/wp-content/uploads/2020/11/iStock-1173381958.jpg'
    },
    {
      id: 2,
      snack: 'ice-cream',
      name: 'Ninho',
      description: 'Um abraço de sabor cremoso e reconfortante.',
      price: 14.5,
      image: 'https://static.itdg.com.br/images/622-auto/3b88c733ff15b51071283e3c2c54fea4/sorvete-caseiro-de-leite-ninho.jpg'
    },
    {
      id: 3,
      snack: 'ice-cream',
      name: 'Morango',
      description: 'Puro sabor cítrico da natureza.',
      price: 12.5,
      image: 'https://blog.gsuplementos.com.br/wp-content/uploads/2020/11/iStock-1264447431.jpg'
    },
  ]

  console.log('data', data)

  return(
    <>
      <Head title="Sorvetes"/>
      <SnackTitle>Sorvetes</SnackTitle>
      <Snacks snacks={data}></Snacks>
    </>
  )
}
