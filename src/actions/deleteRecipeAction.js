import axios from "axios";
import axiosWithAuth from "../components/utilis/AxiosWithAuth";

export const DELETE_RECIPE_START = "DELETE_RECIPE_START";
export const DELETE_RECIPE_SUCCESS = "DELETE_RECIPE_SUCCESS";
export const DELETE_RECIPE_FAILURE = "DELETE_RECIPE_FAILURE";

export const deleteRecipe = (recipeID, history) => dispatch => {
  dispatch({ type: DELETE_RECIPE_START });
  axiosWithAuth()
    .delete(`/recipes/${recipeID}`)
    .then(res => {
      dispatch({ type: DELETE_RECIPE_SUCCESS, payload: res.data });
      history.push("/");
    })
    .catch(err => {
      dispatch({ type: DELETE_RECIPE_FAILURE, payload: err });
    });
};
