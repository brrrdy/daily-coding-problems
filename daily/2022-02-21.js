/**
 * Author: Cody Zornes
 * Date: 2022/02/21
 * 
 * Daily Coding Prob #20
 * Desc: Given two singly linked lists that intersect at some point, find 
 * the intersecting node. The lists are non-cyclical.
 * 
 * Assume nodes with same value are the same node objects
 * 
 * Ex input: 
 * A = 3 -> 7 -> 8 -> 10
 * B = 99 -> 1 -> 8 -> 10
 * Ex output: node with 8
 */

class SllNode {
  next;
  value;

  constructor(value, next = null) {
    this.next = next;
    this.value = value;
  }
}

class SinglyLinkedList {
  start;
  end;

  constructor(node) {
    this.start = node;
    this.end = node;
  }

  addNode(newNode) {
    this.end.next = newNode;
    this.end = newNode;
  }

  getIthNode(i) {
    let node = this.start;
    for (let j = i-1; j > 0; j--) {
      node = node.next;
    }
    return node;
  }
}

function findIntersection(A, B) {

  let aNode = A.start;
  let bNode = B.start;

  // step thru each node in succession
  do { 
    // compare value, if same, return intersection
    if (aNode.value === bNode.value) {
      return aNode;
    }
    aNode = aNode.next;
    bNode = bNode.next;
  } while ((aNode !== null) && (bNode !== null));

  return null;
}

// create our lists
let A = new SinglyLinkedList(new SllNode(3));
A.addNode(new SllNode(7));
A.addNode(new SllNode(8));
A.addNode(new SllNode(10));

let B = new SinglyLinkedList(new SllNode(99));
B.addNode(new SllNode(1));
B.addNode(new SllNode(8));
B.addNode(new SllNode(10));

console.log(`Intersecting node value: ${findIntersection(A,B).value}`);

let testNode = {...B.getIthNode(3)};
console.log(testNode);
B.getIthNode(3).value = 17;
console.log(B.getIthNode(3));
testNode.value = 17;
console.log(`Shallow copy changed.`);
console.log(testNode);
console.log(B.getIthNode(3));

console.log(`Are these equal? ${testNode === B.getIthNode(3)}`);