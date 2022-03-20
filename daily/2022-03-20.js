/**
 * Author: Cody Zornes
 * Date: 2022-03-20
 * 
 * DCP #47 
 * Desc: Given an array of stock prices in chronological order, calc the
 * max profit you could hav emade from buying and selling that stock once.
 * you must buy before you can sell.
 * 
 * Ex input: [9, 11, 8, 3, 7, 10]
 * Ex output: 5
 */

// buy price  = Infinity
// potential = 0

// for all els
  // if el < buy price
    // buy price = new el
    // continue
  // delta = el - buy price
  // if delta > potential
    // potential = delta

// return potential

const input1 = [4,3,2,1];

const potentialProfits = (array) => {
  let buyPrice = Infinity;
  let potential = 0;

  for (const price of array) {
    if (price < buyPrice) {
      buyPrice = price;
      continue;
    }
    let delta = price - buyPrice;
    potential = Math.max(delta, potential);
  }

  return potential;
}

const output = potentialProfits(input1);
console.log(`we could have made ${output} monies`);