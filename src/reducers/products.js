import { GET_ALL_PRODUCTS } from '../constants/ActionTypes'

export default (state = [], action) => {
 switch(action.type) {
 	case GET_ALL_PRODUCTS:
 		return action.products
 	default: 
 		return state
 }
}