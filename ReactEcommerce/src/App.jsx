import { Routes,Route } from 'react-router'
import { HomePage } from './pages/HomePage'
import { CheckoutPage } from './pages/CheckoutPage'
import { OrderPage } from './pages/OrderPage'
import { TrackOrderPage } from './pages/TrackOrderPage'
import './App.css'



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
