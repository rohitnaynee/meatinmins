import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBt5UJ8fny4NJ1FzNtpHruOWrAXiLgljTA",
    authDomain: "meatinmins.firebaseapp.com",
    databaseURL: "https://meatinmins.firebaseio.com",
    projectId: "meatinmins",
    storageBucket: "meatinmins.appspot.com",
    messagingSenderId: "1048430032263",
    appId: "1:1048430032263:web:436fc043b736ea2aa98f22",
    measurementId: "G-67FW9LBZJ6"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();
    
    if(!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
         await userRef.set ({
           displayName,
           email,
           createdAt,
           ...additionalData
         })
      } catch (error) {
        console.log('error creating user', error.message);
      }
    } 
   return userRef;        
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider =  new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default  firebase;