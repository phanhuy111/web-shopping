import initialState from './initialState';

export default function (state = initialState.cart, action) {
  switch (action.type) {
    case "ADD_TO_CART": { 
          let product = action.payload 
          if (state.find(item => item.product.id === product.id)) { 
            return state
          }
          return [
            ...state, {
              product,
              quantity: 1
            }
          ]
        }
    
    case "SET_QUANTITY": {
      let { product, quantity } = action.payload;
      let index = state.findIndex(item => item.product.id === product.id)
      if (index >= 0) {
        let newState = [...state]
        newState[index].quantity = quantity
        return newState
      }
      return state
    }
    
    case "REMOVE_ITEM":
      {
        let product = action.payload
        const itemIndex = state.findIndex(item => item.product.id === product.id);
        return state.filter((item, index) => index !== itemIndex);
      }
      default: return state;
  }
}