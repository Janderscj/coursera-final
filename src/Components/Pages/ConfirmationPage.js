import { useLocation } from "react-router-dom";

function ConfirmationPage() {
  const { state } = useLocation();
  const { date, time, guests, occasion } = state || {};

  return (
    <section className="confirmation-page">
      <div className="confirmation-card">
        <h1>Booking Confirmed!</h1>
        <p>Your reservation is complete. We look forward to serving you.</p>

        <ul className="confirmation-details">
          <li>
            <strong>Date:</strong> {date}
          </li>
          <li>
            <strong>Time:</strong> {time}
          </li>
          <li>
            <strong>Guests:</strong> {guests}
          </li>
          <li>
            <strong>Occasion:</strong> {occasion}
          </li>
        </ul>

        <a href="/" className="back-home-btn">
          Return Home
        </a>
      </div>
    </section>
  );
}

export default ConfirmationPage;
