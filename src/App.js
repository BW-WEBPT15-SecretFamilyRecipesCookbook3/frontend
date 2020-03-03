import React from "react";
import { Route, Link, Redirect } from "react-router-dom";

import "../src/css/App.css";
import "../src/css/Register.css";
import "../src/css/Login.css";

import Register from "./components/login/Register.js";
import RecipeCardDisplay from "./components/RecipeComponents/RecipeCardDisplay";
import Login from "./components/login/Login.js";
import Dashboard from "./components/dashboard/Dashboard";
import PrivateRoute from "./components/utilis/PrivateRoute";

function App() {
  if (localStorage.getItem("token")) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <div className="App">
      
      
        <Route exact path="/" component={Login} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/dashboard" component={Dashboard} />

    </div>
  );
}

export default App;
