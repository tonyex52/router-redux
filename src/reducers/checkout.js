import { SET_CHECKOUT_PRODUCTS } from '../constants/ActionTypes'

export default (preState = {}, {type, selected}) => {
  switch(type) {
    case SET_CHECKOUT_PRODUCTS: 
      return {
        ...preState,
        goods: selected
      }
    default:
      return preState
  }
}