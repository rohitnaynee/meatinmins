import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ChickenPage from './pages/chickenpage/chickenpage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';

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
      <Header />
        <Switch>
        <Route exact path = '/' component = {HomePage} />
        <Route exact path ='/chicken'  component = {ChickenPage} />  
        <Route exact path = '/shop' component = {ShopPage} /> 
        <Route exact path = '/mutton' component = {Mutton} />
        <Route exact path = '/seafood' component = {SeaFood} />
        <Route exact path = '/exotic' component = {Exotic} />
        <Route exact path = '/eggs' component = {Eggs} />
        <Route exact path = '/signin' component = {SignInAndSignUpPage} />
        </Switch>    
    </div>
  );
}

export default App;
