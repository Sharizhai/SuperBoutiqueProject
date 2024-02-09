import Button from "../components/Button";

const Detail = ({ produit, setPanier }) => {
    const addToCart = () => {
        setPanier(prevPanier => [...prevPanier, produit]);
    };

    return (
        <>
            <div style={{display: "flex", justifyContent: "center", marginTop: "100px"}}>

            <div class="product-item">
                <h2 style={{ textAlign: "center", marginBottom: "15px", color: "#1A5359" }}>
                    {produit.name}</h2>
                <p>Description : {produit.desc}</p>
                <p>Couleur : {produit.color}</p>
                <p>Marque : {produit.brand}</p>
                <p>Il en reste : {produit.stock}</p>
                <p>Prix : {produit.price}</p>
                <Button label="Ajouter au panier"
                    onClick={addToCart}
                    width="150px"
                    height="40px"
                    color="antiquewhite"
                    backgroundColor="#052E33"
                    borderRadius="15px"
                    fontSize="1em" />
            </div>
            </div>
        </>
    );
};

export default Detail;