import { Routes,Route } from 'react-router'
import { HomePage } from './pages/HomePage'
import { CheckoutPage } from './pages/CheckoutPage'
import { OrderPage } from './pages/OrderPage'
import { TrackOrderPage } from './pages/TrackOrderPage'
import { useEffect, useState } from 'react'
import  axios  from 'axios'
import './App.css'



function App() {

  const [cart,setCart] = useState([]);

  useEffect(() => {
    axios.get('/api/cart-items?expand=product')
    .then((response) => {
      setCart(response.data);
    })
    .catch((error) => {
      console.error('Cart API failed:', error);
    },[]);
  })

  

  return (
    <>
    <Routes>
      <Route index element={<HomePage cart={cart} />}></Route>
      <Route path="checkout" element={<CheckoutPage  cart = {cart}/>}></Route>
      <Route path="orders" element = {<OrderPage  cart={cart}/>} />
      <Route path = "tracks" element= {<TrackOrderPage cart={cart}/>} />
    </Routes>

    
    </>
    
  )
}

export default App;
