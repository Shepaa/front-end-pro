import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { NotFound } from './features/NotFound/NotFound'
import { AboutUs } from './features/About/AboutUs'
import { WaitersApp } from './features/waiters'
import { Layout } from './componets/Laoyut'
import { TablesApp } from './features/tables'
import { DishesApp } from './features/dishes'
import { OrdersApp } from './features/orders'
import { BasePage } from './features/BasePage/BasePage'

export function App () {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BasePage/>}/>
        <Route element={<Layout/>}>
          <Route path="/orders/*" element={<OrdersApp/>}/>
          <Route path="/waiters/*" element={<WaitersApp/>}/>
          <Route path="/tables/*" element={<TablesApp/>}/>
          <Route path="/dishes/*" element={<DishesApp/>}/>
          <Route path="/about" element={<AboutUs/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Route>
      </Routes>
    </BrowserRouter>

  )
}