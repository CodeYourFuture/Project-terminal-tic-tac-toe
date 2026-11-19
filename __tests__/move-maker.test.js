import { makeMove } from "../move-maker.js"; 

test("makeMove should return false when given an empty array", () => {
  const move = [];
  expect(makeMove(move)).toBe(false);
});