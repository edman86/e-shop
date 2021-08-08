import React from 'react';

import './CollectionPreview.scss';

import CollectionItem from '../CollectionItem/CollectionItem';

const CollectionPreview = ({ title, items }) => {
    return (
        <section className="collection-preview">
            <h2 className="title">{title}</h2>
            <div className="preview">
                {items
                    // return first 4 items
                    .filter((item, index) => index < 4)
                    .map((item) => {
                        return (
                           <CollectionItem id={item.id} {...item} />
                        );
                    })}
            </div>
        </section>
    );
};

export default CollectionPreview;

