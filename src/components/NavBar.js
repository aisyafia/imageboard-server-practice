import { SlHeart, SlBasket, SlUser } from "react-icons/sl";

const NavBar = ({ children }) => {
  return (
    <div class="navbar-container">
      <div class="link-and-searchbox">{children}</div>
      <div class="user-icons">
        <SlUser />
        <SlBasket />
        <SlHeart />
      </div>
    </div>
  );
};

export { NavBar };
