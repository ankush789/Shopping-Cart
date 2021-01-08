import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB-wjzN935pik0PoeuCWY6uTO1rRBHBbkQ",
    authDomain: "shopping-cart-19026.firebaseapp.com",
    projectId: "shopping-cart-19026",
    storageBucket: "shopping-cart-19026.appspot.com",
    messagingSenderId: "734058546801",
    appId: "1:734058546801:web:98a9af08ea25af25053dd0",
    measurementId: "G-FGWV3Q3LP0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

