
export function addToCart(item) {
  return {
      type: 'ADD_TO_CART',
      payload: item
  };
}

export const addToPro = (detail) => {
  return {
      type: 'ADD_TO_PRO',
      payload: detail
  };
}

export function removeFromCart(item) {
  return {
      type: 'REMOVE_ITEM',
      payload: item
  };
}

export function setQuantity(payload) {
  return {
    type: "SET_QUANTITY",
    payload: payload
  }
}
