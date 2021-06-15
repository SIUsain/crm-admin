import {
  GET_SLIDERS,
  ADD_NEW_SLIDERS,
  DELETE_SLIDERS,
  EDIT_SLIDERS,
  TOGGLE_VISIBLE
} from "./actionTypes";

import axios from "axios";
import { API_BASE } from "../Helpers/env";

//const API_BASE = "https://crmapp-server.herokuapp.com/slider"

export const getData = (data) => ({
  type: GET_SLIDERS,
  payload: data,
});
export function getSlider() {
  return (dispatch) => {
    axios.get(`${API_BASE}`).then((result) => dispatch(getData(result.data)));
  };
}

export const postData = (data) => ({
  type: ADD_NEW_SLIDERS,
  payload: data,
});
export function addNewSlider(state) {
  console.log("add new slider => ",state);
  return (dispatch) => {
    axios
      .post(`${API_BASE}`, state)
      .then((result) => {console.log(result);dispatch(postData(result.data))})
      .catch((error) => console.log(error));
  };
}

export const removeData = (data) => ({
  type: DELETE_SLIDERS,
  payload: data,
});
export function deleteSlider(id) {
  return (dispatch) => {
    axios
      .delete(`${API_BASE}/${id}`, {})
      .then((result) => dispatch(removeData(result.data)));
  };
}

export const editData = (data) => ({
  type: EDIT_SLIDERS,
  payload: data,
});
export function editSliderFunk(state, id) {
  console.log(state,id);
  return (dispatch) => {
    axios
      .put(`${API_BASE}/${id}`, state)
      .then((result) =>{
        console.log(result.data)
        dispatch(editData(result.data)
        )}
        )
            // .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };
}
export function toggleVisible(id) {

  return (dispatch) => {
    dispatch({
        type:TOGGLE_VISIBLE,
        payload:axios.put(`${API_BASE}/${id}`,{})
        .then(res=>console.log(res))
    })
  }
}