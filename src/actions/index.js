import axios from "axios";

export const SIGN_UP_START = "SIGN_UP_START";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";

export const signUp = (credentials, history) => dispatch => {
  const creds = { email: credentials.email, password: credentials.password };
  dispatch({ type: SIGN_UP_START });
  axios
    .post("https://backend/endpoint/register", creds)
    .then(res => {
      dispatch({ type: SIGN_UP_SUCCESS });
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        history.push("/");
      } else {
        credentials.history.push("/log-in");
      }
      return true;
    })
    .catch(err => {
      dispatch({ type: SIGN_UP_FAILURE, payload: err });
      return false;
    });
};
