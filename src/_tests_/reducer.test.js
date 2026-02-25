import { fetchAPI } from "../api";

function updateTimes(state, action) {
  if (action.type === "update_times") {
    return fetchAPI(new Date(action.date));
  }
  return state;
}

test("updateTimes returns new available times when date changes", () => {
  const initialState = [];
  const action = { type: "update_times", date: "2024-05-10" };

  const result = updateTimes(initialState, action);

  expect(Array.isArray(result)).toBe(true);
  expect(result.length).toBeGreaterThan(0);
});
