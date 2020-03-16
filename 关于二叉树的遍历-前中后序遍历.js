/**
 * 二叉树的遍历分为前中后序遍历
 * root为测试数据
 */
const root = {
  val: 'A',
  left: {
    val: 'B',
    left: {
      val: 'D',
    },
    right: {
      val: 'E',
    },
  },
  right: {
    val: 'C',
    left: {
      val: 'F',
    },
    right: {
      val: 'G',
    },
  },
};
/**
 * 前序
 * @param {TreeNode} root
 * @return {number[]}
 */
const preorderTraversal = function(root) {
  const result = [];
  function pushRoot(node) {
    if (node != null) {
      result.push(node.val);
      pushRoot(node.left);
      pushRoot(node.right);
    }
  }
  pushRoot(root);
  return result;
};
/**
 * 中序
 * @param {TreeNode} root
 * @return {number[]}
 */
const inorderTraversal = function(root) {
  const result = [];
  const pushRoot = function(root) {
    if (root != null) {
      pushRoot(root.left);
      result.push(root.val);
      pushRoot(root.right);
    }
  };
  pushRoot(root);
  return result;
};

/**
 * 后序
 * @param {TreeNode} root
 * @return {number[]}
 */
const postorderTraversal = root => {
  const result = [];
  const pushRoot = root => {
    if (root != null) {
      pushRoot(root.left);
      pushRoot(root.right);
      result.push(root.val);
    }
  };
  pushRoot(root);
  return result;
};
console.log(preorderTraversal(root));
console.log(inorderTraversal(root));
console.log(postorderTraversal(root));
