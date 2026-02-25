import { useReducer } from "react";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import BookingPage from "./Pages/BookingPage";

function Main() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes,
  );

  const [bookedTimes, setBookedTimes] = useState([]);

  function initializeTimes() {
    return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  }
  function updateTimes(state, action) {
    return initializeTimes();
  }
  function handleSubmit(e) {
    e.preventDefault();
    setBookedTimes((prev) => [...prev, time]);
  }

  return (
    <div className="page-container">
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
              dispatch={dispatch}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default Main;
