import { createContext, ReactNode, useState } from 'react'

import { SnackData } from '../interfaces/SnackData'

interface Snack extends SnackData {
  quantity: number
  subTotal: number
}

interface RemoveSnackFromCart {
  id: number
  snack: string
}

interface UpdateCartProps {
  id: number
  snack: string
  newQuantity: number
}

interface CartContextProps {
  cart: Snack[]
  addSnackIntoCart: (snack: SnackData) => void
  // removeSnackFromCart: ({ id, snack }: RemoveSnackFromCart) => void
  // updateCart: ({ id, snack, newQuantity }: UpdateCartProps) => void
}

interface CartProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextProps)

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<Snack[]>([])

  function addSnackIntoCart(snack: SnackData): void {
    // buscar
    const snackExistentInCart = cart.find((item) => item.snack === snack.snack &&
      item.id === snack.id, )

    // atualizar
    if (snackExistentInCart) {
      const newCart = cart.map((item) => {
        if ((item.id) === snack.id) {
          const quantity = item.quantity + 1
          const subTotal = item.price * quantity

          return { ...item, quantity, subTotal}
        }

        return item
      })

      console.log('new Cart atualização', newCart)
      setCart(newCart)

      return
    }

    // adicionar

    const newSnack = { ...snack, quantity: 1, subTotal: snack.price }
    const newCart = [...cart, newSnack] // push de um array

    console.log(`newCart`, newCart)

    setCart(newCart)
  }

  return <CartContext.Provider value={{ cart, addSnackIntoCart }}>{children}</CartContext.Provider>
}
