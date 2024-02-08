import {Link} from 'react-router-dom';
import {useForm} from "react-hook-form";
import { useState } from 'react';
import Button from "../components/Button";
import Input from '../components/Input';

const Register = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [users, setUsers] = useState([]);
    console.log(errors);

    const onSubmit = (data) => {
        setUsers(prevUsers => [...prevUsers, data]);
        reset();
    };

    return (
        <>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1 style={{ textAlign: "center", color: "#1A5359" }}>Créez votre compte</h1>

                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <div style={{ marginTop: "30px", display: "flex", flexDirection: "column", gap: "15px" }}>
                            <h3 style={{ textAlign: "center", marginBottom: "15px", color: "#1A5359" }}>Informations d'authentification</h3>
                            <Input name="mail" type="text" placeholder="E-mail" register={register} error={errors.mail} />
                            
                            <input {...register("mailRepeat", { required: true })} type="text" placeholder="Confirmez votre e-mail"/>
                            {errors.mailRepeat && <span className="error-message">Ce champ est requis.</span>}
                            
                            <input {...register("password", { required: true })} type="password" placeholder="Mot de passe"/>
                            {errors.password && <span className="error-message">Ce champ est requis.</span>}
                        </div>

                        <div style={{ marginTop: "50px", display: "flex", flexDirection: "column", gap: "15px" }}>
                            <h3 style={{ textAlign: "center", marginBottom: "15px", color: "#1A5359" }}>Informations personnelles</h3>
                            <input {...register("lastName", { required: true })} type="text" placeholder="Nom"/>
                            {errors.lastName && <span className="error-message">Ce champ est requis.</span>}
                            
                            <input {...register("firstName", { required: true })} type="text" placeholder="Prénom"/>
                            {errors.firstName && <span className="error-message">Ce champ est requis.</span>}
                            
                            <input {...register("age", { required: true, pattern: /^\d+$/ })} type="number" placeholder="Age"/>
                            {errors.age && errors.age.type === "required" && <span className="error-message">Ce champ est requis.</span>}
                            {errors.age && errors.age.type === "pattern" && <span className="error-message">L'âge doit être un nombre.</span>}
                            
                            <p style={{marginBottom : "0px", marginTop : "12px", color: "#1A5359"}}>Adresse de livraison :</p>
                            <input {...register("streetNumber", { required: true })} type="text" placeholder="Numéro de rue"/>
                            {errors.streetNumber && <span className="error-message">Ce champ est requis.</span>}
                            
                            <input {...register("street", { required: true })} type="text" placeholder="Rue"/>
                            {errors.street && <span className="error-message">Ce champ est requis.</span>}
                            
                            <input {...register("zipCode", { required: true })} type="text" placeholder={errors.zipCode ? "Ce champ est requis." : "Code postal"}/>
                            {errors.zipCode && <span className="error-message">Ce champ est requis.</span>}
                            
                            <input {...register("city", { required: true })} type="text" placeholder="Ville"/>
                            {errors.city && <span className="error-message">Ce champ est requis.</span>}
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