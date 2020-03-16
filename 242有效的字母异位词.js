/**
 * https://leetcode-cn.com/problems/valid-anagram/
 * 思路：可以使用hash
 * 因为是对比两个string是否是由相同的元素组成的
 * 所以用hash记录字母出现的次数，一正一负相抵消，如果最后的hash中key值全为0则是true；
 *
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) return false;
  const hashMap = Object.create({});
  for (let i = 0; i < s.length; i++) {
    // 两个可以一起遍历，因为length肯定相同，
    // 并且一个加一个减，即使开始是负也无所谓，反正后面会加减回来
    hashMap[s[i]] !== undefined ? hashMap[s[i]]++ : (hashMap[s[i]] = 1);
    hashMap[t[i]] !== undefined ? hashMap[t[i]]-- : (hashMap[t[i]] = -1);
  }
  for (const key in hashMap) {
    if (hashMap[key] > 0) return false;
  }
  return true;
};
const res = isAnagram('anagram', 'nagaram');
console.log(res);
