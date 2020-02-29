import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "../src/css/App.css";

import Register from "./components/login/Register.js";
import RecipeCardDisplay from "./components/RecipeCardDisplay";
import Login from "./components/login/Login.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Secret Family Recipes Cookbook</p>
      </header>

      <Router>
        <Route exact path="/" component={RecipeCardDisplay} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Router>
    </div>
  );
}

export default App;
