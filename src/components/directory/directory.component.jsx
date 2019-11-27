import React from 'react';

import MenuItem from '../menu-item/menu-item.component'

import './directory.styles.scss';

class Directory extends React.Component {
    constructor(){
        super();

        this.state = {
            sections: [
                {
                  title: 'Chicken',
                  imageUrl: '/images/chicken.png',
                  size: 'large',
                  id: 1,
                  linkUrl: 'shop/hats'
                },
                {
                  title: 'Mutton',
                  imageUrl: '/images/mutton.png',
                  size: 'large',
                  id: 2,
                  linkUrl: 'shop/jackets'
                },
                {
                  title: 'Sea-food',
                  imageUrl: '/images/seafood.png',
                  size: 'large',
                  id: 3,
                  linkUrl: 'shop/sneakers'
                },
                {
                  title: 'exotic',
                  imageUrl: '/images/exotic.png',
                  id: 4,
                  linkUrl: 'shop/womens'
                },
                {
                  title: 'cold-cuts',
                  imageUrl: '/images/coldcuts.png',
                  id: 5,
                  linkUrl: 'shop/mens'
                },
                {
                    title: 'Eggs',
                    imageUrl: '/images/eggs.jpg',
                    id: 6,
                    linkUrl: 'shop/biryani'
                }
              ]
            
        }
    }

    render() {
        return(
            <div className = 'directory-menu'>
             {
                 this.state.sections.map(({ title, imageUrl, id, size }) => (
                     <MenuItem  key = {id} title = {title} imageUrl = {imageUrl} size = {size} />
                 ))
             }
            </div>
        );
    }
}

export default Directory;