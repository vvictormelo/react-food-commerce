import { createContext, useState, useEffect } from 'react'

import { BrowserRouter } from 'react-router-dom'

import { AppRoutes } from './routes'

import { Theme } from './styles/Theme'
import { GlobalStyle } from './styles/global'
import { Normalize } from 'styled-normalize'

import { SnackData } from './interfaces/SnackData'

import { getBurgers, getDrinks, getIceCreams, getPizzas } from './services/api'

interface SnackContenxtProps {
  burgers: SnackData[]
  pizzas: SnackData[]
  drinks: SnackData[]
  iceCreams: SnackData[]
}

export const SnackContenxt = createContext({} as SnackContenxtProps)

export default function App() {

  const [burgers, setBurgers] = useState<SnackData[]>([])
  const [pizzas, setPizzas] = useState<SnackData[]>([])
  const [drinks, setDrinks] = useState<SnackData[]>([])
  const [iceCreams, setIceCreams] = useState<SnackData[]>([])

  useEffect(() => {
    ;(async () => {
      try {
        const burgerRequest = await getBurgers()
        const pizzaRequest = await getPizzas()
        const drinkRequest = await getDrinks()
        const iceCreamRequest = await getIceCreams()

        const requests = [burgerRequest, pizzaRequest, drinkRequest, iceCreamRequest]

        const [
          {data : burgerResponse},
          {data : pizzaResponse},
          {data : drinkResponse},
          {data : iceCreamResponse},
        ] = await Promise.all(requests)

        setBurgers(burgerResponse)
        setPizzas(pizzaResponse)
        setDrinks(drinkResponse)
        setIceCreams(iceCreamResponse)
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])

  return (
    <BrowserRouter>
      <Theme>
        <SnackContenxt.Provider value={{ burgers, pizzas, drinks, iceCreams }}>
          <AppRoutes />
          <GlobalStyle />
          <Normalize />
        </SnackContenxt.Provider>
      </Theme>
    </BrowserRouter>
  )
}
