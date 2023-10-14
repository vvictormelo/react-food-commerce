import { useContext } from "react"

import { Head } from "../../../components/Head"
import { SnackTitle } from "../../../components/SnackTitle"
import { Snacks } from "../../../components/Snacks"

import { SnackContenxt } from "../../../App"

export default function iceCreams() {

  const { iceCreams } = useContext(SnackContenxt)

  return(
    <>
      <Head title="Sorvetes"/>
      <SnackTitle>Sorvetes</SnackTitle>
      <Snacks snacks={iceCreams}></Snacks>
    </>
  )
}
