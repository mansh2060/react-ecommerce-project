import { Routes,Route } from 'react-router'
import { HomePage } from './pages/HomePage'
import { CheckoutPage } from './pages/CheckoutPage'

import './App.css'
import { OrderPage } from './pages/OrderPage'

import { TrackOrderPage } from './pages/TrackOrderPage'



function App() {
  return (
    <>
    <Routes>
      <Route index element={<HomePage />}></Route>
      <Route path="/checkout" element={<CheckoutPage />}></Route>
      <Route path="/orders" element = {<OrderPage />} />
      <Route path = "/tracks" element= {<TrackOrderPage/>} />
    </Routes>

    
    </>
    
  )
}

export default App;
