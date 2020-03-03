import React from "react";
import { Logout, YouTube, Twitter } from "../AppComponents/AllBtn";
import "./navi.css";

const Social = () => {

  const LogOut = () => {
    localStorage.setItem('token', "");
    
    console.log('clicked');
  }

  return (
    <div className="social-wrap">
      <Twitter />
      <YouTube />
      <a href="https://cookbookproject.netlify.com/">
        <Logout onClick={LogOut()}/>
      </a>
    </div>
  );
};
export default Social;
