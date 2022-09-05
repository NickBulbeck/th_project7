// Stateful, I think
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class MainNav extends Component {
  // Think I need routes in here; and I need the state to be in here.
  render () {
    return (
      <nav className="main-nav">
        <ul>
          <li><NavLink to="/trains">Trains</NavLink></li>
          <li><NavLink to="/bears">Bears</NavLink></li>
          <li><NavLink to="/mountains">Mountains</NavLink></li>
        </ul>
      </nav>
    )
  }
}

export default MainNav;