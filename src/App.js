import "./App.css";
import Nav from "./Components/Nav";
import Homepage from "./Components/Pages/Homepage";
import Footer from "./Components/Footer";
import { Routes, Route } from "react-router-dom";
import BookingPage from "./Components/Pages/BookingPage";

function App() {
  return (
    <div className="page-container">
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/reservations" element={<BookingPage />} />
      </Routes>
    </div>
  );
}

export default App;
