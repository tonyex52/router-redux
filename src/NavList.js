import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './NavList.css'

class NavList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return this._showNavList() ? (
      <div className="nav-list">
        <NavLink className="nav-item" to="/main"><span className="nav-name">運送方式</span></NavLink>
        <NavLink className="nav-item" to="/sub"><span className="nav-name">付款方式</span></NavLink>
        <NavLink className="nav-item" to="/complete"><span className="nav-name">結帳完成</span></NavLink>
      </div>
    ) : '';
  }

  _showNavList() {
    let showPage = ['main', 'sub', 'complete']
    let location = this.props.location
    return showPage.filter((value) => location.includes(value)).length
  }
}

export default NavList;
