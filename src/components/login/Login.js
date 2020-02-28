import React, { useState } from 'react';


function Login() {
  const [signIn, setSignIn] = useState("");
  return (
    <div className="App">
        {console.log(signIn)}
        <form>
        <label><h1> Account Login</h1></label>
          <label>
            Username (Email):
            <input type="text" placeholder="Username/Email" onChange={event => setSignIn(event.target.value)} />
           </label>
           </form>
           <form>
           <label>
            Password:
            <input type="text" placeholder="Password" onChange={event => setSignIn(event.target.value)} />
            <br></br>*Passwords are case sensitive*
          </label>
        </form>

      </div>
    );
  }
  
  export default Login;