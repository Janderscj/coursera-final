import { useReducer, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { fetchAPI, submitAPI } from "../api.js";

import Homepage from "./Pages/Homepage";
import BookingPage from "./Pages/BookingPage";
import ConfirmationPage from "./Pages/ConfirmationPage";

function Main() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");
  const [bookedTimes, setBookedTimes] = useState([]);

  const navigate = useNavigate();

  function initializeTimes() {
    return fetchAPI(new Date());
  }

  function updateTimes(state, action) {
    if (action.type === "update_times") {
      return fetchAPI(new Date(action.date));
    }
    return state;
  }

  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes,
  );

  function handleSubmit(e) {
    e.preventDefault();

    const formData = {
      date,
      time,
      guests,
      occasion,
    };

    const success = submitAPI(formData);

    if (success) {
      navigate("/confirmation", { state: formData });
    }
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

        <Route path="/confirmation" element={<ConfirmationPage />} />
      </Routes>
    </div>
  );
}

export default Main;
