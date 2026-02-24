import HeroImg from "../../Assets/restaurant.jpg";

function BookingHero() {
  return (
    <section className="booking-hero" id="reservations">
      <div>
        <h1>Little Lemon</h1>
        <h2>Reservations</h2>
      </div>
      <div className="hero-image-wrapper">
        <img src={HeroImg} alt="Restaurant Food" className="hero-image" />
      </div>
    </section>
  );
}

export default BookingHero;
