import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons';
//import { faConciergeBell, faPizzaSlice } from '@fortawesome/free-solid-svg-icons'
import "./appComponents.css";

library.add(fas)

export const Twitter = () => (
    <FontAwesomeIcon className="all-icon box" icon="hashtag" />
)
export const YouTube = () => (
    <FontAwesomeIcon className="all-icon box" icon="photo-video" />
)
export const Logout = () => (
    <FontAwesomeIcon className="all-icon box" icon="sign-out-alt" />
)
export const Delete = () => (
    <FontAwesomeIcon className="all-icon box" icon="minus" />
)

export const ProfileSide = () => (
    <div className="side-wrap">
        <p>Profile</p>
        <FontAwesomeIcon className="all-icon i" icon="user" />
    </div>
)
export const SettingSide = () => (
    <div className="side-wrap">
        <p>Settings</p>
        <FontAwesomeIcon className="all-icon i" icon="sliders-h" />
    </div>
)
export const FamilySide = () => (
    <div className="side-wrap">
        <p>Family</p>
        <FontAwesomeIcon className="all-icon i" icon="users" />
    </div>
)
export const BakerySide = () => (
    <div className="side-wrap">
        <p>Bakery</p>
        <FontAwesomeIcon className="all-icon i" icon="cookie-bite" />
    </div>
)
export const FoodSide = () => (
    <div className="side-wrap">
        <p>Food</p>
        <FontAwesomeIcon className="all-icon i" icon="hamburger" />
    </div>
)
export const AddSide = () => (
    <div className="side-wrap">
        <p>Add Recipe</p>
        <FontAwesomeIcon className="all-icon i" icon="plus" />
    </div>
)

export const AllBtn = () => (
  <div className="all-btn-wrap">
    <FontAwesomeIcon className="all-icon" icon="concierge-bell" size="2x" />
    <p>All</p>
  </div>
)
export const PizzaBtn = () => (
  <div className="all-btn-wrap">
    <FontAwesomeIcon className="all-icon" icon="pizza-slice" size="2x" />
    <p>Italian</p>
  </div>
)
export const AsianBtn = () => (
  <div className="all-btn-wrap">
    <FontAwesomeIcon className="all-icon" icon="yin-yang" size="2x" />
    <p>Asian</p>
  </div>
)
export const SpanishBtn = () => (
  <div className="all-btn-wrap">
    <FontAwesomeIcon className="all-icon" icon="dungeon" size="2x" />
    <p>Spanish</p>
  </div>
)
export const BreakfastBtn = () => (
  <div className="all-btn-wrap">
    <FontAwesomeIcon className="all-icon" icon="bacon" size="2x" />
    <p>breakfast</p>
  </div>
)
export const LunchBtn = () => (
  <div className="all-btn-wrap">
    <FontAwesomeIcon className="all-icon" icon="hotdog" size="2x" />
    <p>Lunch</p>
  </div>
)
export const DinnerBtn = () => (
  <div className="all-btn-wrap">
    <FontAwesomeIcon className="all-icon" icon="drumstick-bite" size="2x" />
    <p>Dinner</p>
  </div>
)
export const SweetBtn = () => (
  <div className="all-btn-wrap">
    <FontAwesomeIcon className="all-icon" icon="ice-cream" size="2x" />
    <p>Sweets</p>
  </div>
)
export const SnackBtn = () => (
  <div className="all-btn-wrap">
    <FontAwesomeIcon className="all-icon" icon="apple-alt" size="2x" />
    <p>Snack</p>
  </div>
)
export const SmoothieBtn = () => (
  <div className="all-btn-wrap">
    <FontAwesomeIcon className="all-icon" icon="blender" size="2x" />
    <p>Smoothie</p>
  </div>
)
export const DrinkBtn = () => (
  <div className="all-btn-wrap">
    <FontAwesomeIcon className="all-icon" icon="glass-whiskey" size="2x" />
    <p>Drinks</p>
  </div>
)