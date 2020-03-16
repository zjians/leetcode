/**
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (s.length % 2 != 0) {
    return false;
  }
  const stack = [];
  const keyMap = {'}': '{', ']': '[', ')': '('};
  for (let i = 0; i < s.length; i++) {
    const current = s[i];
    if (keyMap[current]) {
      if (
        keyMap[current] !== stack[stack.length - 1] ||
        stack.length > s.length / 2
      ) {
        return false;
      } else {
        stack.pop();
      }
    } else {
      stack.push(current);
    }
  }
  return !stack.length;
};

const test = '({[]})';
const res = isValid(test);
console.log(res);
