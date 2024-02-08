import PropTypes from "prop-types";

const Dropdown = ({title, options, onChange, value}) => {
    const handleChange = (e) => {
        if (onChange){
            onChange(e.target.value);
        }
    };

    return (
        <>
            <div>
                {<label>{title}</label>}
                <select onChange={handleChange} value={value}>
                    {options.map((option, index) => (
                        <option key={index} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
        </>
    );
};

Dropdown.propTypes = {
    title: PropTypes.string, 
    options: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.any.isRequired,
        label: PropTypes.string.isRequired,
    })).isRequired,
    onChange: PropTypes.func,
    value: PropTypes.any,
};

export default Dropdown;