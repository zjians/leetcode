// O(n) swap
// const swap = (arr, i1, i2) => {
//   let temp = arr[i1];
//   arr[i1] = arr[i2];
//   arr[i2] = temp;
// };
// const moveZeroes = function(nums) {
//   let j = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== 0) {
//       swap(nums, j++, i);
//     }
//   }
// };

// O(n)
// const moveZeroes = function(nums) {
//   let j = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== 0) {
//       nums[j] = nums[i];
//       if (i !== j) {
//         nums[i] = 0;
//       }
//       j++;
//     }
//   }
// };

// const moveZeroes = function(nums) {
//   let j = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== 0) {
//       nums[j] = nums[i];
//       if (i !== j) {
//         nums[i] = 0;
//       }
//       j++;
//     }
//   }
// };

/**
 * 2020年2.27，二刷，已将忘记思路
 * 2020/2/28: 第三次
 * 思路： 移除零的话，我们可以思考成把零移动到最后侧，或者把非零移动到前面。
 * 所以期待的结果就是，数组的前面和后面分别为目标元素和非目标元素。
 * 我们可以使用双指针：但是双指针貌似有两种形式 ⬇
 * 比如同时从前面出发但是一个一直会向前进（快指针），另一个则在条件满足的时候前进（慢指针）；
 * 或者从前后分别出发进行夹逼。
 * 那么我们什么时候用快慢指针，或者夹逼呢？
 * 一般排好序的两端比较有代表性；
 * 如前面的小，后面的大，我们可以 根据计算的数值判断当前是大了（则移动右侧），还是小了（则移动左侧）；
 * 快慢指针：
 * 快指针去遍历所有的情况，慢指针记录当前满足条件的个数。
 */

/**
 * 快慢指针
 */
const moveZeroes = nums => {
  let left = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      // left !== i 是优化的，即i和left指向同一个元素时不用交换。
      // 这里有个swap元素的好方法，就是可以使用数组的解构赋值
      left !== i && ([nums[left], nums[i]] = [nums[i], nums[left]]);
      left++;
    }
  }
};

/**
 * 双指针夹逼
 * 使用夹逼的时候，我们要考虑是谁被动，谁主动逼迫
 * 即是left主动还是right主动；
 * 这个题目我们是希望保持原本非零的顺序，
 * 所以应该是left主动，left找到零元素，
 *
 * TODO:
 * 貌似不行，因为用夹逼替换的话，顺序会错乱掉，所以这样有顺序的是不是不能用夹逼？
 */
const moveZeroes2 = nums => {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    // 什么时候移动left
    if (nums[left] !== 0) {
      left++;
      continue;
    }
    if (nums[right] === 0) {
      right--;
    } else {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
      right--;
    }
  }
};

var test = [1, 2, 4, 0, 5, 0, 10];
var test2 = [1, 2, 4, 0, 5, 0, 10];
moveZeroes(test);
moveZeroes2(test2);
console.log(test, test2);
