const Input = ({name, type, placeholder, register, error}) => {
    return (
        <div style={{ display: "flex", flexDirection: "column"}}>
            <input {...register(name)} type={type} placeholder={placeholder} />
            {error && <span className="error-message">{error.message}</span>}
        </div>
    );
};

export default Input;