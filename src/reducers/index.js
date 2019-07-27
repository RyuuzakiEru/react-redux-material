import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import productReducer from './productReducer';
import cartReducer from './cartReducer';


const rootReducer = combineReducers( { cart: cartReducer, productList: productReducer, routing: routerReducer})

export default rootReducer;
