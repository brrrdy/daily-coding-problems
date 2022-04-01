/**
 * Author: Cody Zornes
 * Date: 2022-04-01
 * 
 * DCP #57
 * Desc: Given a string s and an integer k, break up the string into 
 * multiple lines such that each line has a length of k or less. Don't 
 * break words across lines. Each line should have the maximum possible 
 * words. If there's no way to break the text return null.
 * 
 * Ex input: s = "the quicks brown fox jumps over the lazydog", k = 10
 * Ex output: ["the quick", "brown fox", "jumps over", "the lazy", "dog"]
 */



const solution2 = function breakStringIntoMultipleLinesLessStringManip(s, k) {
  const output = [];
  const RGX = /\s+|$/g;
  let i = 0; // start of window
  let j = 0; // end of window
  let probe = 0;
  const whitespaces = s.matchAll(RGX);
  for (const ws of whitespaces) {
    //console.log(ws);
    probe = ws.index;
    if (probe - i <= k) {
      j = probe;
      continue;
    }

    console.log(`i: ${i}`);
    console.log(`j: ${j}`);
    console.log(`probe: ${probe}`);
    
    if (j - i > k) return null;
    output.push(s.substring(i,j));
    i = j+1;
  }

  return output;
}
  
  
const solution = function breakStringIntoMultipleLines(s, k) {
  const output = [];
  let line = 0;
  output[line] = '';
  const input = s.split(' ');

  for (let test of input) {
    if (test.length > k) return null;

    if (output[line].length > 0) test = ' ' + test;

    if (output[line].length + test.length > k) {
      line++;
      output[line] = '';
      test = test.substring(1);
    }
    output[line] += test;
  }
  return output;
}

const s1 = "the";
const k1 = 10;

console.log(solution(s1,k1));