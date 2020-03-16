/**
 * hash的实现需要借助散列函数
 * 即输入一个值以后，散列函数总是能得到一个唯一的（理想情况下）number
 * 下次读取的时候只要再次通过散列函数得到对应的下标值，就能O(1)的查到对应的值
 * 但是散列函数不是一定能保证得到的数值唯一的，所以就会有碰撞
 * 碰撞处可以使用linkedList，所有hash最坏的情况下就是linkedList的时间复杂度
 * 最坏： 查询： O(n), 插入、删除 O(1)
 */
let djb2HashCode = function(key) {
  let hash = 5381; //{1}
  for (let i = 0; i < key.length; i++) {
    //{2}
    hash = hash * 33 + key.charCodeAt(i); //{3}
  }
  return hash % 1013; //{4}
};
console.log(djb2HashCode('zhoujia'));
