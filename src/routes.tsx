import { Routes, Route } from 'react-router-dom'

import MainPage from './pages/Main'
import BurguersPage from './pages/Main/Burguers'
import PizzasPage from './pages/Main/Pizzas'
import DrinksPage from './pages/Main/Drinks'
import IceCreamsPage from './pages/Main/IceCreams'
import MyCartPage from './pages/MyCart'

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />}>
        <Route path='/' element={<BurguersPage />}/>
        <Route path='/pizzas' element={<PizzasPage />}/>
        <Route path='/drinks' element={<DrinksPage />}/>
        <Route path='/ice-creams' element={<IceCreamsPage />}/>
      </Route>
      <Route path='cart' element={<MyCartPage />}/>
    </Routes>
  )
}
