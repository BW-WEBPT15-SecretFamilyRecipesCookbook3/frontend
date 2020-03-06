import React, { useState, useEffect } from "react";
import axios from 'axios';


  // function RecipeCardDisplay (props) => {
  //   const [recipe, setRecipe] = useState("");
  //   useEffect(() => {
  //     axios
  //       .get("https://sfrecipes.herokuapp.com/api/recipes")
  //       .then(res => (res.source))
  //       .catch(err => console.log("Oops! Please wait while we fetch your recipe!", err));
  //   }, []); console.log(recipe)

  //   return ( 
  //   <h3>{props.recipe.title} </h3>
  //   );
  // }
  


  RecipeCardDisplay = props => {
    return (
    <h3>{props.recipe.title} </h3>
    )
    }