import axios from "axios";
import { axioswithAuth } from "../components/utilis/AxiosWithAuth";

export const LOG_IN_START = "LOG_IN_START";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";

export const logIn = (credentials, history) => dispatch => {
  dispatch({ type: LOG_IN_START });
  axios
    .post("https://sfrecipes.herokuapp.com/api/auth/login", credentials)
    .then(res => {
      dispatch({ type: LOG_IN_SUCCESS });
      localStorage.setItem("token", res.data.token);
      history.push("/");
      return true;
    })
    .catch(err => {
      dispatch({ type: LOG_IN_FAILURE, payload: err });
      return false;
    });
};
