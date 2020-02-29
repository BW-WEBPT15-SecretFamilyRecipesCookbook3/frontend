import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

import "./appComponents.css";

library.add(fas);

export const Twitter = () => (
  <div className="round">
    <FontAwesomeIcon className="all-icon box" icon="hashtag" size="1x" />
  </div>
);
export const YouTube = () => (
  <div className="round">
    <FontAwesomeIcon className="all-icon box" icon="photo-video" size="1x" />
  </div>
);
export const Logout = () => (
  <div className="round">
    <FontAwesomeIcon className="all-icon box" icon="sign-out-alt" size="1x" />
  </div>
);
export const Delete = () => (
  <div className="round">
    <FontAwesomeIcon className="all-icon box" icon="minus" size="1x" />
  </div>
);

export const ProfileSide = () => (
  <div className="side-wrap">
    <p>Profile</p>
    <div className="round">
      <FontAwesomeIcon className="all-icon i" icon="user" size="1x" />
    </div>
  </div>
);
export const SettingSide = () => (
  <div className="side-wrap">
    <p>Settings</p>
    <div className="round">
      <FontAwesomeIcon className="all-icon i" icon="sliders-h" size="1x" />
    </div>
  </div>
);
export const FamilySide = () => (
  <div className="side-wrap">
    <p>Family</p>
    <div className="round">
      <FontAwesomeIcon className="all-icon i" icon="users" size="1x" />
    </div>
  </div>
);
export const BakerySide = () => (
  <div className="side-wrap">
    <p>Bakery</p>
    <div className="round">
      <FontAwesomeIcon className="all-icon i" icon="cookie-bite" size="1x" />
    </div>
  </div>
);
export const FoodSide = () => (
  <div className="side-wrap">
    <p>Food</p>
    <div className="round">
      <FontAwesomeIcon className="all-icon i" icon="hamburger" size="1x" />
    </div>
  </div>
);
export const AddSide = () => (
  <div className="side-wrap">
    <p>Add Recipe</p>
    <div className="round">
      <FontAwesomeIcon className="all-icon i" icon="plus" size="1x" />
    </div>
  </div>
);

export const AllBtn = () => (
  <div className="all-btn-wrap">
    <div className="round">
      <FontAwesomeIcon className="all-icon" icon="concierge-bell" size="1x" />
    </div>
    <p>All</p>
  </div>
);
export const PizzaBtn = () => (
  <div className="all-btn-wrap">
    <div className="round">
      <FontAwesomeIcon className="all-icon" icon="pizza-slice" size="1x" />
    </div>
    <p>Italian</p>
  </div>
);
export const AsianBtn = () => (
  <div className="all-btn-wrap">
    <div className="round">
      <FontAwesomeIcon className="all-icon" icon="yin-yang" size="1x" />
    </div>
    <p>Asian</p>
  </div>
);
export const SpanishBtn = () => (
  <div className="all-btn-wrap">
    <div className="round">
      <FontAwesomeIcon className="all-icon" icon="dungeon" size="1x" />
    </div>
    <p>Spanish</p>
  </div>
);
export const BreakfastBtn = () => (
  <div className="all-btn-wrap">
    <div className="round">
      <FontAwesomeIcon className="all-icon" icon="bacon" size="1x" />
    </div>
    <p>breakfast</p>
  </div>
);
export const LunchBtn = () => (
  <div className="all-btn-wrap">
    <div className="round">
      <FontAwesomeIcon className="all-icon" icon="hotdog" size="1x" />
    </div>
    <p>Lunch</p>
  </div>
);
export const DinnerBtn = () => (
  <div className="all-btn-wrap">
    <div className="round">
      <FontAwesomeIcon className="all-icon" icon="drumstick-bite" size="1x" />
    </div>
    <p>Dinner</p>
  </div>
);
export const SweetBtn = () => (
  <div className="all-btn-wrap">
  <div className="round">
      <FontAwesomeIcon className="all-icon" icon="ice-cream" size="1x" />
    </div>
    <p>Sweets</p>
  </div>
);
export const SnackBtn = () => (
  <div className="all-btn-wrap">
    <div className="round">
      <FontAwesomeIcon className="all-icon" icon="apple-alt" size="1x" />
    </div>
    <p>Snack</p>
  </div>
);
export const SmoothieBtn = () => (
  <div className="all-btn-wrap">
    <div className="round">
      <FontAwesomeIcon className="all-icon" icon="blender" size="1x" />
    </div>
    <p>Smoothie</p>
  </div>
);
export const DrinkBtn = () => (
  <div className="all-btn-wrap">
    <div className="round">
      <FontAwesomeIcon className="all-icon" icon="glass-whiskey" size="1x" />
    </div>
    <p>Drinks</p>
  </div>
);
