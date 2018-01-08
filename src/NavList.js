import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './NavList.css'

let navListPage = [{
    title: '/main',
    content: '運送方式'
  },
  {
    title: '/sub',
    content: '付款方式'
  },
  {
    title: '/recheck',
    content: '結帳確認'
  }]

class NavList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return this._showNavList() ? (
      <div className="nav-list">
        {
          navListPage.map((item) => 
            <NavLink className="nav-item" 
              key={item.title} 
              to={item.title} 
              isActive={this._isActive.bind(this, item.title)}>

              <div className="nav-name">{item.content}</div>
            </NavLink>
          )
        }
      </div>
    ) : ''
  }

  _showNavList() {
    let location = this.props.location
    return navListPage.filter(({title}) => location.includes(title)).length
  }

  _isActive(itemLocation) {
    let locationIndex = navListPage.findIndex((item) => item.title === this.props.location)
    let itemLocationIndex = navListPage.findIndex((item) => item.title === itemLocation)

    return locationIndex >= itemLocationIndex
  }
}

export default NavList
