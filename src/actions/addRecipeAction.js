
import axiosWithAuth from "../components/utilis/AxiosWithAuth";

export const ADD_RECIPE_START = "ADD_RECIPE_START";
export const ADD_RECIPE_SUCCESS = "ADD_RECIPE_SUCCESS";
export const ADD_RECIPE_FAILURE = "ADD_RECIPE_FAILURE";

export const addRecipe = (newRecipe, history) => dispatch => {
  dispatch({ type: ADD_RECIPE_START });
  axiosWithAuth()
    .post("https://sfrecipes.herokuapp.com/api/recipes/", newRecipe)
    .then(res => {
      dispatch({ type: ADD_RECIPE_SUCCESS, payload: res.data });
      console.log(res.data);
      const recipe_id = res.data[res.data.length - 1].id;
      history.push(`/recipes/${recipe_id}`);
    })
    .catch(err => {
      dispatch({ type: ADD_RECIPE_FAILURE, payload: err });
    });
};
