import initialState from './initialState';

// const products = fetch('http://5a6f2daf7a276d0012b2f64e.mockapi.io/myshop')
// .then(function(response) {
//   return response.json();
// })
// .then(function(myJson) {
//   console.log(myJson);
// });


export default function products(state = initialState.products, action) {
// export default function products(state = products, action) {
  switch (action.type) {
    // case "FETCH_ITEMS": {
    //   return {
    //     ...state
    //   }
    // }
    // case "FETCH_ITEMS_FULFILLED": {
    //   var prevItems = state.items;
    //   if(typeof(state.items.data) !== "undefined")
    //   {
    //     prevItems.data.push.apply(prevItems.data,action.payload.data)
    //     return {
    //       ...state,
    //       items:  prevItems
    //     }
    //   } 
    //   else
    //   {
    //     return {
    //         ...state,
    //         items:  Object.assign({}, state.items, action.payload)
    //     }
    //   }
    //   break;
    // }
    // case "SYNC_QUANTITY": {
    //   const { quantity, item } = action.payload;
    //   return {
    //     ...state
    //   }
    // }    
  }

  return state;
}