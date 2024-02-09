import { useState } from "react";
import  wretch  from "wretch";

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
      <label>
        Email:
        <input type="text" onChange={(e) => setEmail(e.target.value)}/>
      </label>
      <label>
        Mot de passe:
        <input type="password" onChange={(e) => setPassword(e.target.value)}/>
      </label>
      <button onClick={() => connect(email, password)}>Se connecter</button>
    </>
  );
};

export default LoginPage;