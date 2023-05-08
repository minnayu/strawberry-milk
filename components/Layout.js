const Layout = ({ children }) => {
  return (
    <div>
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="strawberryNavbar">
            <span></span>
            <span></span>
            <span></span>
          </a>
        </div>

        <div id="strawberryNavbar" class="navbar-menu">
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

export default Layout;
