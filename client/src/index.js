import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


document.addEventListener('DOMContentLoaded', async () => {
  

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
  );
});