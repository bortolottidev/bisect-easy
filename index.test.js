import test from "node:test";
import { strict as assert } from "node:assert";
import { classicAddFunction } from "./index.js";

test("properly works addition", () => {
  const res = classicAddFunction(1, 1);
  assert.strictEqual(res, 2);
});

test("properly works addition with lot of numbers", () => {
  const res = classicAddFunction(1, 2, 3, 4);
  assert.strictEqual(res, 10);
});

test("my current test suite doesnt know the regression", () => {
  const res = classicAddFunction(1, 2, 3, 4, 5);
  assert.strictEqual(res, 15);
});

test("regression hunter", () => {
  const res = classicAddFunction(1, 2, 3, 4, 5, 6);
  assert.strictEqual(res, 21);
});
