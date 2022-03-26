/**
 * Author: Cody Zornes
 * Date: 2022-03-26
 * 
 * DCP #53
 * Desc: Implement a queue using only two stacks.
 * 
 */

class TwoStackQueue {
  constructor() {
    this.qStack = [];
    this.tStack = [];
  }

  enqueue(element) {
    this.qStack.push(element);
    return this;
  }

  dequeue() {
    if (this.qStack.length === 0) {
      return; // returns undefined
    }
    while(this.qStack.length > 0) { // len 0 []
      this.tStack.push(this.qStack.pop()); // ts [3,2,1]
    }
    const output = this.tStack.pop(); // 1
    while(this.tStack.length > 0) { // []
      this.qStack.push(this.tStack.pop()); // qs [2, 3]
    }
    return output; // 1
  }
}

const solution = function testTwoStackQueue() {
  const queue = new TwoStackQueue();
  queue.enqueue(1).enqueue(2).enqueue(3);
  console.log(queue);
  const test = queue.dequeue();
  console.log(test);
  console.log(queue);
  queue.enqueue('foo').enqueue(4).enqueue(5).enqueue(4).enqueue('bar');
  console.log(queue);
  const test2 = queue.dequeue();
  console.log(test2);
  const test3 = queue.dequeue();
  console.log(test3);
  const testUndef = queue.dequeue();
  console.log(testUndef);
  console.log(queue);
}

solution();