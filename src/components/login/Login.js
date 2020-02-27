import React, { useState } from 'react';
// import './App.css';


function SignIn() {
  const [name, setName] = useState("");

  return (
    <div className="App">
      {console.log(name)}
      <form>
        <label>
          Username (Email):
          <input type="text" onChange={event => setName(event.target.value)} />
         </label>
         </form>
         <form>
         <label>
          Password:
          <input type="text" onChange={event => setName(event.target.value)} />
          <br></br>*Passwords are case sensitive*
        </label>
      </form>
    </div>
  );
}

export default SignIn;