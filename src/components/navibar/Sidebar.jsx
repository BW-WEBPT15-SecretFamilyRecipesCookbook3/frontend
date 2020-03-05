import React from "react";
import { Link } from 'react-router-dom';
import {
  ProfileSide,
  SettingSide,
  FamilySide,
  BakerySide,
  FoodSide,
  AddSide
} from "../AppComponents/AllBtn";
import Social from "./social";
import "./navi.css";

const Sidebar = () => {

  

  return (
    <aside className="aside">
      <Social />
      <ProfileSide />
      <SettingSide />
      <FamilySide />
      <BakerySide />
      <FoodSide />
      <Link to={'/recipeform'}>
        <AddSide />
      </Link>
    </aside>
  );
};

export default Sidebar;
