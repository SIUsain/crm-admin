import axios from "axios";
import { Redirect } from 'react-router-dom';


const API_URL = "https://crmapp-server.herokuapp.com/";

const register = (firstname, lastname, email, password) => {
  return axios.post(API_URL + "users", {
    firstname,
    lastname,
    email,
    password,
  })
};

const login = (email, password) => {
  return axios
    .post(API_URL + "users/login", {
      email,
      password,
    })
    .then((response) => {
      console.log(response.data.token)
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  //console.log("aut service worked");
  localStorage.removeItem("user")
};

export default {
  register,
  login,
  logout,
};