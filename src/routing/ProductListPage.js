import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import generateProducts from "../components/ProductCard";
import '../css/app.css';
import Button from "../components/Button";
import SideBar from "../components/SideBar";

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

    const addToCart = (produit) => {
        if (user && Object.keys(user).length > 0) {
            setPanier(prevPanier => [...prevPanier, produit]);
        }
        else {
            alert("Vous devez être connecter pour faire cette action")
        }
    };

    const afficherDetail = (produit) => {
        setDetail(produit);
    }

    return (
        <>
            <SideBar />
            <div id='product-list'>
                {produits.map((produit, index) => (
                    <div key={index} className="product-item" style={{ marginLeft: '20px', maxWidth: '250px' }}>
                        <a>
                            <div className="product-desc" style={{display: "flex", flexDirection: "column"}}>
                                <h3 style={{ textAlign: "center", marginBottom: "5px", color: "#1A5359" }}>{produit.name}</h3>
                                <p style={{ color: "antiquewhite" }}>{produit.price}€</p>
                                <div style={{ display: "flex", flexDirection: "column", marginTop: "20px"}}>
                                    <Link to="/detail">
                                        <Button label="Plus de détails"
                                            onClick={() => afficherDetail(produit)}
                                            width="120px"
                                            height="40px"
                                            color="antiquewhite"
                                            backgroundColor="#052E33"
                                            borderRadius="15px"
                                            fontSize="1em" />
                                    </Link>
                                    
                                    <div style={{marginTop: "15px"}}>
                                    <Button label="Ajouter au panier"
                                        onClick={() => addToCart(produit)}
                                        width="150px"
                                        height="40px"
                                        color="antiquewhite"
                                        backgroundColor="#052E33"
                                        borderRadius="15px"
                                        fontSize="1em" />
                                    </div>
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