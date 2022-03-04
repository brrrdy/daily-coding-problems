/**
 * Author: Cody Zornes
 * Date: 2022/03/04
 * 
 * DCP #29
 * Desc: Implement run-length encoding and decoding. No need for validations.
 * 
 * Ex input: "AAAABBBCCDAA"
 * Ex output encoded: "4A3B2C1D2A"
 */


function rlEncode(s) {
  let charList = s.split('');
  let encoded = "";
  
  let charCounter = 1;
  let charTest = charList.shift();

  // O(N)
  for (const char of charList) {
    // if we don't have a new char
    if (char === charTest) {
      // incrememnt counter
      charCounter += 1;
      // go to next char
    } else {
      // add encoded char to encoded str
      encoded += charCounter.toString() + charTest;
      // reset counter to 1
      charCounter = 1;
      // update charTest
      charTest = char;
    }
  }
  return encoded + charCounter.toString() + charTest;
}

function rlDecode(s) {
  let decode = "";
  
  // Match any group consisting of 1 or more digits + plus single capitalized character
  const regexp = /\d+[A-Z]/g;
  const decodeUnits = s.matchAll(regexp);
  
  for (const unit of decodeUnits) {
    // last char in string is our character, rest is the count
    const char = unit[0].slice(-1);
    const count = Number(unit[0].slice(0,-1));
    // reconstruct string parts via array
    decode += new Array(count).fill(char).join('');
  }
  return decode;
}

const ex1 = "AAAABDDDDDBCCDAAAAACCCCAAAAAAAAAAAAAAAAAAAAAAA";
const encode = rlEncode(ex1);
const decode = rlDecode(encode);
console.log(`Encoded ${ex1} = ${encode}`);

console.log(`Decoded ${encode} = ${decode}`);

console.assert(ex1 === decode);
