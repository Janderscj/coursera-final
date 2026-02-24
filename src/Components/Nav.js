import { Link } from "react-router-dom";
import logo from "../Assets/Logo .svg";

function Nav() {
  return (
    <header className="top-header">
      <img src={logo} alt="Little Lemon Logo" className="logo" />

      <nav className="nav-links" id="navbar">
        <a href="#navbar">Home</a>
        <a href="#about">About</a>
        <Link to="/menu">Menu</Link>
        <Link to="/reservations">Reservations</Link>
        <Link to="/order">Order Online</Link>
        <Link to="/login">Login</Link>
      </nav>
    </header>
  );
}

export default Nav;
