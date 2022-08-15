// Stateful, I think
import React, { Component } from 'react';

class MainNav extends Component {
  render () {
    return (
      <nav className="main-nav">
        <ul>
          <li><a>Trains</a></li>
          <li><a>Bears</a></li>
          <li><a>Mountains</a></li>
        </ul>
      </nav>
    )
  }
}

export default MainNav;