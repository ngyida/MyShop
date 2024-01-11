import React, { useState } from "react";
import { PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";

function CheckOutForm(props) {
  // const { product }= props
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const {error} = await stripe.confirmPayment({
      elements,
      confirmParams: { return_url: 'http://localhost:3000/paymentSuccess' },
    });
    if (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}> 
      <PaymentElement/>
      <button disabled={!stripe}> Submit </button>
      {errorMessage && <div>{errorMessage}</div>}
    </form>
  );
}

export default CheckOutForm;
