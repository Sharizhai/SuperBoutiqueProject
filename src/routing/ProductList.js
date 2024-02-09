import React, { useState, useEffect } from "react"; 
import { Link } from 'react-router-dom';
import generateProducts from "../components/ProductCard";
import '../css/app.css';

const Product = ({ setPanier, setDetail, user }) => {
    const [produits, setProduits] = useState([]);
    
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const newProducts = await generateProducts(); 
                setProduits(newProducts);
                console.log(newProducts)
            } catch (error) {
                console.error("Erreur lors de la récupération des produits:", error);
            }
        };

        fetchProducts();
    }, []); 

    const ajouterPanier = (produit) => {
        if(user && Object.keys(user).length > 0){
            setPanier(prevPanier => [...prevPanier, produit]);
        }
        else{
            alert("Vous devez être connecter pour faire cette action")
        }
    };

    const afficherDetail = (produit) => {
        setDetail(produit);
    }

    return (
        <>
            <div id='product-list'>
                {produits.map((produit, index) => (
                    <div key={index} className="product-item" style={{ marginLeft: '20px', maxWidth: '250px' }}>
                        <a>
                            <div className="product-desc">
                                <h3>{produit.name}</h3>
                                <p>{produit.price}€</p>
                                <div style={{display:"flex"}}>
                                    <Link to="/detail">
                                        <button className="btn" onClick={() => afficherDetail(produit)}>Detail</button>
                                    </Link>
                                    <button className="btn" onClick={() => ajouterPanier(produit)}>Ajouter au panier</button>
                                </div>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Product;