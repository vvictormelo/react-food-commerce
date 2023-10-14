import { useState, useEffect} from "react"

import { Head } from "../../../components/Head"
import { SnackTitle } from "../../../components/SnackTitle"
import { Snacks } from "../../../components/Snacks"

import { getDrinks } from "../../../services/api"

export default function Drinks() {

  const [drinks, setDrinks] = useState([])

  useEffect(() => {
    ;(async () => {
      const drinkRequest = await getDrinks()

      setDrinks(drinkRequest.data)
    })()
  },[])

  return(
    <>
      <Head title="Bebidas"/>
      <SnackTitle>Bebidas</SnackTitle>
      <Snacks snacks={drinks}></Snacks>
    </>
  )
}
