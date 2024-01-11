import React from "react";
import { useNavigate } from "react-router-dom";

function PaymentSuccessPage() {
  const navigate = useNavigate()
  
  return (
    <>
      "Payment Successful"
      <button onClick={() => navigate('../')}> Back to homepage </button>
    </>
    
  );
}

export default PaymentSuccessPage;
