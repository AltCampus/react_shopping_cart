import { createStore } from 'redux';

function reducer(
  state = { isOpen: false, selectedOrder: '', selectedSize: [], cartItems: [] },
  action
) {
  switch (action.type) {
    case 'handleCart':
      return { ...state, isOpen: action.isOpen };
    case 'selectedOrder':
      return { ...state, selectedOrder: action.selectedOrder };
    case 'selectedSize':
      let newSizes = [];
      if (state.selectedSize.includes(action.selectedSize)) {
        newSizes = [...state.selectedSize].filter((size) => {
          if (size !== action.selectedSize) {
            return size;
          }
          return null;
        });
      } else {
        newSizes = state.selectedSize.concat(action.selectedSize);
      }
      return { ...state, selectedSize: newSizes };

    case 'addToCart':
      let isPresent = state.cartItems.findIndex(
        (product) => product.id === action.product.id
      );

      let updatedCartItems;
      if (isPresent >= 0) {
        updatedCartItems = state.cartItems.map((p) => {
          if (p.id === action.product.id) {
            p.quantity = p.quantity + 1;
            return p;
          }
          return p;
        });
      } else {
        updatedCartItems = [...state.cartItems].concat({
          ...action.product,
          quantity: 1,
        });
      }
      return { ...state, cartItems: updatedCartItems };

    case 'removeFromCart':
      let newCart = [...state.cartItems].filter((p) => {
        if (p.id !== action.id) {
          return p;
        }
        return null;
      });
      return { ...state, cartItems: newCart };

    case 'decrement':
      state.cartItems.map((p) => {
        if (p.id === action.id) {
          if (p.quantity < 2) {
            p.quantity = 1;
            return p;
          }
          p.quantity = p.quantity - 1;
          return p;
        }
        return p;
      });
      return { ...state };

    default:
      return state;
  }
}

let store = createStore(reducer);

export default store;
