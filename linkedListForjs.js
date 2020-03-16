/**
 * linkedList的js实现
 * linkedList的操作一般都要考虑三种情况： 最开始，中间和结尾，因为如果是开头和结尾的话需要特殊处理head和结尾元素（tail）next指向null
 *
 */

/**
 * 生成一个Node
 */
class LinkedListNode {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

/**
 * LinkedList 实现
 */
class LinkedList {
  constructor() {
    this.head = null;
  }
  /**
   * O(n)
   * 获取linkedList长度
   */
  size() {
    let size = 0;
    let tail = this.head;
    while (tail) {
      tail = tail.next;
      size++;
    }
    return size;
  }
  /**
   * O(n)
   * 向linkedList尾部添加元素
   * @param {Node} 要插入的linkedList节点
   * @return {LinkedList}
   */
  add(node) {
    if (!this.head) {
      this.head = node;
      return this;
    }
    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }
    tail.next = node;
    return this;
  }
  /**
   * 最好O(1) 最坏O(n)
   * 向linkedList指定位置插入节点
   * @param {LinkedListNode}
   */
  insert(index, node) {
    if (index === 0) {
      node.next = this.head;
      this.head = node;
      return this;
    }
    const current = this.getItem(index);
    if (!current) {
      // 说明插入的节点大于了size
      throw new Error('您要插入的节点位置不存在！');
    }
    const preNode = this.getItem(index - 1);
    preNode.next = node;
    node.next = current;
    return this;
  }
  /**
   * getItem O(n)
   * @param {Number}
   * @return {LinkedListNode}
   */
  getItem(index) {
    if (!this.head) return null;
    let res = this.head;
    let currentIndex = 0;
    while (currentIndex !== index) {
      res = res.next;
      if (!res) {
        // 说明超过了linkedList的size
        return null;
      }
      currentIndex++;
    }
    return res;
  }
  /**
   * 删除指定元素
   * 因为是单链表需要查询前面的node，所以是O(n),如果是双链表则是O(1)
   * @param {Number?} 要删除元素的index，不传默认删除最后一个
   */
  remove(index) {
    if (!this.head) return this;
    if (typeof index === 'undefined') {
      // 删除最后一个
      let tail = this.head;
      let preNode = null;
      while (tail.next) {
        preNode = tail;
        tail = tail.next;
      }
      if (preNode) {
        preNode.next = null;
      } else {
        this.head = null;
      }
    } else {
      let currentIndex = 0;
      let current = this.head;
      let perNode = null;
      while (currentIndex !== index) {
        perNode = current;
        current = current.next;
        if (!current) {
          // 说明超过了linkedList的size
          return this;
        }
        currentIndex++;
      }
      if (perNode) {
        perNode.next = current.next;
      } else {
        this.head = this.head.next;
      }
    }
    return this;
  }
  /**
   * 反转链表
   * head => 0 => 1 => 2
   */
  reverse() {
    if (!this.head) return this;
    let prev = null;
    let curr = this.head;
    while (curr) {
      let nextTemp = curr.next;
      curr.next = prev;
      prev = curr;
      curr = nextTemp;
    }
    this.head = prev;
  }
}

const test = new LinkedList();
test.add(new LinkedListNode(1));
test.add(new LinkedListNode(2));
test.insert(0, new LinkedListNode(0));
test.reverse();
console.log(test);
