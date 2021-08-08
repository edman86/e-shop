import React from 'react';
import './Header.scss';

import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';

const Header = () => {
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
                    </ul>
                </nav>

            </div>
        </header>
    );
};

export default Header;