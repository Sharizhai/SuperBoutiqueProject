import React, { useState, useEffect } from "react"; 
import generateProducts from "../components/ProductCard";
import '../css/app.css';

const Product = () => {
    const [produits, setProduits] = useState([]);
    
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const newProducts = await generateProducts(); 
                setProduits(newProducts);
                console.log(newProducts);
            } catch (error) {
                console.error("Erreur lors de la récupération des produits:", error);
            }
        };

        fetchProducts();
    }, []); 

    return (
        <>
        <div id='product-list'>
            {produits.map((produit, index) => (
                <div key={index} className="product-item" style={{ marginLeft: '20px', maxWidth: '250px' }}>
                    <a>
                        <p>IMAGE ICI</p>
                        <div className="product-desc">
                            <h3>{produit.name}</h3>
                            <p>{produit.price}€</p>
                            <button>Detail</button>
                        </div>
                    </a>
                </div>
            ))}
        </div>
        </>
    );
};

export default Product;