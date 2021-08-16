import { products as givenData } from '../data.json';
import { createStore } from 'redux';

let store = createStore(reducer);

export default store;

function reducer(prevState, action) {
  switch (action.type) {
    case 'handleOrderBy':
      console.log('handleOrderBy initiated');
      return { ...prevState, selectedOrder: action.payload.event.target.value };

    case 'handleOrderProducts':
      console.log('handleOrderProducts initiated');
      if (action.payload !== 'initial') {
        console.log('handleOrderProducts initiated');

        let sortedProducts = [...prevState.products];
        if (prevState.selectedOrder === 'highest') {
          sortedProducts = sortedProducts.sort((a, b) => b.price - a.price);
        }
        if (prevState.selectedOrder === 'lowest') {
          sortedProducts = sortedProducts.sort((a, b) => a.price - b.price);
        }
        return { ...prevState, products: sortedProducts };
      } else {
        return;
      }

    default:
      return { products: givenData, selectedOrder: '' };
  }
}
