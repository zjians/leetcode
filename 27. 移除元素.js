/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
/**
 * 双指针使用的第二个场景
 * 就是需要把前面的元素，全部移动到后面的时候，
 * 我们则可以使用两个指针
 * 不是很好
 * 参考移动零问题
 */
// var removeElement = function(nums, val) {
//   if (nums.length < 2) {
//     return nums.length ? (nums[0] === val ? 0 : 1) : 0;
//   }
//   let left = 0;
//   let right = nums.length - 1;
//   while (right >= left) {
//     const leftVal = nums[left];
//     const rightVal = nums[right];
//     if (rightVal === val) {
//       right--;
//       continue;
//     }
//     if (leftVal === val) {
//       nums[left] = rightVal;
//       right--;
//       left++;
//     } else {
//       left++;
//     }
//   }
//   return right < 0 ? 0 : left;
// };

const removeElement = (nums, val) => {
  // 把所有的三移动到后侧
  let slow = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      [nums[slow], nums[i]] = [nums[i], nums[slow]];
      slow++;
    }
  }
  return slow;
};
console.log(removeElement([3, 2, 2, 3], 3));
