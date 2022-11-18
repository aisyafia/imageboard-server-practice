// import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, NavLink } from "react-router-dom";
import { HomePage, ShopPage, ItemPage, ProductDetailPage } from "./pages";
import { NavBar, Footer, SearchBar } from "./components";
import SignUp from "./pages/SignUp";
import SignUpSuccessful from "./pages/SignUpSuccessful";

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
          <NavLink to="/product/1" className="links">
            Product detail
          </NavLink>
        </div>
      </NavBar>
      <h2 className="shop-title">Welcome to FianaShop!</h2>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        {/* <Route path="/details/:id" element={<ItemPage />} /> */}
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/signUpSuccessful" element={<SignUpSuccessful />} />
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
