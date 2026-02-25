import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "../Components/Sections/BookingForm";

test("submit button is disabled when form is invalid", () => {
  render(
    <BookingForm
      date=""
      setDate={() => {}}
      time=""
      setTime={() => {}}
      guests={1}
      setGuests={() => {}}
      occasion=""
      setOccasion={() => {}}
      availableTimes={["17:00", "18:00"]}
      dispatch={() => {}}
      onSubmit={() => {}}
    />,
  );

  const submitButton = screen.getByRole("button", {
    name: /make your reservation/i,
  });

  expect(submitButton).toBeDisabled();
});

test("submit button enables when form is valid", () => {
  let date = "";
  let time = "";
  let guests = 1;
  let occasion = "";

  const setDate = (v) => (date = v);
  const setTime = (v) => (time = v);
  const setGuests = (v) => (guests = v);
  const setOccasion = (v) => (occasion = v);

  render(
    <BookingForm
      date={date}
      setDate={setDate}
      time={time}
      setTime={setTime}
      guests={guests}
      setGuests={setGuests}
      occasion={occasion}
      setOccasion={setOccasion}
      availableTimes={["17:00", "18:00"]}
      dispatch={() => {}}
      onSubmit={() => {}}
    />,
  );

  fireEvent.change(screen.getByLabelText(/choose date/i), {
    target: { value: "2024-05-10" },
  });

  fireEvent.change(screen.getByLabelText(/choose time/i), {
    target: { value: "17:00" },
  });

  fireEvent.change(screen.getByLabelText(/number of guests/i), {
    target: { value: "2" },
  });

  fireEvent.change(screen.getByLabelText(/occasion/i), {
    target: { value: "Birthday" },
  });

  const submitButton = screen.getByRole("button", {
    name: /make your reservation/i,
  });

  expect(submitButton).not.toBeDisabled();
});
