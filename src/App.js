import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "../src/css/App.css";
import "../src/css/Register.css";
import "../src/css/Login.css";

import Register from "./components/login/Register.js";
import RecipeCardDisplay from "./components/RecipeComponents/RecipeCardDisplay";
import Login from "./components/login/Login.js";
import Dashboard from "./components/dashboard/Dashboard";
import PrivateRoute from "./components/utilis/PrivateRoute";
import RecipeForm from "./components/RecipeComponents/RecipeForm";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Secret Family Recipes Cookbook</p>
      </header>

      <Router>
        <Navigation />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/recipeform" component={RecipeForm} />
      </Router>
    </div>
  );
}

export default App;
