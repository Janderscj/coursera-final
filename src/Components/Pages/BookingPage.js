import BookingHero from "../Sections/BookingHero";
import BookingForm from "../Sections/BookingForm";

function BookingPage() {
  return (
    <section className="booking" id="reservations">
      <BookingHero />
      <h2>Reserve a Table</h2>
      <BookingForm />
    </section>
  );
}

export default BookingPage;
