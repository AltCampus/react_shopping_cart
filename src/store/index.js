import { createStore } from "redux";

const initialState = {
  sizes: [],
  cart: [],
};

function incQuantity(state, id) {
  return {
    ...state,
    cart: state.cart.map((product) => {
      if (product.id === id) {
        product.quantity++;
      }
      return product;
    }),
  };
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case "select_size":
      return state.sizes.includes(action.payload)
        ? {
            ...state,
            sizes: state.sizes.filter((size) => size !== action.payload),
          }
        : { ...state, sizes: [...state.sizes, action.payload] };
    case "add_product":
      if (state.cart.some((product) => product.id === action.payload.id)) {
        return incQuantity(state, action.payload.id);
      }
      return { ...state, cart: [...state.cart, action.payload] };

    case "remove_item":
      return {
        ...state,
        cart: state.cart.filter((product) => product.id !== action.payload),
      };
    case "increment_quantity":
      return incQuantity(state, action.payload);

    case "decrement_quantity":
      return {
        ...state,
        cart: state.cart.map((product) => {
          if (product.id === action.payload) {
            product.quantity--;
          }
          return product;
        }),
      };
    default:
      return state;
  }
}

let store = createStore(reducer);
export default store;
