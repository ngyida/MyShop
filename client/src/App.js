import React, { useState } from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import CheckOut from "./pages/checkout"
import PaymentSuccessPage from "./pages/paymentSuccessPage"
import Products from "./pages/products"

function App() {
  const [product, setProduct] = useState(null)
  
  const setProductWrapper = (product) => { 
    setProduct(product)
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path ="/" element={<Products setProduct={setProductWrapper} />}/>
          <Route path="/checkout" element={<CheckOut product={product}/>} />
          <Route path="/paymentSuccess" element={<PaymentSuccessPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

