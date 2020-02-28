import React, { useState } from 'react';


function Register() {
  const [signUp, setSignUp] = useState("");
  return (
    <div className="App">
        {console.log(signUp)}
        <form>
        <label><h1>Create Account</h1></label>
          <label>
           Full Name:
            <input type="text" placeholder="First Name" onChange={event => setSignUp(event.target.value)} />
            .<input type="text" placeholder="Last Name" onChange={event => setSignUp(event.target.value)} />
           <br></br>
            Email Address (Username) :
            <input type="text" placeholder="Email Address" onChange={event => setSignUp(event.target.value)} />
           <br></br>
            Password:
            <input type="text" placeholder="Password" onChange={event => setSignUp(event.target.value)} />
            <br></br><br></br>*Passwords are case sensitive*
            <br></br>*Passwords Requirements*
            <br></br> *Must be 8 or more characters*
            <br></br> *Must include at least 1 number, 1 uppercase 
            <br></br> and 1 lowercase letter, and a symbol*
            <br></br><br></br> Confirm Password:
            <input type="text" placeholder="Confirm Password" onChange={event => setSignUp(event.target.value)} />
            
            
          </label>
        </form>
      </div>
    );
  }
  
  export default Register;