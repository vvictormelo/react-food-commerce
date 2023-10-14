import { useContext } from "react"

import { Head } from "../../../components/Head"
import { SnackTitle } from "../../../components/SnackTitle"
import { Snacks } from "../../../components/Snacks"

import { SnackContenxt } from "../../../App"

export default function Burguers() {

  const {burgers} = useContext(SnackContenxt)

  return(
    <>
      <Head title="Hambúrgueres"/>
      <SnackTitle>Hambúrgueres</SnackTitle>
      <Snacks snacks={burgers}></Snacks>
    </>
  )
}
