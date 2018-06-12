import { combineReducers } from 'redux';
import cart from './cart-reducer';
import products from './products-reducer';
import detail from './detail-reducer';

const rootReducer = combineReducers({
    cart: cart ,
    products: products,
    detail: detail
});

export default rootReducer;