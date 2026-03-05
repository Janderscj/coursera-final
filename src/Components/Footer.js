import { Link, useLocation, useNavigate } from "react-router-dom";
import footerLogo from "../Assets/footerLogo.png";

function Footer() {
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

  // Reuse the same about click handler from Nav.js for consistency
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
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-logo">
          <img src={footerLogo} alt="Little Lemon Logo" />
        </div>

        <div className="footer-column">
          <h4>Navigation</h4>
          <ul className="footer-links">
            <Link to="/" onClick={handleHomeClick}>
              Home
            </Link>

            <Link to="/" onClick={handleAboutClick}>
              About
            </Link>
            <Link to="/menu">Menu</Link>
            <Link to="/booking">Reservations</Link>
            <Link to="/order">Order Online</Link>
            <Link to="/login">Login</Link>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Contact</h4>
          <ul>
            <li>123 Lemon Street</li>
            <li>Chicago, IL</li>
            <li>(312) 555‑1234</li>
            <li>contact@littlelemon.com</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Social Media</h4>
          <ul>
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Twitter</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
