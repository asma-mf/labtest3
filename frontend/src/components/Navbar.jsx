import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="brand">🛒 Product Manager</div>
      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/add-product">Add Product</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
