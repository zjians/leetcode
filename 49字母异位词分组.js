/**
 * https://leetcode-cn.com/problems/group-anagrams/submissions/
 * 思路：用唯一的key来表示相同字母的组合
 * 1、可以将string排序，这样排序后的string都是相同的
 * 2、也可以用一个长度为26位的array来表示各个字母出现的次数
 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 * O(NKlogK)
 */
var groupAnagrams = function(strs) {
  const map = new Map();
  for (let i = 0; i < strs.length; i++) {
    const currentStr = strs[i]
      .split('')
      .sort()
      .join('');
    if (map.has(currentStr)) {
      const val = map.get(currentStr);
      val.push(strs[i]);
      map.set(currentStr, val);
    } else {
      map.set(currentStr, [strs[i]]);
    }
  }
  return Array.from(map.values());
};

/**
 * 方法二
 */
var groupAnagrams2 = function(strs) {
  const map = new Map();
  const base = 'a'.charCodeAt();
  for (let i = 0; i < strs.length; i++) {
    const keyArray = new Array(26).fill(0);
    const current = strs[i];
    let key = '';
    for (let j = 0; j < current.length; j++) {
      keyArray[current[j].charCodeAt() - base]++;
    }
    key = keyArray.join('');
    if (map.has(key)) {
      const val = map.get(key);
      val.push(current);
      map.set(key, val);
      // 思考： 为什么简写 map.set(key,  map.get(key).push(current));会报错？
      // Map的set操作倒是做了什么？
    } else {
      map.set(key, [current]);
    }
  }
  return Array.from(map.values());
};
const res = groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']);
console.log(res);

const res2 = groupAnagrams2(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']);
console.log(res2);
