import Button from "../components/Button"

const Register = () => {

    return (
        <>
            <form>
                <h1 style={{ textAlign: "center" }}>Créer votre compte</h1>
                
                <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <div style={{marginTop: "50px"}}>
                        <h3 style={{ textAlign: "center", marginBottom: "40px" }}>Informations d'authentification</h3>
                        <p>Champ pour l'e-mail</p>
                        <p>Champ pour la confirmaiton de l'e-mail(devra être identique)</p>
                        <p>Champ pour le mdp</p>
                    </div>

                    <div style={{marginTop: "50px"}}>
                        <h3 style={{ textAlign: "center", marginBottom: "40px" }}>Informations personnelles</h3>
                        <p>Civilité avec des cases à cocher</p>
                        <p>Nom</p>
                        <p>Prénom</p>
                        <p>age (forcer les chiffres)</p>
                        <p>adresse
                            <p>numéro rue (forcer chiffres)</p>
                            <p>nom rue</p>
                            <p>CP (forcer les chiffres et il doit y en avoir 5)</p>
                            <p>ville</p>
                        </p>
                    </div>
                </div>
            </form>
        </>
    )

}

export default Register

/* {
  nom: String,
  prenom: String,
  age: Number,
  address: {
    ville: String,
    postalCode: String,
    numeroRue: String,
    nomRue: String,
  },
} */