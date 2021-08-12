import React from 'react';

import './FormInput.scss';

const FormInput = ({ handleChange, label, name, type, value, ...otherProps }) => {
    return (
        <div className="group">
            <input 
                type={type} 
                className="form-input"
                name={name}
                onChange={handleChange}
                {...otherProps}
            />
            {label ? 
            (<label className={`${value.length ? 'shrink' : ''} form-input-label`}>
                {label}    
            </label>)
            : null}
        </div>
    );
};

export default FormInput;