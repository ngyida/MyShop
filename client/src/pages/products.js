import React from "react";
import { useNavigate } from "react-router-dom";
import { products } from "../data/products"
import './products.css'

const Products = ({ userEmail, addToCart }) => {
    const navigate = useNavigate()

    const buyProduct = async () => {
        navigate('/checkout')
    }

    const addProduct = (product) => {
        addToCart(product)
        alert(`${product.name} added to cart`);
    };

    return (
        <div>
            <h1>Welcome to MyShop, {userEmail}</h1>
            <button onClick={() => buyProduct()}>Cart</button>
            {products.map(prod => (
                <div className="product" key={prod.id}>
                <section>
                    <h2>{prod.name}</h2>
                    <p>{prod.desc}</p>
                    <h3>{prod.currency + " " + prod.price}</h3>
                    <button type="button" onClick={() => addProduct(prod)}>
                        Add to Cart
                    </button>
                </section>
                <img src={prod.img} alt={prod.name} />
                </div>
            ))}
        </div>
    )
}

export default Products
