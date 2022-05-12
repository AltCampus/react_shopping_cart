export function handleCart(val) {
  return {
    type: 'handleCart',
    isOpen: val,
  };
}

export function handleSelectedOrder(val) {
  return {
    type: 'selectedOrder',
    selectedOrder: val,
  };
}

export function handleSelectedSize(val) {
  return {
    type: 'selectedSize',
    selectedSize: val,
  };
}

export function addToCart(product) {
  return {
    type: 'addToCart',
    product,
  };
}

export function removeFromCart(id) {
  return {
    type: 'removeFromCart',
    id,
  };
}

export function decrementProduct(id) {
  return {
    type: 'decrement',
    id,
  };
}
