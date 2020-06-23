import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as firebase from "firebase";
import { BrowserRouter as Router } from "react-router-dom";
import { UserProvider } from "./components/context";

let firebaseConfig = {
  apiKey: "AIzaSyBJNVXo8DwlJaMW5e12wfnSY9qbwZLNCFQ",
  authDomain: "loginapp-9cdce.firebaseapp.com",
  databaseURL: "https://loginapp-9cdce.firebaseio.com",
  projectId: "loginapp-9cdce",
  storageBucket: "loginapp-9cdce.appspot.com",
  messagingSenderId: "979455319177",
  appId: "1:979455319177:web:be4253b5120c6939d1ba58",
  measurementId: "G-5M47YWSW4B"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <UserProvider>
    <Router>
      <App />
    </Router>
  </UserProvider>,
  document.getElementById("root")
);
