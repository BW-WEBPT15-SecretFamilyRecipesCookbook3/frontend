import React from "react";
import { Route, Link, Redirect } from "react-router-dom";

import "../src/css/App.css";
import "../src/css/Register.css";
import "../src/css/Login.css";
import { BrowserRouter as Router } from 'react-router-dom';
import Register from "./components/login/Register.js";
import RecipeCardDisplay from "./components/RecipeComponents/RecipeCardDisplay";
import Login from "./components/login/Login.js";
import Dashboard from "./components/dashboard/Dashboard";
import PrivateRoute from "./components/utilis/PrivateRoute";
import RecipeForm from "./components/RecipeComponents/RecipeForm";

function App() {
  if (localStorage.getItem("token")) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>Secret Family Recipes Cookbook</p>
      </header>

      <Router>
        <Link className="links" to={"/"}>
          {" "}
          Home
        </Link>

        <Link className="links" to={"/login"}>
          {" "}
          Login
        </Link>
        <Link className="links" to={"/register"}>
          {" "}
          Register
        </Link>
        <Link className="links" to={"/dashboard"}>
          {" "}
          Dashboard
        </Link>

        <PrivateRoute exact path="/" component={RecipeCardDisplay} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/recipeform" component={RecipeForm} />
      </Router>
    </div>
  );
}

export default App;
