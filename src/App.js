import React, { Component } from 'react'
import { CSSTransitionGroup } from 'react-transition-group'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from 'react-router-dom'

import NavList from './NavList.js'
import ShoppingCart from './ShoppingCart.js'
import Main from './Main.js'
import Sub from './Sub.js'
import Recheck from './Recheck.js'
import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
        <Route render={({location}) => (
          <div className="checkout-page">
            <NavList location={location.pathname} />

            <Switch>
              <Route path="/shoppingcart" exact component={ShoppingCart} />
              <Route path="/main" exact component={Main} />
              <Route path="/sub" exact component={Sub} />
              <Route path="/recheck" exact component={Recheck} />
              <Redirect to="/shoppingcart" />
            </Switch>
          </div>
        )}/>
      </Router>
    )
  }
}

export default App
