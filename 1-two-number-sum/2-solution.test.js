const twoSum = require("./2-solution");

test("test 1", () => {
  expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
});

test("test 2", () => {
  expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
});
