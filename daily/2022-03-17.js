/**
 * Author: Cody Zornes
 * Date: 2022-03-17
 * 
 * DCP #44
 * Desc: Given an array, count the number of "inversions" it has. Assume each
 * element in the array is distinct. A sorted list has zero inversions. 
 *
 * Ex input: [2, 4, 1, 3, 5]
 * (2,1) (4,1) (4,3)
 * Ex output: 3
 *
 * in: [5, 4, 3, 2, 1]
 * out: 10 (each distinct pair forms an inversion, ie 5,4 5,3 5,2 5,1 4,3 
 * 4,2 4,1 3,2 3,1 2,1)
 */

const solutionNSquared = (array) => {
  let inversions = 0;
  let delta = 0;
  let min, max;
  min = max = array[0];
  
  for (let i = 1; i < array.length; i++) {
    // use merge sort, count the inversions and the number of inversions
    // when combining the sorted sub arrays. I should re-implement merge
    // sort and come back to this problem :')
  }
  
  return inversions;
}

const ex1 = [5, 4, 3, 2, 1]
console.log(solutionNSquared(ex1));
