const Contact = () => {

    return(
        <>
            <h1>Contact</h1>
            <div style={{display:"flex"}}>
                <label for='email'>Votre email</label>
                <input type="email"></input>
                <textarea id="story" name="" rows="30" cols="33">
                Votre message
                </textarea>
            </div>

        </>
    )

}

export default Contact