// http://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/
/**
 * @param {number[]} nums 这个方法没有用到已排序这个条件 O(n)
 * @return {number}
 */

// var removeDuplicates = function(nums) {
//   const hash = Object.create(null);
//   let currentIndex = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (!(nums[i] in hash)) {
//       hash[nums[i]] = i;
//       nums[currentIndex++] = nums[i];
//     }
//   }
//   // nums.splice(currentIndex);
//   return nums.length;
// };

/**
 * 因为arr是排好序的，所以只要个前面一个对比就行了
 * TODO:
 */
var removeDuplicates = function(nums) {
  nums = [0, 0, 1, 1, 2, 2, 3, 4, 5, 6, 6];
  const len = nums.length;
  let currentIndex = 0;
  for (let i = 1; i < len; i++) {
    if (currentIndex === 0) {
      currentIndex++;
    } else if (nums[currentIndex] !== nums[i]) {
      nums[currentIndex++] = nums[i];
    }
  }
  console.log(nums, currentIndex);
};
removeDuplicates();
