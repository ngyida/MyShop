import React, { useEffect, useState } from 'react'
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../components/checkoutForm'

const Checkout = ({ cart }) => {
    const [clientSecret, setClientSecret] = useState(null)
    const [stripePromise, setStripPromise] = useState(null)

    useEffect(() => {
        const getClientSecret = async () => {        
            const clientSecret = (await fetch(
              '/myShop/stripe/create-payment-intent',
              {
                method: "POST",
                headers: { "Content-Type": "application/json", },
                body: JSON.stringify({currency: cart.currency, amount: cart.totalPrice*100, options: null})
              })
              .then((r) => r.json()))
              .client_secret
            setClientSecret(clientSecret)
        }

        const getStripe = async () => {
            const { publishableKey } = await fetch('/myShop/stripe/config').then((r) => r.json())
            const stripePromise = loadStripe(publishableKey)
            setStripPromise(stripePromise)
        }

        if (cart.items.length != 0) { 
            getClientSecret() 
            getStripe()
        }
    }, [cart])

    return (
        clientSecret == null || stripePromise == null ? "Loading checkout page..." :
        <Elements stripe={stripePromise} options={{ clientSecret: clientSecret }}>
            <CheckoutForm/>
        </Elements>
    )
}

export default Checkout