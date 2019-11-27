import React from 'react';

import ChickenDirectory from '../components/directory/chicken-directory.component'

import './chickenpage.styles.scss';

const ChickenPage = () => (
    <div className = 'homepage'>
       <ChickenDirectory />
    </div>
);

export default ChickenPage;