import { useState } from 'react'
import './index.css'
import Navbar from './components/navBar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Shop from './pages/Shop'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import OrderSuccess from './pages/OrderSuccess'
import Login from './auth/Login'
import Register from './auth/Register'
import UserOrders from './pages/UserOrders'

function App() {
  

  return (
    <div>
      <Navbar/>
      {/* <Home/> */}
      {/* <Cart/> */}
      {/* <Checkout/> */}
      {/* <OrderSuccess/> */}
      {/* <Login/> */}
      {/* <Register/> */}
      <UserOrders/>
      <Footer/>
      
    </div>
  )
}

export default App
