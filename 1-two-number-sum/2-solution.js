/**
 * 
 Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
 */

var twoSum = function(nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    let key = target - nums[i];
    if (map[key] !== undefined) {
      return [map[key], i];
    } else {
      map[nums[i]] = i;
    }
  }
  return [];
};

module.exports = twoSum;
