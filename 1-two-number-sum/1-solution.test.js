const twoSum = require("./1-solution");

test("test 1", () => {
  expect(twoSum([2, 7, 11, 15], 9)).toEqual([2, 7]);
});

test("test 2", () => {
  expect(twoSum([3, 2, 4], 6)).toEqual([2, 4]);
});
