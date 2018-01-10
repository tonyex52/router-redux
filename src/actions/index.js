import * as types from '../constants/ActionTypes'
import getProductsAPI from '../fakeAPI/getAllProducts'

const receiveAllProducts = products => ({
	type: types.GET_ALL_PRODUCTS,
	products
})

export const getAllProducts = () => dispatch => {
	getProductsAPI((products) => {
		dispatch(receiveAllProducts(products))
	})
}