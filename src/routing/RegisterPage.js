import { Link } from 'react-router-dom';
import Button from "../components/Button";

const Register = () => {

    return (
        <>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <form>
                    <h1 style={{ textAlign: "center", color: "#1A5359" }}>Créez votre compte</h1>

                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <div style={{ marginTop: "30px", display: "flex", flexDirection: "column", gap: "15px" }}>
                            <h3 style={{ textAlign: "center", marginBottom: "15px", color: "#1A5359" }}>Informations d'authentification</h3>
                            <input name="mail" type="text" placeholder="E-mail" />
                            <input name="mail-repeat" type="text" placeholder="Confirmez votre e-mail" />
                            <input name="password" type="password" placeholder="Mot de passe" />
                        </div>

                        <div style={{ marginTop: "50px", display: "flex", flexDirection: "column", gap: "15px" }}>
                            <h3 style={{ textAlign: "center", marginBottom: "15px", color: "#1A5359" }}>Informations personnelles</h3>
                            <input name="last-name" type="text" placeholder="Nom" />
                            <input name="first-name" type="text" placeholder="Prénom" />
                            <input name="age" type="number" placeholder="Age" />
                            <p style={{ marginBottom: "0px", marginTop: "12px", color: "#1A5359" }}>Adresse de livraison :</p>
                            <input name="street-number" type="text" placeholder="Numéro de rue" />
                            <input name="street" type="text" placeholder="Rue" />
                            <input name="zip-code" type="text" placeholder="Code postal" />
                            <input name="city" type="text" placeholder="Ville" />
                        </div>
                <div style={{ marginTop: "40px" }}>

                    <Link to="/login">
                        <Button label="Créer mon compte"
                            width="150px"
                            height="50px"
                            color="antiquewhite"
                            backgroundColor="#052E33"
                            borderRadius="15px"
                            fontSize="1em"
                        />
                    </Link>
                </div>
                    </div>
                </form>

            </div>
        </>
    );
};

export default Register;