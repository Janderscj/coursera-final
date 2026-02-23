import { Link } from "react-router-dom";
import logo from "../Assets/Logo .svg";

function Nav() {
  return (
    <header className="top-header">
      <img src={logo} alt="Little Lemon Logo" className="logo" />

      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/reservations">Reservations</Link>
        <Link to="/menu">Menu</Link>
      </nav>
    </header>
  );
}

export default Nav;
