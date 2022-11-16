// import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, NavLink } from "react-router-dom";
import { HomePage, ShopPage, ItemPage } from "./pages";
import { NavBar, Footer, SearchBar } from "./components";

function App() {
  return (
    <div>
      <NavBar>
        <div>
          <NavLink to="/" className="links">
            Home
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/shop"
            className="links"
            style={({ isActive }) =>
              isActive ? { color: "white" } : undefined
            }
          >
            Shop
          </NavLink>
        </div>
        <div>
          <NavLink to="/details/:id" className="links">
            About
          </NavLink>
        </div>
      </NavBar>
      <h2 className="shop-title">Welcome to FianaShop!</h2>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/details/:id" element={<ItemPage />} />
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
