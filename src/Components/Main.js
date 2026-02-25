import { useReducer } from "react";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { fetchAPI, submitAPI } from "/src/api";
import Homepage from "./Pages/Homepage";
import BookingPage from "./Pages/BookingPage";

function Main() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");
  const [bookedTimes, setBookedTimes] = useState([]);
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes,
  );

  function initializeTimes() {
    return fetchAPI(new Date()).map((time) => time.time);
  }
  function updateTimes(state, action) {
    if (action.type === "update_times") {
      return fetchAPI(new Date(action.date));
    }
    return state;
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
