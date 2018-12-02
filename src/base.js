import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDm2exsICWt9W_2CBQPT7w5XKhgeQ2VytQ",
    authDomain: "restuarent-menu.firebaseapp.com",
    databaseURL: "https://restuarent-menu.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

//this is a named export
export { firebaseApp };

//this is a default export
export default base;