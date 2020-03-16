// 只用递归解决，不考虑性能
/**
 * 计算阶乘
 * n!= 1 * 2 * 3 * ... * n
 * n > 0
 */
const factorial = n => {
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
};
// console.log(factorial(10));

/**
 * 爬楼梯
 * 计算爬到楼顶有多少种方法
 *
 */
const climbStairs = function(n) {
  // teminator
  if (n <= 2) {
    return n;
  }
  // process
  return climbStairs(n - 1) + climbStairs(n - 2);
};
// console.log(climbStairs(20));

/**
 * 括号生成
 * 给定括号个数，计算有多少种排列
 */
var generateParenthesis = function(n, str) {
  // terminator
  if (n === 0) {
    console.log(str);
    return;
  }
  // process
  let str1 = str + '(';
  let str2 = str + ')';
  generateParenthesis(n - 1, str1);
  generateParenthesis(n - 1, str2);
};
// console.log(generateParenthesis(4, ''));
