
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

// export function updateCart(payload) {
//   return {
//     type: "UPDATE_CART",
//     payload: payload
//   }
// }

export function setQuantity(payload) {
  return {
    type: "SET_QUANTITY",
    payload: payload
  }
}

// export function getData(payload) {
//   return function (dispatch) {
//     dispatch({ type: "FETCH_ITEMS" });
//     axios.get("http://5a6f2daf7a276d0012b2f64e.mockapi.io/myshop")
//       .then((response) => {
//         dispatch({ type: "FETCH_ITEMS_FULFILLED", payload: response.data })
//       })
//       .catch((err) => {
//         dispatch({ type: "FETCH_ITMS_REJECTED", payload: err })
//       })
//   }
// }

// export function syncQuantity(payload) {
//   return {
//     type: "SYNC_QUANTITY",
//     payload: payload
//   }
// }

