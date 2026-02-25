import { Link } from "react-router-dom";
import HeroImg from "../../Assets/restauranfood.jpg";
function HeroSection() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-text">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Link to="/booking" className="hero-button">
          Reserve a Table
        </Link>
      </div>
      <div className="hero-image-wrapper">
        <img src={HeroImg} alt="Restaurant Food" className="hero-image" />
      </div>
    </section>
  );
}

export default HeroSection;
