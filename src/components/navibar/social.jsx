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
      <Logout onClick={LogOut()}/>
    </div>
  );
};
export default Social;
