/**
 * Author: Cody Zornes
 * Date: 2022-03-24  
 * 
 * DCP #50
 * Desc: Suppose an arithmetic expression was given as a binary tree.
 * Each leaf is an integer and each internal node is an operator (+, -,
 * * or /). Given the root of the tree, write a function to evaluate it.
 * 
 * Ex input: 
 * Ex output:
 */

class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

//        /
//     /      \
//    + 10     - 4
//   /  \     /  \
//  +    -    +    -
// / \  / \  / \  / \
// 5 4  3 2  2 4  5  1
const root = new Node('/');
root.left = new Node('+');
root.right = new Node('-');
root.left.left = new Node('+');
root.left.right = new Node('-');
root.right.left = new Node('+');
root.right.right = new Node('-');
root.left.left.left = new Node(5);
root.left.left.right = new Node(4);
root.left.right.left = new Node(3);
root.left.right.right = new Node(2);
root.right.left.left = new Node(2);
root.right.left.right = new Node(4);
root.right.right.left = new Node(5);
root.right.right.right = new Node(1);


// descend left until deepest operator
  // perform op on child nodes, replace value

// assumption: tree is balanced

const solution = (root) => {

  resolve(root);
  
  return root.value;
}

const resolve = (node) => {
  if (typeof node.value === "string") {
    resolve(node.left);
    resolve(node.right);
  } else if (typeof node.value === "number") return;
  
  const result = operate(node.value, node.left, node.right);
  if (result) node.value = result;
}

const operate = (operator, lnode, rnode) => {
  let math;
  switch (operator) {
    case '+':
      math = lnode.value + rnode.value;
      break;
    case '-':
      math = lnode.value - rnode.value;
      break;
    case '*':
      math = lnode.value * rnode.value;
      break;
    case '/':
      math = lnode.value / rnode.value;
      break;
  }
  return math;
}

console.log(solution(root));