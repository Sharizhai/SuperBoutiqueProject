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

const App = () => {
  return (
    <>
    
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profilPage" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </Router>
    </>
  );
};



export default App;