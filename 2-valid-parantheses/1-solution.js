/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 */

var isValid = function(s) {
  const openingBrackets = "({[";
  const closingBrackets = ")}]";
  const matchingObj = {
    "(": ")",
    "{": "}",
    "[": "]"
  };
  let stack = [];

  for (let chr of s) {
    if (openingBrackets.includes(chr)) {
      stack.push(chr);
    } else {
      let lastOpeningBracket = stack.pop();
      if (matchingObj[lastOpeningBracket] !== chr) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

module.exports = isValid;
