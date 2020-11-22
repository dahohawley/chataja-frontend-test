import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyCqWeNkYBK4S_vUwYvRKHBsiAEhfbPjKwE",
    authDomain: "chataja-daho.firebaseapp.com",
    databaseURL: "https://chataja-daho.firebaseio.com",
    projectId: "chataja-daho",
    storageBucket: "chataja-daho.appspot.com",
    messagingSenderId: "297653027909",
    appId: "1:297653027909:web:72ee4cbf972cb4018d0f2c",
    measurementId: "G-9YJSEDHQ0P"
  };

let fire = firebase.initializeApp(firebaseConfig);

export default fire;