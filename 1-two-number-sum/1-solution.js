/**
 * 
 Given an array of integers nums and an integer target, return the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
 */

var twoSum = function(nums, target) {
  nums.sort((a, b) => a - b);
  let start = 0;
  let end = nums.length - 1;
  while (start < end) {
    if (nums[start] + nums[end] > target) {
      end--;
    } else if (nums[start] + nums[end] < target) {
      start++;
    } else {
      return [nums[start], nums[end]];
    }
  }
  return [];
};

module.exports = twoSum;
