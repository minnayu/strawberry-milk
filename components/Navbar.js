import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = ({ children, username }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => setIsActive(!isActive);

  return (
    <div>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a
            role="button"
            className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="strawberryNavbar"
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </a>
        </div>

        <div id="strawberryNavbar" style={{fontFamily:'Poppins', fontSize:"1.75em"}} className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
          <div className="navbar-start">
            <Link className="navbar-item" href="/">
              Home
            </Link>

            <Link className="navbar-item" href={username ? `/dashboard?username=${username}` : '/'}>
              Dashboard
            </Link>

            <Link className="navbar-item" href="/about">
              About Us
            </Link>
          </div>
        </div>
      </nav>
      {children}
    </div>
  );
};

export default Navbar;
