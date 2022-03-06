/**
 * Author: Cody Zornes
 * Date: 2022/03/05
 * 
 * DCP #30
 * Desc: You are given an array of non-negative integers that represents a 
 * two-dimensional elevation map where each element is unit-width wall and 
 * the integer is the height. Suppose it will rain and all spots between two 
 * walls get filled up.
 * 
 * Compute how many units of water remain trapped on the map in O(N) time and 
 * O(1) space.
 * 
 * Ex input: [2, 1, 2]
 * Ex output: 1
 *
 * Ex input: [3, 0, 1, 3, 0, 5]
 * Ex output: 8
 */

const input1 = [0, 1, 2, 3, 0, 1];
const input2 = [3, 0, 1, 3, 0, 5];
const input3 = [5, 0, 0, 3, 0, 5];

function solution(wallMap) {
  // short-circuit for impossible pooling scenario
  if (wallMap.length < 3) {
    return 0;
  }
  
  let lw = wallMap[0]; // left wall
  let rw = wallMap[1]; // right wall
  
  let floor = (rw < lw) ? rw : 0; // floor tracks lowest point when pooling
  let poolSize = 1; // counter for number of consecutive same-height walls
  
  let tempAmt = (rw < lw) ? lw-rw : 0; // keeps track of potential water amount
  let confirmed = 0; // only add to when we've confirmed water will not run off
  
  // start at 2 (3rd wall) since we already checked for first two walls
  for (let i = 2; i < wallMap.length; i++) {
    const height = wallMap[i];

    if (height > floor) { // going up
      let pooled = (Math.min(height,lw) - floor)*poolSize;
      confirmed += pooled;
      tempAmt -= pooled;
      poolSize = 1;
    } else if (height === floor) {
      poolSize++;
    }
    floor = height;

    if (height >= lw) {
      confirmed += tempAmt;
      tempAmt = 0;
      lw = height;
      rw = height;
    } else {
      tempAmt += lw - height;
    }
    
    //console.log(`iter #${i}, tempAmt: ${tempAmt}, confirmed: ${confirmed}, poolSize: ${poolSize}`);
  }
  return confirmed;
}

console.log(`sol1: ${solution(input1)}`);
console.log(`sol2: ${solution(input2)}`);
console.log(`sol3: ${solution(input3)}`);