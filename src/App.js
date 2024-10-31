import React from 'react'
import Header from './components/Header/Header'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Screen/Home'
import Product from './components/Screen/Product'
import ContactUs from './components/Screen/ContactUs'
import AboutUs from './components/Screen/AboutUs'
import Cart from './components/Screen/Cart/Cart'
import ProductDetails from './components/Screen/ProductDetails/ProductDetails'
import { CartProvider } from './CartContext'; // Import the CartProvider
// import Shoppingcart from './components/Shoppingcart/Shoppingcart'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <CartProvider>
      <Header />
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='product' element={<Product />} />
        <Route path='contact' element={<ContactUs />} />
        <Route path='about' element={<AboutUs />} />
        <Route path='cart' element={<Cart />} />
        {/* <Route path='shoppingcart' element={<Shoppingcart />} /> */}
        <Route path='/product/:id' element={<ProductDetails />} />
      </Routes>
      <Footer/>
    </CartProvider>
  )
}

export default App
