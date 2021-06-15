import {
  GET_SLIDERS,
  ADD_NEW_SLIDERS,
  DELETE_SLIDERS,
  EDIT_SLIDERS,
  TOGGLE_VISIBLE,
} from "../actions/actionTypes";

const initialState = {
  sliderList: [],
};

export default (state = initialState, action) => {
  //console.log(action);
  switch (action.type) {
    case GET_SLIDERS:
      return { ...state, sliderList: action.payload };
    case ADD_NEW_SLIDERS:
      return { ...state, sliderList: [...state.sliderList, action.payload] };
    case DELETE_SLIDERS:
      return { ...state, sliderList: action.payload };
    case EDIT_SLIDERS:
      return { ...state, sliderList: [...state.sliderList, action.payload] };
    case TOGGLE_VISIBLE:
      return { ...state };
    default:
      return state;
  }
};
