import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
  } from "../actions/type";
  
  
  const user = JSON.parse(localStorage.getItem("user"));
  //const user = localStorage.getItem("user");
  const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };
  
  export default function (state = initialState, action) {
    const { type, payload } = action;
    console.log(state)  
    switch (type) {
      case REGISTER_SUCCESS:
        return {
          user: null,
          isLoggedIn: false,
        };
      case REGISTER_FAIL:
        return {
          user: null,
          isLoggedIn: false,
        };
      case LOGIN_SUCCESS:
        return {
          isLoggedIn: true,
          user: payload.user,
        };
      case LOGIN_FAIL:
        return {
          isLoggedIn: false,
          user: null,
        };
      case LOGOUT:
        return {
          ...state,
          isLoggedIn: false,
          user: null,
        };
      default:
        return state;
    }
  }