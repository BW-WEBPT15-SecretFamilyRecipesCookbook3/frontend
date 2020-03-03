import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "../src/css/App.css";
import "../src/css/Register.css";
import "../src/css/Login.css";
import "../src/css/Recipes.css";

import Register from "./components/login/Register.js";
import RecipeCardDisplay from "./components/RecipeComponents/RecipeCardDisplay";
import Login from "./components/login/Login.js";
import Dashboard from "./components/dashboard/Dashboard";
import PrivateRoute from "./components/utilis/PrivateRoute";
import RecipeForm from "./components/RecipeComponents/RecipeForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Secret Family Recipes Cookbook</p>
      </header>

      <Router>
        <a href="https://cookbookproject.netlify.com" className="links">
          Home
        </a>

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
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/recipeform" component={RecipeForm} />
      </Router>
    </div>
  );
}

export default App;
