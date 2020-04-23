import { createStore } from 'redux';
import { actionTypes } from './actionCreators';

const initialState = {
  data: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_DATA:
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
};

export const store = createStore(reducer);
