import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);
const firebaseConfig = {
    apiKey: "AIzaSyBSr9z9xmbwRMgVGenSOtGmbppqBIv-Ci4",
    authDomain: "personalwebsite-e82d0.firebaseapp.com",
    projectId: "personalwebsite-e82d0",
    storageBucket: "personalwebsite-e82d0.appspot.com",
    messagingSenderId: "755685021416",
    appId: "1:755685021416:web:5ff9820f2f8403e6cfdb5d",
    measurementId: "G-HG6HZLDR0F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
