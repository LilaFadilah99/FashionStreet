import { HANDLE_LOGIN, HANDLE_LOGOUT } from "../types/user";
import axios from "axios";
import { toast } from "react-toastify";

export const handle_login = (input) => (dispatch, getState) => {
  return axios
    .post("http://localhost:3000/login", input)
    .then(({ data }) => {
      return dispatch({
        type: HANDLE_LOGIN,
        payload: data,
      });
    })
    .catch((err) => {
      console.log(err);
      toast.error(err.response.data.message, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    });
};

export const handle_logout = (input) => (dispatch, getState) => {
  return dispatch({
    type: HANDLE_LOGOUT,
  });
};
