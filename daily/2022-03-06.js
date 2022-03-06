/**
 * Author: Cody Zornes
 * Date: 2022/03/06
 * 
 * DCP #31
 * Desc: Edit distance between two strings is the minimum number of char
 * insertions, deletions and subs required to change one string to the other.
 * Given two strings, computer the edit distance between them. 
 *
 * Ex input: "kitten", "sitting"
 * Ex output: 3
 */

const s1 = "kitten";
const s2 = "sitting";

function solution(string1, string2) {
  if (string1===string2) {
    return 0;
  }
  let editDistance = Math.abs(string1.length-string2.length);
  const left = string1.split('');
  const right = string2.split('');
  const minLength = Math.min(left.length, right.length);
  for (let i = 0; i < minLength; i++) {
    if (left[i] !== right[i]) {
      editDistance++;
    }
  }
  
  return editDistance;
}

console.log(`Edit Distance for "${s1}" and "${s2}" is ${solution(s1,s2)}`);