/**
 * Author: Cody Zornes
 * Date: 
 * 
 * DCP #43
 * Desc: Implement a stack that has the following methods:
 * push(val), pushes val onto stack
 * pop(), pops off topmost element of stack
 * max(), returns the max value in the stack currently
 * 
 */

class stack {
  constructor() {
    this.vals = [];
  }

  push(val) {
    this.vals.push({
      value: val,
      max: (this.vals.length === 0) ? val : Math.max(val, this.max()),
    });
  }

  pop() {
    return this.vals.pop().value;
  }

  max() {
    return this.vals[this.vals.length-1].max;
  }
  
}


const myStack = new stack();

myStack.push(1);
myStack.push(3);
myStack.push(7);
myStack.push(5);
myStack.push(2);

console.log(myStack);

console.log(myStack.max());

myStack.pop();
myStack.pop();
myStack.pop();

console.log(myStack);

console.log(myStack.max());

myStack.push(10);
console.log(myStack.max());