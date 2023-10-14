import { useState, useEffect } from "react"

import { Head } from "../../../components/Head"
import { SnackTitle } from "../../../components/SnackTitle"
import { Snacks } from "../../../components/Snacks"
import { getIceCreams } from "../../../services/api"

export default function iceCreams() {

  const [iceCream, setIceCream] = useState([])

  useEffect(() => {
    ;(async () => {
      const iceCreamRequest = await getIceCreams()

      setIceCream(iceCreamRequest.data)
    })()
  },[])

  return(
    <>
      <Head title="Sorvetes"/>
      <SnackTitle>Sorvetes</SnackTitle>
      <Snacks snacks={iceCream}></Snacks>
    </>
  )
}
