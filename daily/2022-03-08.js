/**
 * Author: Cody Zornes
 * Date: 2022/03/08
 * 
 * DCP #34
 * Desc: Given a string find palindrome that can be made by inserting
 * the fewest chars possible. Break ties by alphabetical sort
 * 
 * Ex input: "race"
 * Ex output: "ecarace"
 */



function findPal(string) {
  if (isPalindrome(string)) {
    return string;
  }
  
  let changeCount = 0;
  
  
}

function isPalindrome(test) {
  let reverse = test.split('').reverse().join('');

  if (test === reverse) {
    return true;
  } else {
    return false;  
  }
}

const s1 = "race";
console.log(`result is "${findPal(s1)}"`);