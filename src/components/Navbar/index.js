import { SlHeart, SlBasket, SlUser } from "react-icons/sl";
import { SearchBar } from "../SearchBar";

const NavBar = ({ children }) => {
  return (
    <div className="navbar-container">
      <div className="link-and-searchbox">
        <div className="our-shop">FianaShop</div>
        <div className="just-links">{children}</div>
        <div>
          <SearchBar />
        </div>
      </div>
      <div className="user-icons">
        <div className="icon-a">
          <SlUser />
        </div>
        <div className="icon-a">
          <SlBasket />
        </div>
        <div className="icon-a">
          <SlHeart />
        </div>
      </div>
    </div>
  );
};

export { NavBar };
