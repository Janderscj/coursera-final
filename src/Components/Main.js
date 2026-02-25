import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import BookingPage from "./Pages/BookingPage";

function Main() {
  // Booking state lifted here
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");

  const [availableTimes, setAvailableTimes] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);

  const [bookedTimes, setBookedTimes] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setBookedTimes((prev) => [...prev, time]);
  }

  return (
    <main>
      <Routes>
        <Route path="/" element={<Homepage />} />

        <Route
          path="/booking"
          element={
            <BookingPage
              date={date}
              setDate={setDate}
              time={time}
              setTime={setTime}
              guests={guests}
              setGuests={setGuests}
              occasion={occasion}
              setOccasion={setOccasion}
              availableTimes={availableTimes}
              bookedTimes={bookedTimes}
              onSubmit={handleSubmit}
            />
          }
        />
      </Routes>
    </main>
  );
}

export default Main;
