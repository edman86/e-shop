import React from 'react';

import './CustomButton.scss';

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => {
    
    // {...otherProps} include type and value props
    
    return (
        <button 
            className={`custom-button ${isGoogleSignIn && 'google-sign-in'}`}
            {...otherProps}
        >
            {children}
        </button>
    );
};

export default CustomButton;