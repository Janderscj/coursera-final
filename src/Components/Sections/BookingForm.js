import React from "react";

function validateForm({ date, time, guests, occasion }) {
  const errors = {};

  if (!date) {
    errors.date = "Please choose a date.";
  } else {
    const selected = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (selected < today) {
      errors.date = "Date cannot be in the past.";
    }
  }

  if (!time) errors.time = "Please choose a time.";
  if (guests < 1 || guests > 10)
    errors.guests = "Guests must be between 1 and 10.";
  if (!occasion) errors.occasion = "Please select an occasion.";

  return errors;
}

function BookingForm({
  date,
  setDate,
  time,
  setTime,
  guests,
  setGuests,
  occasion,
  setOccasion,
  availableTimes,
  dispatch,
  onSubmit,
}) {
  const [errors, setErrors] = React.useState(
    validateForm({ date, time, guests, occasion }),
  );

  return (
    <section className="booking-form">
      <form onSubmit={onSubmit}>
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
            dispatch({ type: "update_times", date: e.target.value });
            setErrors(
              validateForm({
                date: e.target.value,
                time,
                guests,
                occasion,
              }),
            );
          }}
        />
        {errors.date && <p className="error">{errors.date}</p>}

        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          value={time}
          onChange={(e) => {
            setTime(e.target.value);
            setErrors(
              validateForm({
                date,
                time: e.target.value,
                guests,
                occasion,
              }),
            );
          }}
        >
          {availableTimes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
        {errors.time && <p className="error">{errors.time}</p>}

        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          id="guests"
          min="1"
          max="10"
          value={guests}
          onChange={(e) => {
            setGuests(e.target.value);
            setErrors(
              validateForm({
                date,
                time,
                guests: e.target.value,
                occasion,
              }),
            );
          }}
        />
        {errors.guests && <p className="error">{errors.guests}</p>}

        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => {
            setOccasion(e.target.value);
            setErrors(
              validateForm({
                date,
                time,
                guests,
                occasion: e.target.value,
              }),
            );
          }}
        >
          <option value="">Select an option</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
        {errors.occasion && <p className="error">{errors.occasion}</p>}

        <input
          type="submit"
          value="Make Your reservation"
          disabled={Object.keys(errors).length > 0}
        />
      </form>
    </section>
  );
}

export default BookingForm;
