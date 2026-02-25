import { useLocation } from "react-router-dom";

function ConfirmationPage() {
  const { state } = useLocation();
  const { date, time, guests, occasion } = state || {};

  return (
    <section className="confirmation">
      <h1>Booking Confirmed!</h1>
      <p>Your reservation is complete.</p>

      <ul>
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
    </section>
  );
}

export default ConfirmationPage;
