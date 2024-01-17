import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setUserEmail }) => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserEmail(email)
    navigate('/home');
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;