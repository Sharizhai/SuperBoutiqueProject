import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const Cart = ({ panier }) => {
    const countedProducts = panier.reduce((acc, produit) => {
        acc[produit.name] = (acc[produit.name] || 0) + 1;
        return acc;
    }, {});

    const totalPrice = panier.reduce((total, produit) => {
        return total + produit.price;
    }, 0);

    return (
        <>
            <h1>Produits dans le panier :</h1>
            <h2>Total : {totalPrice}€</h2>
            <PayPalScriptProvider options={{ clientId: "test" }}>
                <PayPalButtons
                    style={{ layout: "horizontal" }}
                    createOrder={(data, actions) => {
                        return actions.order.create({
                            purchase_units: [
                                {
                                    amount: {
                                        value: totalPrice.toString()
                                    },
                                },
                            ],
                        });
                    }}
                />
            </PayPalScriptProvider>
            <div>
                {Object.keys(countedProducts).map((productName, index) => {
                    const produit = panier.find(item => item.name === productName);
                    const occurrences = countedProducts[productName];
                    const totalPriceProduct = produit.price * occurrences;
                    return (
                        <div className="product-item" key={index}>
                            <h3>{`${productName} ${occurrences > 1 ? `x${occurrences}` : ''}`}</h3>
                            <p>Prix total: {totalPriceProduct}€</p>
                            <p>Description: {produit.desc}</p>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Cart;