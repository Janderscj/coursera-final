import { Link } from "react-router-dom";
import HeroImg from "../../Assets/restauranfood.jpg";
function HeroSection() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-text">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>Fresh Mediterranean flavors.</p>
        <button className="hero-button">
          <Link to="/booking">Reserve a Table</Link>
        </button>
      </div>
      <div className="hero-image-wrapper">
        <img src={HeroImg} alt="Restaurant Food" className="hero-image" />
      </div>
    </section>
  );
}

export default HeroSection;
