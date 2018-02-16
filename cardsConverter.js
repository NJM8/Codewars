// You are going to write a simple function - decoder/encoder for poker cards (any card game in fact).
// Your task is to encode array of human readable symbols to array of codes or decode it doing this process with reversed way.

// ['Ac', 'Ks', '5h', 'Td', '3c'] -> [0, 2 ,22, 30, 51] //encoding
// [0, 51, 30, 22, 2] -> ['Ac', '3c', 'Td', '5h', 'Ks'] //decoding

// Remember that the returned array must be sorted from lowest to highest code (or its symbol value).

// Card suits:

// name    |  symbol   |  precedence
// ---------------------------------
// club          c            0
// diamond       d            1
// heart         h            2
// spade         s            3

// 52-card deck:


//   c    |     d     |    h     |    s
// ---------------------------------------
//  0: A      13: A      26: A      39: A
//  1: 2      14: 2      27: 2      40: 2
//  2: 3      15: 3      28: 3      41: 3
//  3: 4      16: 4      29: 4      42: 4
//  4: 5      17: 5      30: 5      43: 5
//  5: 6      18: 6      31: 6      44: 6
//  6: 7      19: 7      32: 7      45: 7
//  7: 8      20: 8      33: 8      46: 8
//  8: 9      21: 9      34: 9      47: 9
//  9: T      22: T      35: T      48: T
// 10: J      23: J      36: J      49: J
// 11: Q      24: Q      37: Q      50: Q
// 12: K      25: K      38: K      51: K

// Requirements
// input: array of strings (symbols)/integers (codes) you must encode/decode
// output: array of integers (codes)/strings (symbols) sorted by code values ASC

//     if input is not defined or is not and array return null, if is empty array return empty array

const cards = {
  0: 'Ac',
  1: '2c',
  2: '3c',
  3: '4c',
  4: '5c',
  5: '6c',
  6: '7c',
  7: '8c',
  8: '9c',
  9: 'Tc',
  10: 'Jc',
  11: 'Qc',
  12: 'Kc',
  13: 'Ad',
  14: '2d',
  15: '3d',
  16: '4d',
  17: '5d',
  18: '6d',
  19: '7d',
  20: '8d',
  21: '9d',
  22: 'Td',
  23: 'Jd',
  24: 'Qd',
  25: 'Kd',
  26: 'Ah',
  27: '2h',
  28: '3h',
  29: '4h',
  30: '5h',
  31: '6h',
  32: '7h',
  33: '8h',
  34: '9h',
  35: 'Th',
  36: 'Jh',
  37: 'Qh',
  38: 'Kh',
  39: 'As',
  40: '2s',
  41: '3s',
  42: '4s',
  43: '5s',
  44: '6s',
  45: '7s',
  46: '8s',
  47: '9s',
  48: 'Ts',
  49: 'Js',
  50: 'Qs',
  51: 'Ks'
}

function cardsConverter(input){
  if (input === undefined || input === null || input === 0 || !Array.isArray(input)) {
    return null;
  }

  if (input.length === 0) {
    return input;
  }

  return input.map(card => {
    if (typeof(card) === 'number') {
      return cards[card];
    } else {
      for (key in cards) {
        if (cards[key] === card) {
          return Number(key);
        }
      }
    }
  }).sort((a, b) => {
    if (typeof(a) === 'string') {
      a = findKeyByValue(cards, a);
      b = findKeyByValue(cards, b);
      return a - b;
    } else {
      return a - b;
    }
  });
}

function findKeyByValue(object, value){
  return Object.keys(object).find(key => object[key] === value);
}



console.log(cardsConverter([50, 6, 13, 30, 37])); 
console.log('should return ["7c", "Ad", "5h", "Qh", "Qs"]');

console.log(cardsConverter(["5h", "7c", "Qh", "Qs", "Ad"]));
console.log('should return [6, 13, 30, 37, 50]');









