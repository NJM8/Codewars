// 6 kyu - Write a reverseWords function that accepts a string a parameter, and reverses each word in the string. Any spaces in the string should be retained.

function reverseWords(str) {
  return str.split(' ').map(word => word.split('').reverse().join('')).join(' ');
}


console.log(reverseWords('The quick brown fox jumps over the lazy dog.'));
console.log('ehT kciuq nworb xof spmuj revo eht yzal .god');

console.log(reverseWords('apple'));
console.log('elppa');

console.log(reverseWords('a b c d'));
console.log('a b c d');

console.log(reverseWords('double  spaced  words'));
console.log('elbuod  decaps  sdrow');


