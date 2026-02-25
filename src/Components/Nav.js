import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../Assets/Logo .svg";

function Nav() {
  const location = useLocation();
  const navigate = useNavigate();

  function handleHomeClick(e) {
    if (location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      e.preventDefault();
      navigate("/");
    }
  }

  //click handler for navigating
  function handleAboutClick(e) {
    if (location.pathname === "/") {
      e.preventDefault();
      document.getElementById("about")?.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      e.preventDefault();
      navigate("/");

      setTimeout(() => {
        document.getElementById("about")?.scrollIntoView({
          behavior: "smooth",
        });
      }, 100);
    }
  }

  return (
    <header className="top-header">
      <img src={logo} alt="Little Lemon Logo" className="logo" />

      <nav className="nav-links" id="navbar">
        <a href="/" onClick={handleHomeClick}>
          Home
        </a>
        <a href="#about" onClick={handleAboutClick}>
          About
        </a>
        <Link to="/menu">Menu</Link>
        <Link to="/booking">Reservations</Link>
        <Link to="/order">Order Online</Link>
        <Link to="/login">Login</Link>
      </nav>
    </header>
  );
}

export default Nav;
