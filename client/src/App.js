import React, { useState } from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import CheckOut from "./pages/checkout"
import PaymentSuccessPage from "./pages/paymentSuccessPage"
import Products from "./pages/products"
import Login from "./pages/login";
import Cart from "./pages/cart";

function App() {
  const [cart, setCart] = useState({
    items: [],
    totalPrice: 0,
    currency: "SGD"
  })
  const [userEmail, setUserEmail] = useState(null)
   
  const addToCart = (item) => { 
    setCart(prevCart => ({
      ...prevCart,
      items: [...prevCart.items, item],
      totalPrice: prevCart.totalPrice + item.price,
    }));  
  }

  const setUserEmailWrapper = (email) => { 
    setUserEmail(email)
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login setUserEmail={setUserEmailWrapper}/>}/>
          <Route path ="/home" element={<Products userEmail={userEmail}  addToCart={addToCart}/>}/>
          <Route path="/cart" element={<Cart cart={cart}/>} />
          <Route path="/checkout" element={<CheckOut cart={cart}/>} />
          <Route path="/paymentSuccess" element={<PaymentSuccessPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

