import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { getAllProducts, setCheckOutProducts } from './actions/index'
import './ShoppingCart.css'

const ShoppingCart = ({ products, getAllProducts, changeCheckBox }) => {
	document.title = '購物車'
	getAllProducts()
  return products.length ? (
  	<div className="cart-list">
    {
    	products.map((item) => {
	    	return (
	    		<div key={item.id} className="cart-item">
            <label className="cart-label">
		    			<input className="cart-checkbox" type="checkbox" value={item.id} onChange={(e) => {changeCheckBox(item, e.target.checked)}}/>
		    			<div className="cart-item-content">
		    				<div className="cart-item-name">{item.title}</div>
		    				<div>
                  <span className="cart-item-price">${(item.price * item.num)}元</span>
                  <span className="cart-number">, 共{item.num}件</span>
                </div>
		    			</div>
		    		</label>
		    	</div>
	    	)
	    })
    }
    </div>
  ) : ''
}

const mapStateToProps = (state, ownProps) => ({
	products: state.products
})

const mapDispatchToProps = (dispatch, ownProps) => ({
	getAllProducts: () => { dispatch(getAllProducts()) }
})

const ConnectingCart = connect(mapStateToProps, mapDispatchToProps)(ShoppingCart)

class ShoppingCartContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: {}
    }
    this.changeCheckBox = this._changeCheckBox.bind(this)
    this.goToCheckOut = this._goToCheckOut.bind(this)
  }

  _changeCheckBox(item, isSelected) {
    this.setState(({selected}) => {
      if( isSelected ) {
        return {
          selected: {
            ...selected,
            [item.id]: {
              ...item,
              total: item.price * item.num
            }
          }
        }
      } else {
        let newSelected = Object.assign({}, selected)
        delete newSelected[item.id]
        return {selected: newSelected}
      }
    })
  }

  _goToCheckOut(e) {
    let { setProductsInCartToCheckOut, history } = this.props
    let { selected } = this.state
    e.preventDefault();
    if( Object.keys(selected).length ) {
      setProductsInCartToCheckOut(selected)
      history.push('/main')
    } else {
      alert(`You don't select any product in cart`)
    }
  }

  render() {
    return (
      <section>
        <header>購物車清單</header>
        <ConnectingCart changeCheckBox={this.changeCheckBox}/>
        <footer className="go-to-chechout" onClick={this.goToCheckOut}>前往結帳</footer>
      </section>
    )
  }
}

export default connect(()=>({}), (dispatch) => (
  {
    setProductsInCartToCheckOut: (selected) => {
      dispatch(setCheckOutProducts(selected))
    }
  }
))(ShoppingCartContainer);
