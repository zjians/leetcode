// 暴力法 时间太久 超时了 O(n3)
// var threeSum = function(nums) {
//   const len = nums.length;
//   let res = [];
//   nums.sort();
//   for (let i = 0; i < len; i++) {
//     const first = nums[i];
//     for (let j = i + 1; j < len; j++) {
//       const second = nums[j];
//       for (let k = j + 1; k < len; k++) {
//         const third = nums[k];
//         if (first + second + third === 0) {
//           res.push([first, second, third]);
//         }
//       }
//     }
//   }
//   res = Array.from(new Set(res.map(item => item.join(',')))).map(i =>
//     i.split(',')
//   );
//   return res;
// };

// hash O(n2)
// var threeSum = function(nums) {
//   const map = new Map();
//   const len = nums.length;
//   const res = [];
//   for (let i = 0; i < len; i++) {
//     const currentI = nums[i];
//     for (let j = i; j < len; j++) {
//       const currentJ = nums[j];
//       const target = -(currentI + currentJ);
//       if () {
//         // TODO： hash表如何处理重复的数值？
//       }
//       if (map.get(target) > j) {
//         res.push([i, j, target]);
//       }
//       map.set(currentJ, 'true');
//     }
//   }
// };

// 双指针法
var threeSum = function(nums) {
  const len = nums.length;
  const res = [];
  if (nums.length < 3) {
    return res;
  }
  nums.sort((a, b) => a - b);
  for (let left = 0; left < len - 2; left++) {
    if (nums[left] > 0) {
      break;
    }
    if (left > 0 && nums[left] === nums[left - 1]) {
      continue;
    }
    let right = len - 1;
    for (let center = left + 1; center < right; ) {
      const current = nums[left] + nums[center] + nums[right];
      if (current < 0) {
        center++;
      } else if (current > 0) {
        right--;
      } else {
        if (center > left + 1 && nums[center] === nums[center - 1]) {
          center++;
          continue;
        }
        res.push([nums[left], nums[center], nums[right]]);
        center++;
      }
    }
  }
  return res;
};

const nums = [0, 0, 0, 0];
const res = threeSum(nums);
console.log(res);
