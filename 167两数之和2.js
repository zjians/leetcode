/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function(numbers, target) {
//   const hash = new Map();
//   const len = numbers.length;
//   for (let i = 0; i < len; i++) {
//     if (hash.has(target - numbers[i])) {
//       return [hash.get(target - numbers[i]) + 1, i + 1];
//     }
//     hash.set(numbers[i], i);
//   }
// };

var twoSum = function(numbers, target) {
  let left = 0;
  let right = numbers.length - 1;
  while (right > left) {
    const leftVal = numbers[left];
    const rightVal = numbers[right];
    if (leftVal + rightVal === target) {
      return [left + 1, right + 1];
    } else if (leftVal + rightVal > target) {
      right--;
    } else {
      left++;
    }
  }
};

const numbers = [2, 7, 11, 15];
const target = 90;
const res = twoSum(numbers, target);
console.log(res);
