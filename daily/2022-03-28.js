/**
 * Author: Cody Zornes
 * Date: 2022-03-28
 * 
 * DCP #55
 * Desc: Implement a URL shortener with the following methods:
 * shorten(url), returns a six char alphanumeric string
 * restort(short), returns expanded URL, or null if URL doesn't exist
 * 
 * Ex input: https://www.microsoft.com/hello/test/long/url/page.aspx
 * Ex output:
 */

class UrlShortener {
  constructor(baseUrl = 'https://shor.ty/', encodeLength = 6) {
    this.base = baseUrl;
    this.dict = new Map();
    this.length = encodeLength;
  }

  shorten(url) {
    // handle existing url
    for (const [key, val] of this.dict.entries()) {
      if (url === val) {
        return this.base + key;
      }
    }
    // new url
    let code = makeCode(this.length);
    while (this.dict.has(code)) { // handle ID random collision
      code = makeCode(this.length);
    }
    this.dict.set(code, url);
    return this.base + code;
  }

  restore(short) {
    const code = short.replace(this.base, '');
    return (this.dict.has(code)) ? this.dict.get(code) : null;
  }
}


const makeCode = function make6DigitAlphaCode(length) {
  const output = [];
  output.push(randL());
  output.push(randL());
  output.push(randC());
  output.push(randD());
  output.push(randC());
  return output.join('');
}

const makeCodeLong = function makeAlphanumericCodeFromLength(length) {
  const output = [length];
  for (let i = 0; i < length; i++) {
    if (i % 2 === 0) {
      output[i] = randL();
    } else if (i % 3 === 0) {
      output[i] = randC();
    } else {
      output[i] = randD();
    }
  }
  return output.join('');
}
  
const randD = function randomDigit() {
  return randChar(NON_AMBIG_DIGITS);
} 

const randC = function randomCapitalLetter() {
  return randChar(NON_AMBIG_UPPERS);
}

const randL = function randomLowercaseLetter() {
  return randChar(NON_AMBIG_LOWERS);
} 

const randChar = function getRandomCharacterFromString(string) {
  const randIndex = Math.floor(Math.random()*string.length);
  return string.charAt(randIndex);
}

const NON_AMBIG_DIGITS = '23456789';
const NON_AMBIG_LOWERS = 'abcdefghjkmnpqrstvwxyz';
const NON_AMBIG_UPPERS = 'ABCDEFGHJKMNPQRSTVWXYZ';
        
const shorty = new UrlShortener();

const ex1 = shorty.shorten('https://www.microsoft.com/hello/test/long/url/page.aspx');
console.log(ex1);
const out1 = shorty.restore(ex1);
console.log(out1);
const ex2 = shorty.shorten('https://www.microsoft.com/hello/test/long/url/page.aspx');
console.log(ex2);
const out2 = shorty.restore('blahlbah');
console.log(out2);