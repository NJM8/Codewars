// 4 kyu - Given two strings s1 and s2, we want to visualize how different the two strings are. We will only take into account the lowercase letters (a to z). First let us count the frequency of each lowercase letters in s1 and s2.

// s1 = "A aaaa bb c"

// s2 = "& aaa bbb c d"

// s1 has 4 'a', 2 'b', 1 'c'

// s2 has 3 'a', 3 'b', 1 'c', 1 'd'

// So the maximum for 'a' in s1 and s2 is 4 from s1; the maximum for 'b' is 3 from s2. In the following we will not consider letters when the maximum of their occurrences is less than or equal to 1.

// We can resume the differences between s1 and s2 in the following string: "1:aaaa/2:bbb" where 1 in 1:aaaa stands for string s1 and aaaa because the maximum for a is 4. In the same manner 2:bbb stands for string s2 and bbb because the maximum for b is 3.

// The task is to produce a string in which each lowercase letters of s1 or s2 appears as many times as its maximum if this maximum is strictly greater than 1; these letters will be prefixed by the number of the string where they appear with their maximum value and :. If the maximum is in s1 as well as in s2 the prefix is =:.

// In the result, substrings (a substring is for example 2:nnnnn or 1:hhh; it contains the prefix) will be in decreasing order of their length and when they have the same length sorted in ascending lexicographic order (letters and digits - more precisely sorted by codepoint); the different groups will be separated by '/'. See examples and "Example Tests".

// Hopefully other examples can make this clearer.

// s1 = "my&friend&Paul has heavy hats! &"
// s2 = "my friend John has many many friends &"
// mix(s1, s2) --> "2:nnnnn/1:aaaa/1:hhh/2:mmm/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

// s1 = "mmmmm m nnnnn y&friend&Paul has heavy hats! &"
// s2 = "my frie n d Joh n has ma n y ma n y frie n ds n&"
// mix(s1, s2) --> "1:mmmmmm/=:nnnnnn/1:aaaa/1:hhh/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

// s1="Are the kids at home? aaaaa fffff"
// s2="Yes they are here! aaaaa fffff"
// mix(s1, s2) --> "=:aaaaaa/2:eeeee/=:fffff/1:tt/2:rr/=:hh"


function mix(s1, s2) {
  let arrOne = convertToArray(s1);
  let arrTwo = convertToArray(s2);
  let result = [];
  let uniqueOne = arrOne.reduce((array, eleOne) => {
      if (!arrTwo.every(eleTwo => eleOne[0] !== eleTwo[0])) {
      } else {
        array.push(`1:${eleOne}`);
      }
      return array;
    }, []);

  let uniqueTwo = arrTwo.reduce((array, eleTwo) => {
    if (!arrOne.every(eleOne => eleTwo[0] !== eleOne[0])) {
    } else {
      array.push(`2:${eleTwo}`);
    }
    return array;
  }, []);

  for (let i = 0; i < arrOne.length; i++) {
    for (let j = 0; j < arrTwo.length; j++) {
      if (arrOne[i][0] === arrTwo[j][0]) {
        if (arrOne[i].length > arrTwo[j].length) {
          result.push(`1:${arrOne[i]}`);
        } else if (arrOne[i].length < arrTwo[j].length) {
          result.push(`2:${arrTwo[j]}`);
        } else {
          result.push(`=:${arrTwo[j]}`);
        } 
      }
    }
  }

  result = result.concat(uniqueTwo.concat(uniqueOne));
  result = sort(result);
  
  return result.join('/');
}

function sort(array){
  let obj = {};
  let arr = [];

  for (let i = 0; i < array.length; i++) {
    let lengthKey = array[i].length;
    let orderKey = array[i][0];
    if (!obj.hasOwnProperty(lengthKey)) {
      obj[lengthKey] = {
        [orderKey]: [array[i]]
      }
    } else if (!obj[lengthKey].hasOwnProperty(orderKey)) {
      obj[lengthKey][orderKey] = [array[i]];
    } else {
      obj[lengthKey][orderKey].push(array[i]);
    }
  }

  let objKeys = Object.keys(obj);
  objKeys = objKeys.sort((a, b) => b - a);
  
  objKeys.forEach(key => {
    let subKeys = Object.keys(obj[key]);
    subKeys = subKeys.sort((a, b) => a > b);
    subKeys.forEach(subKey => {
      let array = obj[key][subKey];
      array = array.sort((a, b) => a[2] > b[2])
      array.forEach(element => arr.push(element));
    });
  });

  return arr;
}

function convertToArray(string){
  let obj = {};
  let arr = [];

  for (let i = 0; i < string.length; i++) {
    let letter = string[i];
    if (letter.match(/[a-z]/)) {
      obj[letter] = 1 + (obj[letter] || 0);
    }
  }

  for (let letter in obj) {
    if (obj[letter] < 2) {
      delete obj[letter];
    } else {
      let letterString = '';
      for (let i = 0; i < obj[letter]; i++) {
        letterString += letter;
      }
      arr.push(letterString);
    }
  }

  return arr;
}




// My fav solution by another user - dirkluijk

const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

function mix(s1, s2) {
  return alphabet
    .map(char => {
      const s1Count = s1.split('').filter(x => x === char).length,
            s2Count = s2.split('').filter(x => x === char).length,
            maxCount = Math.max(s1Count, s2Count);

      return {
        char: char,
        count: maxCount,
        src: maxCount > s1Count ? '2' : maxCount > s2Count ? '1' : '='
      };
    })
    .filter(c => c.count > 1)
    .sort((objA, objB) => objB.count - objA.count || (objA.src + objA.char > objB.src + objB.char ? 1 : -1))
    .map(c => `${c.src}:${c.char.repeat(c.count)}`)
    .join('/');
}

