import { useState } from "react";
import wretch from "wretch";
import Button from "../components/Button";
import { Link } from 'react-router-dom';

const LoginPage = ({ setUser }) => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const connect = async (email, password) => {
    const user = {
      "email": email,
      "password": password
    };

    try {
      const response = await wretch("https://api-3wa-ecomm-524fde41edfa.herokuapp.com/api/login")
        .post(user)
        .json();
      setUser(response)
      console.log(response)
    } catch (error) {
      console.error("Erreur lors de la requête :", error);
    }
  };

  return (
    <>
      <div className="mobile-size" style={{ display: "flex", flexDirection: "raw", justifyContent: "center" }}>
        <div style={{ marginTop: "30px", display: "flex", flexDirection: "column", gap: "15px", alignItems: "center", width: "300px" }}>
          <h3 style={{ textAlign: "center", marginBottom: "15px", color: "#1A5359" }}>Déjà client ?</h3>
          <input type="text" onChange={(e) => setEmail(e.target.value)} placeholder="E-mail" />
          <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Mot de passe" />

          <Link to="/profilPage">
            <Button label="Se connecter"
              onClick={() => connect(email, password)}
              width="120px"
              height="40px"
              color="antiquewhite"
              backgroundColor="#052E33"
              borderRadius="15px"
              fontSize="1em" />
          </Link>
        </div>

        <div style={{ marginTop: "30px", display: "flex", flexDirection: "column", gap: "15px", alignItems: "center", width: "300px" }}>
          <h3 style={{ textAlign: "center", marginBottom: "15px", color: "#1A5359" }}>Nouveau parmi nous ?</h3>

          <Link to={"/register"}>
            <Button label="Créer un compte"
              onClick={() => connect(email, password)}
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
  );
};

export default LoginPage;