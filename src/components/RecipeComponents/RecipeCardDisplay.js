import React, { useEffect, useState } from "react";
import axiosWithAuth from "../utilis/AxiosWithAuth";

function RecipeCardDisplay(props) {

  const [state, setState] = useState([]);
  
  const getRecipe = () => {
    axiosWithAuth()
        .get('/recipes')
        .then(res => setState(res.data))
          
        .catch(err => console.error('axiosRecipe: ', err));
  }
  console.log(state)

  useEffect(() => {
    getRecipe();
  },[]);


return (
  
  <div>
    <h1>Hello From Recipes</h1>
    {state.map(item => {
      return (
        <div key={item.id}><h3>{item.title}</h3></div>
      )})}
    
  </div>
);
  
}

export default RecipeCardDisplay;
