import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ChickenPage from './pages/chickenpage/chickenpage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';

import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

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

class App extends React.Component {

  unsubscribeFromAuth = null
  
  componentDidMount () {

    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth);

          userRef.onSnapshot(snapShot => {
           setCurrentUser({
               id: snapShot.id,
               ...snapShot.data()
             })
          });          
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount () {
    this.unsubscribeFromAuth();
  }

  render() {
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
        <Route exact path = '/checkout' component = {CheckoutPage} />
        <Route exact path = '/signin' 
             render = {() => this.props.currentUser 
              ? 
              (<Redirect to = '/' />)
              :
             (<SignInAndSignUpPage /> )} 
        />
        </Switch>    
    </div>
  );
}
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});
 
export default connect(
  mapStateToProps,
  mapDispatchToProps 
  )(App);
