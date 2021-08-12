import React from 'react';

import './SignPage.scss';

import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';

const SignPage = ({ isSignIn }) => {
    
    return (
        <div className="sign-page">
            <SignIn isSignIn={isSignIn} />
            <SignUp />
        </div>
    );
};

export default SignPage;