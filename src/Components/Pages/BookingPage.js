import BookingHero from "../Sections/BookingHero";
import BookingForm from "../Sections/BookingForm";
import BookingSlotList from "../Sections/BookingSlotList";

function BookingPage({
  date,
  setDate,
  time,
  setTime,
  guests,
  setGuests,
  occasion,
  setOccasion,
  availableTimes,
  bookedTimes,
  dispatch,
  onSubmit,
}) {
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
        dispatch={dispatch}
        onSubmit={onSubmit}
      />

      <BookingSlotList
        availableTimes={availableTimes}
        bookedTimes={bookedTimes}
      />
    </section>
  );
}

export default BookingPage;
