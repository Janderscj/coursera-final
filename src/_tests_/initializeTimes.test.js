import { fetchAPI } from "../api";

function initializeTimes() {
  return fetchAPI(new Date());
}

test("initializeTimes returns an array of times", () => {
  const result = initializeTimes();

  expect(Array.isArray(result)).toBe(true);
  expect(result.length).toBeGreaterThan(0);
});
