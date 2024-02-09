import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ panier, user }) => {
  return (
    <div id="nav">
      <nav>
        <ul>
          <li>
            <Link to="/home">
              <img src="https://static.vecteezy.com/ti/vecteur-libre/p1/7944186-boutique-logo-design-vecteur-modele-vectoriel.jpg" alt="Logo" style={{ maxWidth: "5%", height: "auto" }} />
            </Link>
          </li>
          <li>
            <Link to="/product">Nos produits</Link>
          </li>
          {Object.keys(user).length > 0 && (
            <li>
              <Link to="/profilPage">Mon compte</Link>
            </li>
          )}
          {!user.token && (
            <li>
              <Link to="/login">Se connecter</Link>
            </li>
          )}
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/cart">
              Panier {panier && panier.length > 0 && <span>({panier.length})</span>}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

