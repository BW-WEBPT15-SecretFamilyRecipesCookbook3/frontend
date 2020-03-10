import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { YouTube, Twitter } from "../AppComponents/AllBtn";
import "./navi.css";

const Social = () => {

  const [log, setLog] = useState(false);

  const LogOut = () => {
    localStorage.removeItem('token', "");
    setLog(false)
    console.log('clicked');
  }
  
  useEffect(() => {
    const login = localStorage.getItem('token');
      
      if(login !== null) {
        setLog(true);
      }
  }, [])

  return (
    <div className="social-wrap">
      
      <Twitter />
      <YouTube />
      { 
        log 
        ? <Link className="logout" onClick={LogOut} to='/' >Log Out</Link>
        : <Link to='/login' >Log In</Link>
      }
         
    </div>
  );
};

export default Social;
