import React from 'react'
import { connect } from 'react-redux'
import { getAllProducts } from './actions/index'


const ShoppingCart = ({ products, getAllProducts }) => {
	document.title = '購物車'
	getAllProducts()
  return (
    products.map((item) => {
    	return (
    		<div key={item.id}>title: {item.title}, price: {item.price}</div>
    	)
    })
  )
}

const mapStateToProps = (state, ownProps) => ({
	products: state.products
})

const mapDispatchToProps = (dispatch, ownProps) => ({
	getAllProducts: () => { dispatch(getAllProducts()) }
})

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart)
