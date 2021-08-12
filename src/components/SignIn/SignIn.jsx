import React from 'react';

import './SignIn.scss';

import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';
import { auth, signInWithGoogle, signOut } from '../../firebase/firebaseUtils';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);

            // clear email and password fields
            this.setState({
                email: '',
                password: ''
            });
        } catch (err) {
            console.log(err);
        }
    }

    handleChange = (e) => {
        const { value, name } = e.target;

        this.setState({
            [name]: value
        });

    }

    render() {

        const { isSignIn } = this.props;

        return (
            <section className="sign-in">
                <h2 className="title">I already have an account</h2>
                <p>Sign in with your email and password</p>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type="email"
                        name="email"
                        value={this.state.email}
                        label="Email"
                        handleChange={this.handleChange}
                    // required
                    />

                    <FormInput
                        type="password"
                        name="password"
                        value={this.state.password}
                        label="Password"
                        handleChange={this.handleChange}
                    // required
                    />

                    <section className="buttons">
                        <CustomButton type="submit" value="Submit Form">Sign In</CustomButton>

                        {!isSignIn ?
                            (<CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                                Sign In With Google
                            </CustomButton>)
                            :
                            (<CustomButton onClick={signOut} isGoogleSignIn>
                                Sign Out
                            </CustomButton>)}
                    </section>

                </form>
            </section>
        );
    }
}

export default SignIn;