import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div id="nav">
      <nav>
        <ul>
        <li>
            <Link to="/home">
                <img src="https://static.vecteezy.com/ti/vecteur-libre/p1/7944186-boutique-logo-design-vecteur-modele-vectoriel.jpg" alt="Logo" style={{maxWidth : "5%", height : "auto"}} />
            </Link>
        </li>
          <li>
            <Link to="/product">Produits</Link>
          </li>
          <li>
            <Link to="/profilPage">Mon compte</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/register">Créer un compte</Link>
          </li>
          <li>
            <Link to="/login">Se connecter</Link>
          </li>
          <li>
            <Link to="/cart">Panier</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar


