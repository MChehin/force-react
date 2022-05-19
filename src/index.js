import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
  apiKey: "AIzaSyAF-YD2tquJ05R9xWEGb24Z_ejpBCnW_mY",
  authDomain: "forcereact-cb509.firebaseapp.com",
  projectId: "forcereact-cb509",
  storageBucket: "forcereact-cb509.appspot.com",
  messagingSenderId: "485950484962",
  appId: "1:485950484962:web:3da2f8583958d6549c49bb"
};


const app = initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
