import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../Assets/Logo .svg";

function Nav() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleHomeClick(e) {
    if (location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      e.preventDefault();
      navigate("/");
    }
    setIsMenuOpen(false);
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
    setIsMenuOpen(false);
  }

  return (
    <header className="top-header">
      <img src={logo} alt="Little Lemon Logo" className="logo" />

      {/* Hamburger button */}
      <button
        className="hamburger"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle navigation"
      >
        ☰
      </button>

      {/* Nav links */}
      <nav className={`nav-links ${isMenuOpen ? "open" : ""}`} id="navbar">
        <Link to="/" onClick={handleHomeClick}>
          Home
        </Link>
        <Link to="/" onClick={handleAboutClick}>
          About
        </Link>
        <Link to="/menu" onClick={() => setIsMenuOpen(false)}>
          Menu
        </Link>
        <Link to="/booking" onClick={() => setIsMenuOpen(false)}>
          Reservations
        </Link>
        <Link to="/order" onClick={() => setIsMenuOpen(false)}>
          Order Online
        </Link>
        <Link to="/login" onClick={() => setIsMenuOpen(false)}>
          Login
        </Link>
      </nav>
    </header>
  );
}

export default Nav;
