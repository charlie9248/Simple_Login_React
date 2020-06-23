import React from "react";
import LoginPage from "./components/LoginPage";
import SignUp from "./components/SignUp";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import PrivateRoute from "./components/PrivateRoute";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <PrivateRoute exact path="/" render={props =>(
          <>
          <Welcome/>
          </>
        )}/>
        <Route path="/login" exact component={LoginPage} />} />
        <Route path="/signup" exact component={SignUp} />
      </Switch>
    </div>
  );
};

export default App;
