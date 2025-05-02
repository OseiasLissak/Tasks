import React from 'react';
import ReactDOM from 'react-dom/client';
import "./styles/global.css"
import Home from "./pages/home/home.jsx"
import Logo from "./image/logo.png"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <img className='logo' src={Logo} alt='logo aplicação' />
    <Home />
  </>
);

