const isValid = require("./1-solution");

test("test 1", () => {
  expect(isValid("()")).toEqual(true);
});

test("test 2", () => {
  expect(isValid("()[]{}")).toEqual(true);
});

test("test 3", () => {
  expect(isValid("()[{}")).toEqual(false);
});
