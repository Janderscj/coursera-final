import Nav from "./Nav";
import logo from "../Assets/Logo .svg";

function Header() {
  return (
    <header className="top-header">
      <img src={logo} alt="Little Lemon Logo" className="logo" />
      <Nav />
    </header>
  );
}
export default Header;
