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
        <NavLink className="nav-item" to="/main"><div className="nav-name">運送方式</div></NavLink>
        <NavLink className="nav-item" to="/sub"><div className="nav-name">付款方式</div></NavLink>
        <NavLink className="nav-item" to="/complete"><div className="nav-name">結帳完成</div></NavLink>
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
