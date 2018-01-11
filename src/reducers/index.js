import { combineReducers } from 'redux'
import products from './products'
import checkout from './checkout'

export default combineReducers({products, checkout})