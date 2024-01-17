import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";


const Cart = ({ cart }) => {
  const navigate = useNavigate()

  const checkout = () => {
    navigate('/checkout')
  };

  const back = () => {
    navigate('/home')
  };

  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {cart.items.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
      <button onClick={checkout}>Checkout</button>
      <button onClick={back}>Back to shop</button>
    </div>
  );
};

export default Cart;