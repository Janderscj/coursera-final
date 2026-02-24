import BookingHero from "../Sections/BookingHero";

function BookingPage() {
  return (
    <section className="booking" id="reservations">
      <BookingHero />
      <h2>Reserve a Table</h2>
      <form>
        <label>Date</label>
        <input type="date" />

        <label>Time</label>
        <input type="time" />

        <label>Guests</label>
        <input type="number" min="1" max="10" />

        <button type="submit">Book Now</button>
      </form>
    </section>
  );
}

export default BookingPage;
