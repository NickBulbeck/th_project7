// Stateful, I think
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class MainNav extends Component {

  handleClick = (event) => {
    let newSearchTerm = event.target.textContent.toLowerCase();
    this.props.setSearchTerm(newSearchTerm);
    this.props.search(newSearchTerm);
  }
  
  render () {
    return (
      <nav className="main-nav">
        <ul>
          <li onClick={this.handleClick}><NavLink to="/torridon">Torridon</NavLink></li>
          <li onClick={this.handleClick}><NavLink to="/fisherfield">Fisherfield</NavLink></li>
          <li onClick={this.handleClick}><NavLink to="/cuillin">Skye Cuillin</NavLink></li>
        </ul>
      </nav>
    )
  }
}

export default MainNav;