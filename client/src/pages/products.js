import React from "react";
import { useNavigate } from "react-router-dom";
import { products } from "../data/products"
import { ShoppingCartOutlined } from "@ant-design/icons"
import './products.css'

const Products = ({ userEmail, addToCart }) => {
    const navigate = useNavigate()

    const buyProduct = async () => {
        navigate('/cart')
    }

    const addProduct = (product) => {
        addToCart(product)
        alert(`${product.name} added to cart`);
    };

    return (
        <>
            <header className="App-header">
                <h1>Welcome to MyShop, {userEmail}</h1>
                <button className="cart-button" onClick={() => buyProduct()}>
                    <ShoppingCartOutlined/>
                </button>
            </header>
            
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
        </>
    )
}

export default Products
