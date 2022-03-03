/**
 * Author: Cody Zornes
 * Date: 2022/03/03
 * 
 * DCP #28
 * Desc: given a sequence of words (w) and line length (k), write algo to 
 * justify as many words as possible on each line with spaces distributed
 * between each word. Extra spaces, if needed, should be distributed as
 * evenly as possible starting from left. Single word line should have
 * spaces on right.
 *
 * Each word is guaranteed not to be longer than k. !!
 *
 * WRT time complexity N is length of w
 *
 * Ex input: 
["the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"], k = 16
 * Ex output: 
["the  quick brown", # 1 extra space on the left
"fox  jumps  over", # 2 extra spaces distributed evenly
"the   lazy   dog"] # 4 extra spaces distributed evenly
 */

// Total time complexity = O(N*k)
function solution(w, k) {
  let lines = [];
  
  if (w.length !== 0) {
    lines.push(new Array());
  }

  let i = 0;
  // O(N)
  while (w.length > 0) {
    let lineCounter = k;
    let nextLength = w[0].length+1;
    // O(k/average length of w element)
    while (nextLength <= lineCounter) {
      lines[i].push(w.shift());
      lineCounter -= nextLength;
      if (w.length>0) {
        nextLength = w[0].length+1;
      }
    }
    // add spaces here
    if (lines[i].length === 1) {
      let spaceString = new Array(k-lines[i][0].length).fill(' ').join('');
      if (spaceString !== '') {
        lines[i].push(spaceString);
      }
    } else {
      const spaceDivisions = lines[i].length-1;
      let spacesPerWord = Math.floor((lineCounter+lines[i].length)/spaceDivisions);
      let leftoverSpaces = (lineCounter+lines[i].length)%spaceDivisions;
      const spaceString = new Array(spacesPerWord).fill(' ').join('');
      
      for (let k = 1; k < lines[i].length; k=k+2) {
        lines[i].splice(k, 0, spaceString);
        if (leftoverSpaces > 0) {
          lines[i][k] += ' ';
          leftoverSpaces--;
        }
      }
    }

    
    if (w.length>0) {
      lines.push(new Array());
      i++;
    }
  }

  // O(N)
  return lines.map(line => line.join(''));
}

function logSolution(a) {
  for (let line of a) {
    console.log("'"+ line + "'");
  }
}


let ex1 = ["the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"];
let k1 = 16;

let ex2 = ["aforementioned", "total", "recall"];
let k2 = 16;


let s = solution(ex2, k2);
logSolution(s);