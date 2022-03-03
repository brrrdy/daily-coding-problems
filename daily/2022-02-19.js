/**
 * Author: Cody Zornes
 * Date: 2/19/22
 * 
 * Daily Coding Prob #18
 * Desc: Given array of ints and k (1 <= k <= array.length), 
 *   compute max values of each subarray of length k. 
 *   Do in O(N) time and O(k) space
 * 
 * Ex input: [10, 5, 2, 7, 8, 7] and k=3
 * Ex output: [10, 7, 8, 8]
 */


function arrayMax(array) {
  return array.reduce(function(a,b) { return Math.max(a, b);}, -Infinity);
}

function findMaxInSubArray(array, k) {
  // edge case: k == 1 (print each array item)
  // edge case: k == array.len (print max value)
  
  let output = "[";

  let valQueue = [];
  for (let i = 0; i < k; i++) {
    valQueue.push(array[i]);
  }

  let maxValue = arrayMax(valQueue);
  output += maxValue;

  for (let i = k; i < array.length; i++) {
    const falloff = valQueue.shift();
    valQueue.push(array[i]);

    // if new addition is greater than max, update max
    if (array[i] > maxValue) {
      maxValue = array[i];
    } else { 
    // else check for new max
      maxValue = arrayMax(valQueue);
    }

    output += ", " + maxValue;
  }
    
  output += "]";
  console.log(output);
}

findMaxInSubArray([10, 5, 2, 7, 8, 7], 3);
findMaxInSubArray([10, 9, 7, 4, 1], 1);
findMaxInSubArray([1, 2, 3, 4, 5, 6, 7], 7);
findMaxInSubArray([5, 5, 5, 5, 5, 5, 5, 5], 5);
