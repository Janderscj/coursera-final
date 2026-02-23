import "./App.css";
import Nav from "./Components/Nav";
import Homepage from "./Components/Pages/Homepage";
import Footer from "./Components/Footer";
import { Routes, Route } from "react-router-dom";
import BookingPage from "./Components/Pages/BookingPage";

function App() {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/reservations" element={<BookingPage />} />
      </Routes>
    </>
  );
}

export default App;
