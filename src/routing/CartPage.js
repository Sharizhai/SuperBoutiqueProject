import React from 'react';

const Cart = ({ panier }) => {
    const countedProducts = panier.reduce((acc, produit) => {
        acc[produit.name] = (acc[produit.name] || 0) + 1;
        return acc;
    }, {});

    return (
        <>
            <h1>Produits dans le panier :</h1>
            <ul>
                {Object.keys(countedProducts).map((productName, index) => {
                    const produit = panier.find(item => item.name === productName);
                    const occurrences = countedProducts[productName];
                    const totalPrice = produit.price * occurrences;
                    return (
                        <li key={index}>
                            <h3>{`${productName} ${occurrences > 1 ? `x${occurrences}` : ''}`}</h3>
                            <p>Prix total: {totalPrice}€</p>
                            <p>Description: {produit.desc}</p>
                        </li>
                    );
                })}
            </ul>
        </>
    );
};

export default Cart;