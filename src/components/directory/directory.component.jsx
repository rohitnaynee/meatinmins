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
                  linkUrl: 'chicken'
                },
                {
                  title: 'Mutton',
                  imageUrl: '/images/mutton.png',
                  size: 'large',
                  id: 2,
                  linkUrl: 'mutton'
                },
                {
                  title: 'Sea-food',
                  imageUrl: '/images/seafood.png',
                  size: 'large',
                  id: 3,
                  linkUrl: 'seafood'
                },
                {
                  title: 'exotic',
                  imageUrl: '/images/exotic.png',
                  id: 4,
                  linkUrl: 'exotic'
                },
                {
                  title: 'cold-cuts',
                  imageUrl: '/images/coldcuts.png',
                  id: 5,
                  linkUrl: 'coldcuts'
                },
                {
                    title: 'Eggs',
                    imageUrl: '/images/eggs.jpg',
                    id: 6,
                    linkUrl: 'eggs'
                }
              ]
            
        }
    }

    render() {
        return(
            <div className = 'directory-menu'>
             {
                 this.state.sections.map(({ id, ...otherSectionProps }) => (
                     <MenuItem  key = {id} {...otherSectionProps}  />
                 ))
             }
            </div>
        );
    }
}

export default Directory;