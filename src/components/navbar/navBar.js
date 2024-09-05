import React from 'react';
import './navBar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Restro POS</div>
      <div className="navbar-search">
        <input type="text" placeholder="Search products..." />
      </div>
    </nav>
  );
}

export default NavBar;
