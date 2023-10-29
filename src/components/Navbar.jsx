import "../css/Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/">About</Link>
        <Link to="/">Services</Link>
        <Link to="/addProduct">Add Product</Link>
        <Link to="/">Contact</Link>
      </div>
    </>
  );
};

export default Navbar;
