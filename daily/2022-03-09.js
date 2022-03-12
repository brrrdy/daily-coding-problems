/**
 * Author: Cody Zornes
 * Date: 2022/03/09
 * 
 * DCP #36
 * Desc: Given the root to a binary search tree, find the second 
 * largest node in the tree.
 * 
 *         10 
 *     5         15
 *    1  3    12    20
 *                19
 * 
 * Ex input: 
 * Ex output:
 */

// func (tree, max, second)
//  if node === null return
//  if value > max
//    second = max
//    max = value
//  func (node.right, max, second)
//  func (node.left, max, second)

// traverse down the rightmost path
// if rightMost has a left child, return it
// else return parent of rightMost

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const root = new Node(10);
root.left = new Node(5);
root.left.left = new Node(1);
root.left.right = new Node(3);
root.right = new Node(15);
root.right.right = new Node(20);
root.right.left = new Node(12);
//root.right.right.left = new Node(19);


function findSecondLargest(tree) {
  let node = tree;
  let second = null;
  let max = tree.value;
  let nodePrev = null;

  while (node && node.right) {
    nodePrev = node;
    node = node.right;
  }
  

  if (node && node.left) {
    output = node.left.value;
  } else {
    output = nodePrev.value;
  }
  
  return output;
}

const out = (findSecondLargest(root));

console.log(`for tree starting @${root.value}, second largest is ${out}`);