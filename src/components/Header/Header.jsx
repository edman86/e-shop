import React from 'react';
import './Header.scss';

import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import { auth } from '../../firebase/firebaseUtils'; 

const Header = ({ currentUser }) => {
    
    return (
        <header className="header">
            <div className="header-container">
                
                <Link to="/" className="logo-container">
                    <Logo className="logo" />
                    E-Shop
                </Link>

                <nav className="navigation">
                    <ul className="navigation-container">
                        <li className="nav-item">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/shop">Shop</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li className="nav-item">
                            {!currentUser ? 
                            (<Link to="/signin">Sign In</Link>)
                            : 
                            (<div className="user">
                                {currentUser.email}
                                <div className="user-popup" onClick={ () => auth.signOut() }>
                                    Sign Out
                                </div>
                            </div>)}
                        </li>
                    </ul>
                </nav>

            </div>
        </header>
    );
};

export default Header;