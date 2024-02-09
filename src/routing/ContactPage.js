import Button from "../components/Button";

const Contact = () => {
    
    return (
        <>
            <div style={{ display: "flex", flexDirection: "Column", justifyContent: "center" }}>
                <h1 style={{ textAlign: "center", color: "#1A5359" }}>Nous contacter</h1>

                <div className="mobile-size" style={{ display: "flex", flexDirection: "raw", justifyContent: "center" }}>
                    <div style={{ marginTop: "30px", display: "flex", flexDirection: "column", gap: "15px", alignItems: "center", width: "300px" }}>
                        <h3 style={{ textAlign: "center", marginBottom: "15px", color: "#1A5359" }}>Par mail :</h3>

                        <input type="text" placeholder="Votre e-mail" style={{ width: "250px" }} />
                        <textarea id="story" name="" rows="17" cols="33" placeholder="Votre message" />

                        <Button label="Envoyer"
                            width="100px"
                            height="40px"
                            color="antiquewhite"
                            backgroundColor="#052E33"
                            borderRadius="15px"
                            fontSize="1em" />
                    </div>

                    <div style={{ marginTop: "30px", display: "flex", flexDirection: "column", gap: "15px", alignItems: "center", width: "300px" }}>
                        <h3 style={{ textAlign: "center", marginBottom: "15px", color: "#1A5359" }}>Sur nos réseaux :</h3>

                        <div style={{ display: "flex", flexDirection: "raw", justifyContent: "center" }}>
                            <p style={{ textAlign: "left", color: "#1A5359" }}>Facebook : </p>
                        </div>
                        <div style={{ display: "flex", flexDirection: "raw", justifyContent: "center" }}>
                        <p style={{ textAlign: "left", color: "#1A5359" }}>X (Twitter) : </p>
                        </div>
                        <div style={{ display: "flex", flexDirection: "raw", justifyContent: "center" }}>
                            <p style={{ textAlign: "left", color: "#1A5359" }}>Instagram : </p>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )

}

export default Contact;