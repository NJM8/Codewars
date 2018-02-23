// 5 kyu - There is an array of strings. All strings contains similar letters except one. Try to find it!

// findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]) === 'BbBb'
// findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]) === 'foo'

// Strings may contain spaces. Spaces is not significant, only non-spaces symbols matters. E.g. string that contains only spaces is like empty string.

// It’s guaranteed that array contains more than 3 strings.


function findUniq(arr) {
  let normalizedArray = arr.map(word => word.toLowerCase().split('').sort().join(''));

  let firstWordFound = [normalizedArray[0], 1];
  let secondWordFound = [0, 0];

  for (let i = 1; i < normalizedArray.length; i ++) {
    let wordArray = normalizedArray[i].split('');
    let match = wordArray.every(letter => firstWordFound[0].includes(letter));
    if (match) {
      firstWordFound[1] += 1;
    } else {
      if (secondWordFound[0] === 0) {
        secondWordFound[0] = normalizedArray[i];
      } else {
        secondWordFound[1] += 1;
      }
    }
  }

  let unique = firstWordFound[1] > secondWordFound[1] ? secondWordFound[0] : firstWordFound[0];

  return arr[normalizedArray.indexOf(unique)];
}




console.log(findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]));
console.log('Expected: BbBb');
console.log(findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]));
console.log('Expected: foo');
console.log(findUniq([ 'silvia', 'vasili', 'victor' ]));
console.log('Expected: victor');
console.log(findUniq([ 'Tom Marvolo Riddle', 'I am Lord Voldemort', 'Harry Potter' ]));
console.log('Expected: Harry Potter');
console.log(findUniq([ '    ', 'a', ' ' ]));
console.log('Expected: a');
console.log(findUniq([ 'o', 'p', 'p', 'p' ]));
console.log('Expected: o');







