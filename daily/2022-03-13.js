/**
 * Author: Cody Zornes
 * Date: 2022-03-13
 * 
 * DCP #40
 * Desc: Return the only integer that occurs once in a given
 * array, every other integer will occur exactly 3 times.
 * 
 * Ex input: [6, 1, 3, 3, 3, 6, 6]
 * Ex output: 1
 *
 * TODO implement bitwise logic/examples below
 * ex in: [2, 2, 2, 11, 11, 11, 8] out = 8
 *  2 = 0b 0010 * 3
 * 11 = 0b 1011 * 3
 *  8 = 0b 1000 * 1
 *         4063  bitCount%3 = 1000 = 8
 * 
 *  3 = 0b 0011 * 3
 *  7 = 0b 0111 * 3
 * 12 = 0b 1100 * 1
 *         1466  bitCount%3 = 1100 = 12
 * 
 * Ex input: [13, 19, 13, 13]
 * Ex output: 19 
 *
 * Ex in: [2, 2, 3, 2, 5, 5, 5]
 *
 * target: O(n) tc, O(1) space
 */

const in1 = [6,1,3,3,3,6,6];
const in2 = [13,19,13,13];

function solution(array) {
  let output;
  for (const i in array) {
    let isDuplicate = false;
    for (const j in array) {
      if (i !== j && array[i] === array[j]) {
        isDuplicate = true;
      }
    }
    if (!isDuplicate) {
      output = array[i];
    }
  }
  return output;
}

const out1 = solution(in1);
const out2 = solution(in2);

console.log(out1);
console.log(out2);