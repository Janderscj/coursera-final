import BookingSlot from "./BookingSlot";

function BookingSlotList({ availableTimes, bookedTimes }) {
  return (
    <section className="booking-slots">
      <h3>Available Slots</h3>

      {availableTimes.map((time) => (
        <BookingSlot
          key={time}
          time={time}
          isBooked={bookedTimes.includes(time)}
        />
      ))}
    </section>
  );
}

export default BookingSlotList;
