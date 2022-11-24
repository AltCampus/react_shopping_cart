export default function selectSize(size) {
  return {
    type: "select_size",
    payload: size,
  };
}

export function addProductToCart(product) {
  return {
    type: "add_product",
    payload: product,
  };
}

export function incrementQuantity(id) {
  return {
    type: "increment_quantity",
    payload: id,
  };
}

export function decrementQuantity(id) {
  return {
    type: "decrement_quantity",
    payload: id,
  };
}

export function removeItem(id) {
  return {
    type: "remove_item",
    payload: id,
  };
}
