import axios from "axios";
import axiosWithAuth from "../components/utilis/AxiosWithAuth";

export const FETCH_RECIPE_START = "FETCH_RECIPE_START";
export const FETCH_RECIPE_SUCCESS = "FETCH_RECIPE_SUCCESS";
export const FETCH_RECIPE_FAILURE = "FETCH_RECIPE_FAILURE";

export const getRecipe = recipeID => dispatch => {
  dispatch({ type: FETCH_RECIPE_START });
  axiosWithAuth()
    .get(`/recipes/${recipeID}`)
    .then(res => {
      dispatch({ type: FETCH_RECIPE_SUCCESS, payload: res.data.recipe });
    })
    .catch(err => {
      dispatch({ type: FETCH_RECIPE_FAILURE, payload: err });
    });
};
