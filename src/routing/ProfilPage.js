import React, { useState, useEffect } from 'react';
import wretch from 'wretch';

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
      <h1>Profile</h1>
      {currentUser && (
        <>
          <p>{currentUser.data.nom}</p>
          <p>{currentUser.data.prenom}</p>
          <p>{currentUser.data.email}</p>
          {currentUser.data.address && (
            <>
              <p>{currentUser.data.address.numeroRue}</p>
              <p>{currentUser.data.address.nomRue}</p>
              <p>{currentUser.data.address.postalCode}</p>
              <p>{currentUser.data.address.ville}</p>
            </>
          )}
        </>
      )}
    </>
  );
};

export default Profile;