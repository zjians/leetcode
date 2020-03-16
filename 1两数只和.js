// 暴力法  O(n2)
// var twoSum = function(nums, target) {
//   let res = null;
//   for (let i = 0; i < nums.length; i++) {
//     const current = nums[i];
//     if (res) break;
//     for (let j = i + 1; j < nums.length; j++) {
//       if (current + nums[j] === target) {
//         res = [i, j];
//         break;
//       }
//     }
//   }
//   return res;
// };

// hash O(n)
// var twoSum = function(nums, target) {
//   const hash = {};
//   for (let i = 0; i < nums.length; i++) {
//     const targetVal = target - nums[i];
//     if (targetVal in hash) {
//       return [i, hash[targetVal]];
//     }
//     hash[nums[i]] = i;
//   }
// };

// 2020.2.11 第二次
// 感觉 easy
// 用时2分钟
/**
 * 思路: 
 * 1. 两数之和，我们循环的时候知道当前值，只需要判断target - current的数值在之前有没有出现过就行了，
 *    所以使用hash存储之前出现过的数值。时间复杂度是O(n)
 * 2. 如果给的数组是已经排序的，我们是否可以使用双指针夹逼法呢
 *    
*/
function twoSum (nums, target) {
  const hashMap = Object.create({});
  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    const targ = target - current;
    if (targ in hashMap) {
      return [targ, current];
    }
    hashMap[current] = i;
  }
  return null;
}

function twoSumForTowPointer (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    const leftVal = nums[left];
    const rightVal = nums[right];
    const sum = leftVal + rightVal;
    if (sum === target) {
      return [leftVal,rightVal];
    }
    sum > target ? right -= 1 : left += 1;
  }
  return null;
}

const nums = [2, 7, 11, 15];
const target = 9;
const res = twoSum(nums, target);
const res1 = twoSumForTowPointer(nums, target);
console.log(res, res1);
