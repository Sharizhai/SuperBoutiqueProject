const Input = ({name, type, placeholder, register, error}) => {
    return (
        <div style={{ display: "flex", flexDirection: "column"}}>
            <input {...register(name, { required: true })} type={type} placeholder={placeholder}/>
            {error && error.type === 'required' && <span className="error-message">Ce champ est requis.</span>}
            {error && error.type !== 'required' && <span className="error-message">{error.message}</span>}
        </div>
    );
};

export default Input;