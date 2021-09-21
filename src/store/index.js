import { createStore } from "redux";
import data from "../data.json";

let products = data.products;

function reducer(state = {
  isOpen: false,
  products: []
}, action) {
  switch (action.type) {
    case "highest":
      state.products = [...products].sort((a, b) => b.price - a.price);
      return { ...state, products: state.products };
    case "lowest":
      state.products = [...products].sort((a, b) => a.price - b.price);
      return { ...state, products: state.products };
    case "isOpen":
      state.isOpen = action.payload;
      return { ...state, isOpen: state.isOpen };
    default:
      state.products = [...products];
      return { ...state, products: state.products };
  }
}

let store = createStore(reducer);
export default store;