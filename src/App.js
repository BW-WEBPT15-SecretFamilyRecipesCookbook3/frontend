import React from "react";
import "./App.css";
import SignIn from "./components/login/Login";
import Navibar from "./components/navbar/Navbar";

function App() {
  return (
    <div>
      <Navibar />
      <SignIn />
    </div>
  );
}

export default App;
