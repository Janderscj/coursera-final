import footerLogo from "../Assets/footerLogo.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-logo">
          <img src={footerLogo} alt="Little Lemon Logo" />
        </div>

        <div className="footer-column">
          <h4>Navigation</h4>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservations</li>
            <li>Order Online</li>
            <li>Login</li>
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
