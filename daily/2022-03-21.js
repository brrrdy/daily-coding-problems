/**
 * Author: Cody Zornes
 * Date: 
 * 
 * DCP #48
 * Desc: Given the pre-order and in-order traversals of a binary tree,
 * write a function to reconstruct the tree.
 * 
 * Ex input: po: ['a', 'b', 'd', 'e', 'c', 'f', 'g'], io: ['d', 'b', 'e', 'a', 'f', 'c', 'g']
 * Ex output:
 */

// fn pot()
//  print value
//  left.pot()
//  right.pot()

// fn iot()
//  left.pot()
//  print value
//  right.pot()

const iot1 = ['d','b','e',  'a',  'f','c','g'];
const pot1 = ['a','b','d','e','c','f','g'];

class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

function solution(inorder, preorder) {
  let pi = 1;
  const root = new Node(preorder[0]);
  recurse(inorder, preorder, root, pi);
  return root;
}

const recurse = (iot, pot, node, pi) => { 
  
  const lPivot = iot.indexOf(node.value);
  if (lPivot < 0) return;
  
  const nextLeft = new Node(pot[pi]);
  node.left = nextLeft;
  const left = iot.slice(0,lPivot);
  const right = iot.slice(lPivot+1);
  if (left.length === 0) return;
  
  console.log(`pivot: ${lPivot}`)
  console.log(`left: ${left}`)
  
  pi++;
  recurse(left, pot, nextLeft, pi);
  recurse(right, pot, nextRight, pi);
  
  
}
console.log(solution(iot1, pot1));




