const NavBar = ({ children }) => {
  return (
    <div class="navbar-container">
      <div class="link-and-searchbox">{children}</div>
      <div class="user-icons"></div>
    </div>
  );
};

export { NavBar };
