import { makeMove } from "../move-maker.js";

const board = [
  ["X", "_", "_"],
  ["_", "X", "_"],
  ["O", "O", "X"],
];

describe("makeMove", () => {
  describe("Valid moves", () => {
    test("returns true for an empty cell", () => {
      expect(makeMove(board, "1,2", "0")).toBe(true);
    });
  });

  describe("Invalid moves", () => {
    test("returns false for an occupied cell", () => {
      expect(makeMove(board, "1,1", "0")).toBe(false);
    });

    test("returns false for row outside the board", () => {
      expect(makeMove(board, "4,1", "0")).toBe(false);
    });

    test("returns false for column outside the board", () => {
      expect(makeMove(board, "1,4", "0")).toBe(false);
    });

    describe("Invalid input", () => {
      test("returns false when the move is missing", () => {
        expect(makeMove(board, "", "0")).toBe(false);
      });

      test("returns false when the move has the wrong format", () => {
        expect(makeMove(board, "1-2", "0")).toBe(false);
      });
    });
  });
});