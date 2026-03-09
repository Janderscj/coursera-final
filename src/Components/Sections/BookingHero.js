import HeroImg from "../../Assets/restaurant.jpg";
import "../../Styles/Booking.css";

function BookingHero() {
  return (
    <section className="booking-hero" id="reservations">
      <div>
        <h1>Little Lemon</h1>
        <h2>Reservations</h2>
      </div>
      <div className="booking-hero-image-wrapper">
        <img
          src={HeroImg}
          alt="Restaurant Food"
          className="booking-hero-image img-hero"
        />
      </div>
    </section>
  );
}

export default BookingHero;
