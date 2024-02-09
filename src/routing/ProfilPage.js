import React, { useState, useEffect } from 'react';
import wretch from 'wretch';

const Profile = ({ user, setUser }) => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const generateProfile = async () => {
            try {
                const response = await wretch('https://api-3wa-ecomm-524fde41edfa.herokuapp.com/api/users/me')
                    .headers({ 'x-auth-token': user.token })
                    .get()
                    .json();
                console.log(response);
                setCurrentUser(response);
            } catch (error) {
                console.error('Erreur lors de la récupération des produits:', error);
                setCurrentUser(null);
            }
        };

        generateProfile();
    }, [user.token]);

    return (
        <>

            {
                currentUser && (
                    <>
                        <div className="mobile-size" style={{ display: "flex", flexDirection: "column", justifyContent: "center" }} >
                            <h1 style={{ textAlign: "center", color: "#1A5359" }}>Mes informations</h1>

                            <div style={{ display: "flex", flexDirection: "raw", alignItems: "center" }}>
                                <div style={{ marginTop: "30px", display: "flex", flexDirection: "column", gap: "15px" }}>
                                    <h3 style={{ textAlign: "center", marginBottom: "15px", color: "#1A5359" }}>Informations personnelles</h3>
                                    <p>{currentUser.data.email}</p>
                                    <p>{currentUser.data.nom}</p>
                                    <p>{currentUser.data.prenom}</p>
                                </div>

                                <div style={{ marginTop: "50px", display: "flex", flexDirection: "column", gap: "15px" }}>
                                    <h3 style={{ textAlign: "center", marginBottom: "15px", color: "#1A5359" }}>Adresse de livraison</h3>
                                    {currentUser.data.address && (
                                        <>
                                            <p>{currentUser.data.address.numeroRue}</p>
                                            <p>{currentUser.data.address.nomRue}</p>
                                            <p>{currentUser.data.address.postalCode}</p>
                                            <p>{currentUser.data.address.ville}</p>
                                            <button className='btn' onClick={() => setUser({})}></button>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </>
                )}
              
        </>
    );
};


export default Profile;