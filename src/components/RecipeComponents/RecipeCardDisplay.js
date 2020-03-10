import React, { useEffect, useState } from "react";
import axiosWithAuth from "../utilis/AxiosWithAuth";
import RecipeCard from './recipeCard.component';



function RecipeCardDisplay(props) {
  const [state, setState] = useState([]);

  const getRecipe = () => {
    axiosWithAuth()
      .get("/recipes")
      .then(res => setState(res.data))

      .catch(err => console.error("axiosRecipe: ", err));
  };
  console.log(state);

  useEffect(() => {
    getRecipe();
  }, []);

  return (
    <div>
      <h1>Recipes</h1>
      {state.map(item => {
        return (
          <RecipeCard key={item.id} recipe={item} />
        );
      })}
    </div>
  );
}

export default RecipeCardDisplay;

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
