import { useContext } from "react"

import { Head } from "../../../components/Head"
import { SnackTitle } from "../../../components/SnackTitle"
import { Snacks } from "../../../components/Snacks"

import { SnackContenxt } from "../../../App"

export default function Drinks() {

  const { drinks } = useContext(SnackContenxt)

  return(
    <>
      <Head title="Bebidas"/>
      <SnackTitle>Bebidas</SnackTitle>
      <Snacks snacks={drinks}></Snacks>
    </>
  )
}
