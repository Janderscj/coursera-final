import aboutImg1 from "../../Assets/restaurant-chef.jpg";
import aboutImg2 from "../../Assets/MarioAdrian.jpg";

function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <div className="about-text">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family-owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
        </div>

        <div className="about-images">
          <img
            src={aboutImg1}
            alt="Restaurant interior"
            className="img img-1"
          />
          <img src={aboutImg2} alt="Restaurant food" className="img img-2" />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
