import React from "react";
import { Link } from "react-router-dom";
export default function Navigation() {
  return (
    <>
      <a href="https://cookbookproject.netlify.com" className="links">
        Home
      </a>

      <Link className="links" to={"/login"}>
        {" "}
        Login
      </Link>
      <Link className="links" to={"/register"}>
        {" "}
        Register
      </Link>
      <Link className="links" to={"/dashboard"}>
        {" "}
        Dashboard
      </Link>
    </>
  );
}
