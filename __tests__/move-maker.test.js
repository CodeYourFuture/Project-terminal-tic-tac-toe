import { makeMove } from "../move-maker.js"; 

test("makeMove should return false with an empty array", () => {
  const move = [];
  expect(makeMove(move)).toBe(false);
});

test("makeMove should return false with a single element array", () => {
  const move = [2];
  expect(makeMove(move)).toBe(false);
});

