/**
 * 给出 n 代表生成括号的对数，请你写出一个函数，使其能够生成所有可能的并且有效的括号组合。
 * @param {number} level
 * @param {number} max
 * @param {string} current
 * @return {array}
 */
function generate(level, max, current) {
  // terminator 终止条件
  if (level >= max) {
    console.log(current);
    return;
  }
  // process current logic 当前逻辑
  // drill down 向下进行
  generate(level + 1, max, current + '(');
  generate(level + 1, max, current + ')');
  // restore current status 清楚变量
}
generate(0, 2 * 2, '');
