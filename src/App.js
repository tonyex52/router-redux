import React, { Component } from 'react'
import { CSSTransitionGroup } from 'react-transition-group'
import NavList from './NavList.js'
import Main from './Main.js'
import Sub from './Sub.js'
import Complete from './Complete.js'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom'
import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
        <Route render={({location}) => (
          <div className="checkout-page">
            <NavList location={location.pathname} />

            <Route path="/main" component={Main} />
            <Route path="/sub" component={Sub} />
            <Route path="/complete" component={Complete} />
            <Redirect to="/main" />
          </div>
        )}/>
      </Router>
    );
  }
}

export default App;
