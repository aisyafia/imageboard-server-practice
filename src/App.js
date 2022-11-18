// import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, NavLink } from "react-router-dom";
import {
  HomePage,
  ShopPage,
  ItemPage,
  ProductDetailPage,
  LoginPage,
} from "./pages";
import { NavBar, Footer, SearchBar } from "./components";
import { useState } from "react";

function App() {
  const [token, setToken] = useState(null);
  const [userName, setUserName] = useState(null);
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
          <NavLink to="/product/1" className="links">
            Product detail
          </NavLink>
        </div>
        <div>
          <NavLink to="/signin" className="links">
            Login
          </NavLink>
        </div>
      </NavBar>
      <h2 className="shop-title">Welcome to FianaShop!</h2>

      <Routes>
        <Route path="/" element={<HomePage userName={userName} />} />
        <Route path="/shop" element={<ShopPage />} />
        {/* <Route path="/details/:id" element={<ItemPage />} /> */}
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route
          path="/signin"
          element={
            <LoginPage
              setToken={setToken}
              setUserName={setUserName}
              userName={userName}
            />
          }
        />
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
