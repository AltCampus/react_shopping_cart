import { createStore } from "redux";

const initialState = {
  sizes: [],
  cart: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "select_size":
      return state.sizes.includes(action.payload)
        ? {
            ...state,
            sizes: state.sizes.filter((size) => size !== action.payload),
          }
        : { ...state, sizes: [...state.sizes, action.payload] };
    default:
      return state;
  }
}

let store = createStore(reducer);
export default store;
