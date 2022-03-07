/**
 * Author: Cody Zornes
 * Date: 2022/03/07
 * 
 * DCP #33
 * Desc: Compute the running median of a sequence of numbers. That is, 
 * given a stream of numbers, print out the median of the list so far 
 * on each new element.
 * 
 * Ex input: [2, 1, 5, 7, 2, 0, 5]
 * Ex output:
 * 2
 * 1.5
 * 2
 * 3.5
 * 2
 * 2
 * 2
 */

function runningMedian(stream) {
  let median = 0;
  let sorted = [];

  // O(N)
  for (let i = 0; i < stream.length; i++) {
    sorted.push(stream[i]);
    // O(NlogN)
    sorted = sorted.sort((a,b) => a-b);
    //console.log(sorted);
    if (i === 0) {
      median = stream[i];
    } else {
      let n = sorted.length/2;
      if (sorted.length % 2 === 0) { // even #
        median = (sorted[n] + sorted[n-1])/2;
      } else { // odd #
        median = sorted[Math.floor(n)];
      }
    }
    console.log(median);
  }
}

const s1 = [2, 1, 5, 7, 2, 0, 5];

runningMedian(s1);