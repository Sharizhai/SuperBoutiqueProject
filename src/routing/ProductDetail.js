const Detail = ({ produit, setPanier }) => {
    const ajouterPanier = () => {
        setPanier(prevPanier => [...prevPanier, produit]);
    };

    return (
        <>
        <div class="product-item">
            <h2>{produit.name}</h2>
            <p>Description : {produit.desc}</p>
            <p>Couleur : {produit.color}</p>
            <p>Marque : {produit.brand}</p>
            <p>Il en reste : {produit.stock}</p>
            <p>Prix : {produit.price}</p>
            <button class="btn" onClick={ajouterPanier}>Ajouter au panier</button>
        </div>
        </>
    );
};

export default Detail;