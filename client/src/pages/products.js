import React from "react";
import { useNavigate } from "react-router-dom";
import { products } from "../data/products"
import './products.css'

const Products = ({ setProduct }) => {
    const navigate = useNavigate()

    const buyProduct = async (product) => {
        setProduct(product)
        navigate('/checkout')
    }

    return (
        products.map(prod => (
            <div className="product" key={prod.id}>
            <section>
                <h2>{prod.name}</h2>
                <p>{prod.desc}</p>
                <h3>{prod.currency + " " + prod.price}</h3>
                <button type="button" onClick={() => buyProduct(prod)}>
                    PURCHASE
                </button>
            </section>
            <img src={prod.img} alt={prod.name} />
            </div>
        ))
    )
}

export default Products