import products from '../products.json'

function _getAllProducts() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(products)
		}, 1000)
	})
}

export default (callback) => {
	_getAllProducts().then((products) => {
		callback(products)
	}, () => {})
}