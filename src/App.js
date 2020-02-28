import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./App.css";

import Login from "./components/login/Login.js";
import Register from "./components/login/Register.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Code for Forms.</p>
      </header>
      <Router>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Link className="button" to={"/"}>
          {" "}
          Home
        </Link>
        <Link className="button2" to={"/login"}>
          {" "}
          Login
        </Link>
        <Link className="button3" to={"/register"}>
          {" "}
          Register
        </Link>
      </Router>
    </div>
  );
}

export default App;
