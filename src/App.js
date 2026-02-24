import "./App.css";
import Nav from "./Components/Nav";
import Homepage from "./Components/Pages/Homepage";
import { Routes, Route } from "react-router-dom";
import BookingPage from "./Components/Pages/BookingPage";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Nav />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/reservations" element={<BookingPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
