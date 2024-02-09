
import { useForm } from "react-hook-form";
import Button from "../components/Button";
import Input from '../components/Input';
import wretch from "wretch";

const Register = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        console.log(data);

        if (data.email === data.mailRepeat) {

            let user = {
                nom: data.lastName,
                prenom: data.firstName,
                age: data.age,
                address: {
                    ville: data.city,
                    postalCode: data.zipCode,
                    numeroRue: data.streetNumber,
                    nomRue: data.street,
                },
                email: data.email,
                password: data.password,
            }

            try {

                await wretch().post(user, "https://api-3wa-ecomm-524fde41edfa.herokuapp.com/api/signup").error(404, (error)=>{console.log(error)});
                reset();
            }

            catch(error){
                console.error(
                    "Not Registered",error
                )
            }
        }

        else (
            alert("Le second mail est différent du premier. Veuillez vérifier votre saisie !")
        );
    };

    return (
        <>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1 style={{ textAlign: "center", color: "#1A5359" }}>Créez votre compte</h1>

                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <div style={{ marginTop: "30px", display: "flex", flexDirection: "column", gap: "15px" }}>
                            <h3 style={{ textAlign: "center", marginBottom: "15px", color: "#1A5359" }}>Informations d'authentification</h3>
                            <Input name="email" type="email" placeholder="E-mail" register={register} error={errors.email} />
                            <Input name="mailRepeat" type="email" placeholder="Confirmez votre e-mail" register={register} error={errors.mailRepeat} />
                            <Input name="password" type="password" placeholder="Mot de passe" register={register} error={errors.password} />
                        </div>

                        <div style={{ marginTop: "50px", display: "flex", flexDirection: "column", gap: "15px" }}>
                            <h3 style={{ textAlign: "center", marginBottom: "15px", color: "#1A5359" }}>Informations personnelles</h3>
                            <Input name="lastName" type="text" placeholder="Nom" register={register} error={errors.lastName} />
                            <Input name="firstName" type="text" placeholder="Prénom" register={register} error={errors.firstName} />
                            <Input name="age" type="number" placeholder="Age" register={register} error={errors.age} />

                            <p style={{ marginBottom: "0px", marginTop: "12px", color: "#1A5359" }}>Adresse de livraison :</p>
                            <Input name="streetNumber" type="text" placeholder="Numéro de rue" register={register} error={errors.streetNumber} />
                            <Input name="street" type="text" placeholder="Rue" register={register} error={errors.street} />
                            <Input name="zipCode" type="text" placeholder="Code postal" register={register} error={errors.zipCode} />
                            <Input name="city" type="text" placeholder="Ville" register={register} error={errors.city} />
                        </div>

                        <div style={{ marginTop: "40px" }}>
                                <Button label="Créer mon compte"
                                    type="submit"
                                    width="150px"
                                    height="50px"
                                    color="antiquewhite"
                                    backgroundColor="#052E33"
                                    borderRadius="15px"
                                    fontSize="1em"
                                />
                        </div>
                    </div>
                </form>

            </div>
        </>
    );
};

export default Register;