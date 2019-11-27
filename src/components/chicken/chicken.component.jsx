import React from 'react';
import { withRouter } from 'react-router-dom';

import './chicken.styles.scss';

const Chicken = ({title, imageUrl, size, history, linkUrl, match}) => (
    <div className = {`${size} chicken-item`}
     onClick = {() =>history.push(`${match.url}${linkUrl}`) } >
    <div
   className = 'background-image'      
    style = {{
         backgroundImage: `url(${imageUrl})`
     }}      
   />
          <div className = 'content'>
            <h1 className = 'title'>{title.toUpperCase()}</h1>
            <span className = 'subtitle'>ADD TO CART</span>
          </div>         
   </div>
);

export default withRouter(Chicken);
