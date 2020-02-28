import React, { useState } from 'react';
import { Button, Form } from 'reactstrap';

function Login() {
  const [signIn, setSignIn] = useState("");
  return (
    <div className="App">
        {console.log(signIn)}
        <Form>
        <label><h1> Account Login</h1></label>
          <label>
            Username (Email):
            <input type="text" placeholder="Username/Email" onChange={event => setSignIn(event.target.value)} />
           </label>
           </Form>
           <Form>
           <label>
            Password:
            <input type="text" placeholder="Password" onChange={event => setSignIn(event.target.value)} />
            <br></br>*Passwords are case sensitive*
          </label>
          <br></br>
          <Button>Submit</Button> <Button>Reset</Button>
        </Form>

      </div>
    );
  }
  
  export default Login;