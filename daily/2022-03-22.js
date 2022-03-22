/**
 * Author: Cody Zornes
 * Date: 2022-03-22
 * 
 * DCP #49
 * Desc: Given an array of signed numbers, find the max sum of any contiguous
 * subarray of the array.
 * 
 * in: [-1,1,2,3,-4]
 * out: 6 (1,2,3)
 *
 * Ex input: [34, -50, 42, 14, -5, 86]
 * Ex output: 137 (42, 14, -5, 86)
 *
 * in: [-5, -1, -8, -9]
 * out: 0 (no elements)
 */

// constraint O(N) time complexity

const in1 = [-1, 1, -3, 2, 3, -4];
          // -1, 0, -3, -1, 2, -2
const in2 = [34, -50, 42, -49, 14, -5, 86];
          // 34, -16, 26, -1, 13, 8, 94
const in3 = [-5, -1, -8, -9];

const solution = (array) => {
  let output = 0;
  //const runningSums = [];
  let tempSum = 0;
  for (const el of array) { // 86
    if (Math.abs(el) > tempSum) {  //t
      if (el < 0) {
        tempSum = 0; // 
        continue;
      }
    }
    tempSum += el; // 95
    output = Math.max(tempSum, output); // 95
  }
  //console.log(runningSums);
  return output;
}


const out = solution(in2);
console.log(`Max contig sum for array is ${out}`);