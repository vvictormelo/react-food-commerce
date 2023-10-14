import { useContext } from "react"

import { Head } from "../../../components/Head"
import { SnackTitle } from "../../../components/SnackTitle"
import { Snacks } from "../../../components/Snacks"

import { SnackContenxt } from "../../../App"

export default function Pizzas() {

  const { pizzas } = useContext(SnackContenxt)

  return(
    <>
      <Head title="Pizzas"/>
      <SnackTitle>Pizzas</SnackTitle>
      <Snacks snacks={pizzas}></Snacks>
    </>
  )
}
