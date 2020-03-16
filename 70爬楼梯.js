var climbStairs = function(n) {
  let first = 1;
  let second = 2;
  let third = 0;
  for (let i = 3; i <= n; i++) {
    third = first + second;
    first = second;
    second = third;
  }
  return second;
};
const test = climbStairs(100);
console.log(test);
