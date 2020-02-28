import React, { useState } from "react";
// import {Route} from "react-dom"
import "./App.css";
import SignIn from "./components/login/Login";

function App() {
  const [signIn, setSignIn] = useState("");
  return (
    <div className="App">
      <header className="App-header">
        <p>Code for Forms.</p>
      </header>
      {console.log(signIn)}
      <form>
        <label>
          <h1> Register</h1>
        </label>
        <label>
          Full Name:
          <input
            type="text"
            placeholder="First Name"
            onChange={event => setSignIn(event.target.value)}
          />
          .
          <input
            type="text"
            placeholder="Last Name"
            onChange={event => setSignIn(event.target.value)}
          />
          <br></br>
          Email Address (Username) :
          <input
            type="text"
            placeholder="Email Address"
            onChange={event => setSignIn(event.target.value)}
          />
          <br></br>
          Password:
          <input
            type="text"
            placeholder="Password"
            onChange={event => setSignIn(event.target.value)}
          />
          <br></br>
          <br></br>*Passwords are case sensitive*
          <br></br>*Passwords Requirements*
          <br></br> *Must be 8 or more characters*
          <br></br> *Must include at least 1 number, 1 uppercase
          <br></br> and 1 lowercase letter, and a symbol*
          <br></br>
          <br></br> Confirm Password:
          <input
            type="text"
            placeholder="Confirm Password"
            onChange={event => setSignIn(event.target.value)}
          />
        </label>
      </form>
      <br></br>
      <br></br>
      <br></br>
      <form>
        <label>
          <h1> Login</h1>
        </label>
        <label>
          Username (Email):
          <input
            type="text"
            placeholder="Username/Email"
            onChange={event => setSignIn(event.target.value)}
          />
        </label>
      </form>
      <form>
        <label>
          Password:
          <input
            type="text"
            placeholder="Password"
            onChange={event => setSignIn(event.target.value)}
          />
          <br></br>*Passwords are case sensitive*
        </label>
      </form>
      <SignIn />
    </div>
  );
}

export default App;
