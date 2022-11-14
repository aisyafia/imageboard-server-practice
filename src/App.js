// import logo from "./logo.svg";
// import "./App.css";
import { Route, Routes, NavLink } from "react-router-dom";
import { HomePage, ShopPage, ItemPage } from "./pages";
import { NavBar } from "./components";

function App() {
  return (
    <div>
      <NavBar />
      <h2>Welcome to Fiana!</h2>
      <div>
        <NavLink to="/">Home</NavLink>
      </div>
      <div>
        <NavLink
          to="/shop"
          className="links"
          style={({ isActive }) => (isActive ? { color: "white" } : undefined)}
        >
          Shop
        </NavLink>
      </div>
      <div>
        <NavLink to="/details/:id">About</NavLink>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/details/:id" element={<ItemPage />} />
      </Routes>
    </div>
  );
}

export default App;
