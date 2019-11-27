import React from 'react';

import Chicken from '../chicken/chicken.component';

import './chicken-directory.styles.scss';

class ChickenDirectory extends React.Component {
    constructor(){
        super();

        this.state = {
            sections: [
                {
                  title: 'Chicken full' ,
                  imageUrl: '/images/chicken-dressed.png',
                  id: 1,
                  linkUrl: ''
                },
                {
                  title: 'chicken legs',
                  imageUrl: '/images/Chicken-legs.png',
                  id: 2,
                  linkUrl: ''
                },
                {
                  title: 'chicken breast',
                  imageUrl: '/images/chicken-breast.png',
                  id: 3,
                  linkUrl: ''
                },
                {
                  title: 'chicken wings',
                  imageUrl: '/images/chicken-wings.png',
                  id: 4,
                  linkUrl: ''
                },
                {
                  title: 'chicken boneless',
                  imageUrl: '/images/chciken-boneless.png',
                  id: 5,
                  linkUrl: ''
                },
                {
                    title: 'chicken skinless',
                    imageUrl: '/images/chicken-skinless.png',
                    id: 6,
                    linkUrl: ''
                }
              ]
            
        }
    }

    render() {
        return(
            <div className = 'chicken-menu'>
             {
                 this.state.sections.map(({ id, ...otherSectionProps }) => (
                     <Chicken  key = {id} {...otherSectionProps} />
                 ))
             }
            </div>
        );
    }
}

export default ChickenDirectory;