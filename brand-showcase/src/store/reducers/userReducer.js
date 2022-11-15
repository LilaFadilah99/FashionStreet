import { HANDLE_LOGIN, HANDLE_LOGOUT } from "../types/user";

let initialState = {
  users: [],
  access_token: localStorage.access_token || null,
  role: "",
};

const userReducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case HANDLE_LOGIN:
      localStorage.setItem("access_token", payload.access_token);
      return {
        ...state,
        access_token: payload.access_token,
        role: payload.role,
      };

    case HANDLE_LOGOUT:
      localStorage.clear();
      return {
        ...state,
        access_token: null,
      };
    default:
      return state;
  }
};

export default userReducer;
