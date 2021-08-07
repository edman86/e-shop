import React from 'react';
import { withRouter } from 'react-router';

import './MenuItem.scss';

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => {
    
    return (
        <section 
            className={`menu-item ${size}`}
            onClick={ () => history.push(`${match.url}${linkUrl}`) }
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

export default withRouter(MenuItem);