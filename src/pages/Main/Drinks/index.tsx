import { Head } from "../../../components/Head"
import { SnackTitle } from "../../../components/SnackTitle"
import { Snacks } from "../../../components/Snacks"

export default function Drinks() {

  const data = [
    {
      id: 1,
      snack: 'drink',
      name: 'Coca-Cola Lata',
      description: 'O clássico refresco efervescente.',
      price: 7.0,
      image: 'https://res.cloudinary.com/vuca-solution/image/upload/w_800,c_fill,q_auto,fl_lossy/v1678206520/storage.vucasolution.com.br/lifeboxburger/arqs/produtos/aswtbwxsl8mxbfotb9y6.jpg'
    },
    {
      id: 2,
      snack: 'drink',
      name: 'Guaraná Lata',
      description: 'A refrescância e vitalidade do Brasil em uma garrafa.',
      price: 6.5,
      image: 'https://i.ytimg.com/vi/manvTmwKgvg/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGC4gZSgxMA8=&rs=AOn4CLDAwZU5-0iVqM-b2eTUV2cD0-mKOw'
    },
    {
      id: 3,
      snack: 'drink',
      name: 'Suco de Laranja',
      description: 'Puro sabor cítrico da natureza.',
      price: 5.5,
      image: 'https://i.pinimg.com/474x/39/46/89/3946894a2290cb6a74ebd8b1ff186421.jpg'
    },
  ]

  console.log('data', data)

  return(
    <>
      <Head title="Bebidas"/>
      <SnackTitle>Bebidas</SnackTitle>
      <Snacks snacks={data}></Snacks>
    </>
  )
}
