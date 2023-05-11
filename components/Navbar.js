import { useState } from 'react';

function Navbar({ children }) {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a
            role="button"
            class={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="strawberryNavbar"
            onMouseEnter={toggleMenu}
            onMouseLeave={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </a>
        </div>

        <div id="strawberryNavbar" class={`navbar-menu ${isActive ? 'is-active' : ''}`}>
          <div class="navbar-start">
            <a class="navbar-item" href="/">
              Home
            </a>

            <a class="navbar-item" href="/about">
              About Us
            </a>  
          </div>
        </div>
      </nav>
      {children}
    </div>
  );
}

export default Navbar;
