import { useState } from "react";
import BookingHero from "../Sections/BookingHero";
import BookingForm from "../Sections/BookingForm";

function BookingPage() {
  // Form state lifted up
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");

  // Available times (later this will come from API or reducer)
  const [availableTimes, setAvailableTimes] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);

  return (
    <section className="booking" id="reservations">
      <BookingHero />
      <h2>Reserve a Table</h2>

      <BookingForm
        date={date}
        setDate={setDate}
        time={time}
        setTime={setTime}
        guests={guests}
        setGuests={setGuests}
        occasion={occasion}
        setOccasion={setOccasion}
        availableTimes={availableTimes}
      />
    </section>
  );
}

export default BookingPage;
