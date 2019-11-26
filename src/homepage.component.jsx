import React from 'react';

import './homepage.styles.scss';

const HomePage = () => (
    <div className = 'homepage'>
       <div className = 'directory-menu'>
         <div className = 'menu-item'>
           <div className = 'content'>
             <h1 className = 'title'>CHICKEN</h1>
             <span className = 'subtitle'>BUY NOW</span>
           </div>
         </div>

         <div className = 'menu-item'>
           <div className = 'content'>
             <h1 className = 'title'>MUTTON</h1>
             <span className = 'subtitle'>BUY NOW</span>
           </div>
         </div>

         <div className = 'menu-item'>
           <div className = 'content'>
             <h1 className = 'title'>SEA-FOOD</h1>
             <span className = 'subtitle'>BUY NOW</span>
           </div>
         </div>

         <div className = 'menu-item'>
           <div className = 'content'>
             <h1 className = 'title'>EXOTIC</h1>
             <span className = 'subtitle'>BUY NOW</span>
           </div>
         </div>

         <div className = 'menu-item'>
           <div className = 'content'>
             <h1 className = 'title'>COLD-CUTS</h1>
             <span className = 'subtitle'>BUY NOW</span>
           </div>
         </div>

       </div>
    </div>
);

export default HomePage;