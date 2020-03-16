/**
 * n叉树的BFS
*/

const root = {
  val: "A",
  children: [
    {
      val: "B",
      children: [
        {
          val: "D"
        },
        {
          val: "E"
        }
      ]
    },
    {
      val: "C",
      children: [
        {
          val: "F"
        },
        {
          val: "G"
        }
      ]
    }
  ]
}

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