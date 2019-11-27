import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ChickenPage from './pages/chickenpage/chickenpage.component';
import ShopPage from './pages/shop/shop.component';

const Mutton = () => (
  <div>
    mutton related items
  </div>
);

const SeaFood = () => (
  <div>
    seafood related items
  </div>
);

const Exotic = () => (
  <div>
    exotic related items
  </div>
);

const Eggs = () => (
  <div>
    eegs related items
  </div>
);

function App() {
  return (
    <div>
      <Route exact path = '/' component = {HomePage} />
      <Route exact path ='/chicken'  component = {ChickenPage} />  
      <Route exact path = '/shop' component = {ShopPage} /> 
      <Route exact path = '/mutton' component = {Mutton} />
      <Route exact path = '/seafood' component = {SeaFood} />
      <Route exact path = '/exotic' component = {Exotic} />
      <Route exact path = '/eggs' component = {Eggs} />
    </div>
  );
}

export default App;
