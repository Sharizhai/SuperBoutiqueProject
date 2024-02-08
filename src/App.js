import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/NavBar'
import '../src/css/app.css';
import Contact from './routing/ContactPage';
import Home from './routing/HomePage';
import Product from './routing/ProductList';
import Cart from './routing/CartPage';
import Profile from './routing/ProfilPage';
import Register from './routing/RegisterPage';
import { useState } from 'react';

const App = () => {

  const [panier, setPanier] = useState([])

  return (
    <>

   
    
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/product" element={<Product setPanier={setPanier}/>} />
        <Route path="/cart" element={<Cart panier={panier} />} />
        <Route path="/profilPage" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </Router>
    </>
  );
};



export default App;