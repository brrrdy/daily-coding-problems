/**
 * Author: Cody Zornes
 * Date: 
 * 
 * DCP #45
 * Desc: Using a function rand5() that returns an integer from 1 to 5 inclusive
 * implement a function rand7()
 * 
 */

// x = 5, y = 7

const rand7s = new Map();

const rand5 = () => {
  return Math.ceil(Math.random() * 5);
}

const MATRIX = [
  [ 1, 2, 3, 4, 5 ],
  [ 6, 7, 1, 2, 3 ],
  [ 4, 5, 6, 7, 1 ],
  [ 2, 3, 4, 5, 6 ],
  [ 7, 0, 0, 0, 0 ]
];

const rand7 = () => {
  let result = 0;
  while (result === 0) {
    let i = rand5();
    let j = rand5();
    result = MATRIX[i-1][j-1];
  }
  return result;
}

let i = 0;
while (i < 1000) {
  let rand = rand7();
  if (!rand7s.has(rand)) {
    rand7s.set(rand, 1);
  } else {
    const count = rand7s.get(rand);
    rand7s.set(rand, count+1);
  }
  i++;
}

const sortedRands = new Map([...rand7s.entries()].sort());
for (const [key, value] of sortedRands) {
  console.log(`There are ${value} number of ${key}s`);
}