import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import '../src/css/app.css';
import Contact from './routing/ContactPage';
import Home from './routing/HomePage';
import Product from './routing/ProductList';
import Cart from './routing/CartPage';
import Profile from './routing/ProfilPage';
import Register from './routing/RegisterPage';
import Detail from './routing/ProductDetail'; 
import LoginPage from './routing/LoginPage';

const App = () => {
  const [panier, setPanier] = useState([]);
  const [detail, setDetail] = useState([]);
  const [user, setUser] = useState([]);

  return (
    <>
      <Router>
        <Navbar panier={panier} user={user}/> 
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/product" element={<Product setPanier={setPanier} setDetail={setDetail} />} /> 
          <Route path="/cart" element={<Cart panier={panier} />} />
          <Route path="/profilPage" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<LoginPage setUser={setUser}/>} />
          <Route path="/detail" element={<Detail produit={detail} setPanier={setPanier}/>} />
        </Routes>
      </Router>
    </>
  );
};

export default App;