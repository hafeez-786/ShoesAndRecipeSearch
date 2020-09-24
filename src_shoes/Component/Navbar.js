import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="nav-wrapper navbar navbar-expand-lg navbar-light">
      <div className="container">
        <Link to="/" className="brand-logo">Shopping</Link>
        <ul className="right navbar-nav">
          <li className="nav-item"><Link to="/" class="nav-link">Shop</Link></li>
          <li className="nav-item"><Link to="/cart" class="nav-link">My cart </Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;