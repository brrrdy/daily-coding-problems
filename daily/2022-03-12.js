/**
 * Author: Cody Zornes
 * Date: 2022-03-12
 * 
 * DCP#37
 * Desc: The power set of a set is the set of all its subsets. Write a function
 * that, given a set, generates its power set.
 * 
 * Ex input: [1, 2, 3]
 * Ex output: [[],   [1],   [2], [1, 2],   [3], [1, 3], [2, 3], [1, 2, 3] ]
 *
 * [1,2]
 * [] [1] [2] [1,2] 4
 * 
 * [1,2,3,4]
 * 1 of 0        4 of 1                    6 of 2                    4 of 3     1 of 4 
 * [1234] [123] [134] [124] [234] [12] [13] [14] [23] [24] [34] [1] [2] [3] [4] [] 16
 */

// len n
const in1 = [1, 2, 3, 4, 9];

// t c = O((2^n)*n)
function solution_iter(set) {
  const powers = [];
  powers.push([]);
  // O(n)
  for (const num of set) {
    const numSets = [];
    // avg 2^n
    for (const p of powers) {
      numSets.push(p.concat([num]));
    }
    powers.push(...numSets);
  }
  
  return powers;
}

function solution(set, idx = null) {
  if (idx === null) {
    idx = set.length-1;
  } else if (idx < 0) {
    return [[]];
  }
  const element = set[idx];
  const subsets = solution(set, idx-1);
  for (const s in subsets) {
    subsets.push(subsets[s].concat([element]));
  }
  return subsets;
}


console.log(in1);
const out1 = solution(in1);
console.log(`the power set for ${in1} is: `);
console.log(out1);