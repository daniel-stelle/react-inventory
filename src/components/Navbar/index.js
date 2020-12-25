import React from 'react';
import './styles.scss';
import { NavLink, withRouter } from 'react-router-dom';

function Navbar(props) {
  return (
    <aside className="sidebar">
      <div>
        <ul>
          <li><NavLink to="/">Inventory</NavLink></li>
        </ul>
      </div>
    </aside>
  );
}

export default withRouter(Navbar);
