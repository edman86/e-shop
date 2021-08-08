import React from 'react';
import './ShopPage.scss';

import SHOP_DATA from './shop_data';
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';

class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        
        const { collections } = this.state; 
        
        return (
            <section className="shop-page">
                {collections.map((collection) => {
                    
                    const { id, ...otherCollectionProps } = collection;
                    
                    return (
                        <CollectionPreview key={id} {...otherCollectionProps} />
                    );
                })}
            </section>
        );
    }
}

export default ShopPage;