/**
 * @param {number[]} height
 * @return {number}
 * 双指针
 */
// var maxArea = function(height) {
//   let area = 0;
//   for (let i = 0, j = height.length - 1; i < j; ) {
//     area = Math.max(
//       (j - i) * (height[i] < height[j] ? height[i++] : height[j--]),
//       area
//     );
//   }
//   return area;
// };

// var maxArea = height => {
//   let area = 0;
//   for (let left = 0, right = height.length - 1; left < right; ) {
//     area = Math.max(
//       area,
//       (right - left) *
//         (height[right] < height[left] ? height[right--] : height[left++])
//     );
//   }
//   return area;
// };

// var maxArea = height => {
//   let area = 0;
//   for (let left = 0, right = height.length - 1; left < right; ) {
//     const currentArea = (right - left) * Math.min(height[left], height[right]);
//     area = Math.max(area, currentArea);
//     height[left] > height[right] ? right-- : left++;
//   }
//   return area;
// };
/**
 * 2020.2.11 第二次
 * 感觉正常
 * 使用双指针夹逼法
*/

var maxArea = height => {
  let area = 0;
  let left = 0;
  let right = height.length - 1;
  while (left < right) {
    const leftVal = height[left];
    const rightVal = height[right];
    const len = right - left;
    let currentArea = 0;
    rightVal > leftVal ? (currentArea = leftVal * len, left += 1) : (currentArea = rightVal * len, right -= 1);
    area = Math.max(currentArea, area);
  }
  return area;
}


console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
