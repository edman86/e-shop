import React from 'react';

import './CollectionItem.scss';

const CollectionItem = ({ id, name, price, imageUrl }) => {
    return (
        <article className="collection-item">
            <div 
                className="image"
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            
            <section className="collection-footer"> 
                <span className="name">{name}</span>
                <span className="price">${price}</span>
            </section>
        </article>
    );
};

export default CollectionItem;