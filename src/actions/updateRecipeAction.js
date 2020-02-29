import axios from "axios";
import axiosWithAuth from "../components/utilis/AxiosWithAuth";

export const UPDATE_RECIPE_START = "EDIT_RECIPE_START";
export const UPDATE_RECIPE_SUCCESS = "EDIT_RECIPE_SUCCESS";
export const UPDATE_RECIPE_FAILURE = "EDIT_RECIPE_FAILURE";

export const updateRecipe = (recipeID, updatedRecipe, history) => dispatch => {
  dispatch({ type: UPDATE_RECIPE_START });
  axiosWithAuth()
    .put(`/recipes/${recipeID}`, updatedRecipe)
    .then(res => {
      dispatch({ type: UPDATE_RECIPE_SUCCESS, payload: res.data });
      const recipe_id = res.data.id;
      history.push(`/recipes/view/${recipe_id}`);
    })
    .catch(err => {
      dispatch({ type: UPDATE_RECIPE_FAILURE, payload: err });
    });
};
