/**
 * n叉树的BFS
 */

const root = {
  val: 'A',
  children: [
    {
      val: 'B',
      children: [
        {
          val: 'D',
        },
        {
          val: 'E',
        },
      ],
    },
    {
      val: 'C',
      children: [
        {
          val: 'F',
        },
        {
          val: 'G',
        },
      ],
    },
  ],
};

const bfs = function(root) {
  const result = [];
  if (!root) return result;
  let queue = [root];
  while (queue.length) {
    let current = queue.shift();
    result.push(current.val);
    current.children && queue.push(...current.children);
  }
  return result;
};

const bfsForFloor = function(root) {
  const result = [];
  if (!root) return result;
  let queue = [root];
  while (queue.length) {
    const len = queue.length;
    const sub = [];
    for (let i = 0; i < len; i++) {
      const current = queue.shift();
      sub.push(current.val);
      if (current.children) {
        queue.push(...current.children);
      }
    }
    sub.length && result.push(sub);
  }
  return result;
};

const test = bfs(root);
const testForFloor = bfsForFloor(root);
console.log(test);
console.log(testForFloor);

/**
 * 关于用js模拟队列的性能思考
 * 有两种方法：
 * 1， 反向  头 <= 尾（push,shift）
 * 2， 正向  头 => 尾 (unshfit,pop)
 * 我一般用1的方式，形成一个固定格式把
 */

/**
 * 层序遍历
 * bfs的固定格式模版
 * 这个代码维护了这样一个结果【【floor】,[floor]】
 * 可以根据需要来维护floor的结构。
 */
function bfs(root) {
  if (!root) return [];
  const res = [];
  const queue = [root];
  while (queue.length) {
    const len = queue.length;
    const floor = [];
    for (let i = 0; i < len; i++) {
      const current = queue.shift();
      if (!current) continue;
      queue.push(current.left, current.right);
      floor.push(current.val);
    }
    // 比如最后一层都是叶子节点，所以会得到一个空的数组，这个是标志这结束，不用放入res；
    floor && res.push(floor);
  }
  return res;
}

/**
 * 层序遍历
 * dfs的代码模版
 */

function dfs(root) {
  if (!root) return [];
  const res = [];
  const helper = (node, level = 1) => {
    if (!node) {
      return;
    }
    if (res.length < level) {
      res.push([]);
    }
    res[level - 1].push(node.val);
    helper(node.left, level + 1);
    helper(node.right, level + 1);
    return res;
  };
  return helper(root);
}
