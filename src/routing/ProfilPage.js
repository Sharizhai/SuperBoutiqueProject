import React, { useState, useEffect } from 'react';
import wretch from 'wretch';
import Button from "../components/Button";
import { Link } from 'react-router-dom';

const Profile = ({ user }) => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const generateProfile = async () => {
            try {
                const response = await wretch('https://api-3wa-ecomm-524fde41edfa.herokuapp.com/api/users/me')
                    .headers({ 'x-auth-token': user.token })
                    .get()
                    .json();
                console.log(response);
                setCurrentUser(response.data);
            } catch (error) {
                console.error('Erreur lors de la récupération des produits:', error);
            }
        };

        generateProfile();
    }, [user.token]);

    return (
        <>
            {
                currentUser && (
                    <>
                        <div style={{ display: "flex", flexDirection: "Column", justifyContent: "center" }} >
                            <h1 style={{ textAlign: "center", color: "#1A5359" }}>Mes informations</h1>

                            <div className="mobile-size" style={{ display: "flex", flexDirection: "raw", justifyContent: "center" }}>
                                <div style={{ marginTop: "30px", display: "flex", flexDirection: "column", alignItems: "center", width: "300px" }}>
                                    <h3 style={{ textAlign: "center", marginBottom: "15px", color: "#1A5359" }}>Informations personnelles</h3>
                                    <p>{currentUser.email}</p>
                                    <p>{currentUser.nom} {currentUser.prenom}</p>
                                </div>

                                <div style={{ marginTop: "30px", display: "flex", flexDirection: "column", alignItems: "center", width: "300px" }}>
                                    <h3 style={{ textAlign: "center", marginBottom: "15px", color: "#1A5359" }}>Adresse de livraison</h3>
                                    {currentUser.address && (
                                        <>
                                            <p>{currentUser.address.numeroRue} {currentUser.address.nomRue}</p>
                                            <p>{currentUser.address.postalCode} {currentUser.address.ville}</p>
                                        </>
                                    )}
                                </div>
                            </div>

                            <div style={{display: "flex", flexDirection: "column", alignItems: "center", marginTop: "70px"}}>
                                <h3 style={{ textAlign: "center", marginBottom: "25px", color: "#1A5359" }}>Une question ? Besoin d'aide ? </h3>
                                
                                <Link to="/contact">
                                <Button label="Contactez-nous"
                            width="150px"
                            height="40px"
                            color="antiquewhite"
                            backgroundColor="#052E33"
                            borderRadius="15px"
                            fontSize="1em" />
                                </Link>
                            </div>

                        </div>
                    </>
                )}
        </>
    );
};

export default Profile;