import axios from "axios";
import axiosWithAuth from "../components/utilis/AxiosWithAuth";

export const SIGN_UP_START = "SIGN_UP_START";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";

export const signUp = (credentials, history) => dispatch => {
  const creds = { email: credentials.email, password: credentials.password };
  dispatch({ type: SIGN_UP_START });
  axios
    .post("https://sfrecipes.herokuapp.com/api/auth/register", creds)
    .then(res => {
      dispatch({ type: SIGN_UP_SUCCESS });
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        history.push("/login");
      } else {
        credentials.history.push("/register");
      }
      return true;
    })
    .catch(err => {
      dispatch({ type: SIGN_UP_FAILURE, payload: err });
      return false;
    });
};
