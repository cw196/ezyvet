import { combineReducers } from 'redux'
import cart from './cart'


export default combineReducers({
    cartProducts: cart.cartProducts
})