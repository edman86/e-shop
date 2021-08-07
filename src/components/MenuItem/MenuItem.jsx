import React from 'react';
import './MenuItem.scss';

const MenuItem = ({ title, imageUrl, size }) => {
    return (
        <section 
            className={`menu-item ${size}`}
        >
            <div 
                className="background-image"
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            ></div>

            <div className="content">
                <h2 className="title">{title.toUpperCase()}</h2>
                <span className="subtitle">shop now</span>
            </div>
        </section>
    );
};

export default MenuItem;