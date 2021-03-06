import React from 'react';
import './Directory.scss';

import MenuItem from '../MenuItem/MenuItem';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    title: 'hats',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 1,
                    linkUrl: 'hats'
                },
                {
                    title: 'jackets',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 2,
                    linkUrl: ''
                },
                {
                    title: 'sneakers',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 3,
                    linkUrl: ''
                },
                {
                    title: 'womens',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    size: 'large',
                    id: 4,
                    linkUrl: ''
                },
                {
                    title: 'mens',
                    imageUrl: 'https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg',
                    size: 'large',
                    id: 5,
                    linkUrl: ''
                }
            ]
        }
    }

    render() {
        return (
            <main className="directory-menu">
                {this.state.sections.map((section) => {
                    
                    const { id, ...otherSectionProps } = section;
                    
                    return (
                        <MenuItem 
                            key={id}
                            {...otherSectionProps}
                        />
                    );
                })}
            </main>
        );
    }
}

export default Directory;