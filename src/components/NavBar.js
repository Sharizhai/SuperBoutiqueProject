import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Contact from '../routing/ContactPage';
import Home from '../routing/HomePage';
import Product from '../routing/ProductList';
import Cart from '../routing/CartPage';
import Profile from '../routing/ProfilPage';
import Register from '../routing/RegisterPage';

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/home">Accueil</Link>
          </li>
          <li>
            <Link to="/product">Produits</Link>
          </li>
          <li>
            <Link to="/cart">Panier</Link>
          </li>
          <li>
            <Link to="/profilPage">Votre Profil</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profilPage" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register/>} />
      </Routes>
      <Navbar />
    </Router>
  );
};

export default App;