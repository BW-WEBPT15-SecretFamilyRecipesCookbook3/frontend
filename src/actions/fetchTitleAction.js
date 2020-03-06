
import axiosWithAuth from "../components/utilis/AxiosWithAuth";

export const FETCH_TITLES_START = "FETCH_TITLES_START";
export const FETCH_TITLES_SUCCESS = "FETCH_TITLES_SUCCESS";
export const FETCH_TITLES_FAILURE = "FETCH_TITLES_FAILURE";

export const getTitles = () => dispatch => {
  dispatch({ type: FETCH_TITLES_START });
  axiosWithAuth()
    .get(`/recipes`)
    .then(res => {
      dispatch({ type: FETCH_TITLES_SUCCESS, payload: res.data });
      localStorage.setItem("recipe", res);
    })
    .catch(err => {
      dispatch({ type: FETCH_TITLES_FAILURE, payload: err });
    });
};
