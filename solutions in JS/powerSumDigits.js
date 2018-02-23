

// The number 81 has a special property, a certain power of the sum of its digits is equal to 81 (nine squared). Eighty one (81), is the first number in having this property (not considering numbers of one digit). The next one, is 512. Let's see both cases with the details

// 8 + 1 = 9 and 9 squared = 81

// 512 = 5 + 1 + 2 = 8 and 8 cubed = 512

// We need to make a function, power_sumDigTerm(), that receives a number n and may output the n-th term of this sequence of numbers. The cases we presented above means that

// power_sumDigTerm(1) == 81

// power_sumDigTerm(2) == 512

// Happy coding!


// Here is my first solution which was much too slow, took forever to calculate the 30th number;
// let results = {};

// function powerSumDigTerm(n){
//     console.log(n);
//     let num = 11;
//     let power = 2;
//     let powerSum = numPower(num, power);
//     let count = 0;

//     while (count !== n) {
//       powerSum = numPower(num, power);
//       if (powerSum === num) {
//         count += 1;
//         power = 2;
//         num += 1;
//       }
//       if (powerSum < num) {
//         power += 1;
//       }
//       if (powerSum > num) {
//         power = 2;
//         num += 1;
//       }
//       if (power > num) {
//         power = 2;
//         num += 1;
//       }
//     }
//     return powerSum;
// }

// function numPower(num, power){ 
//   if (results.hasOwnProperty([num, power])) {
//     return results[[num, power]];
//   } else {
//     let powerSum = Math.pow(num.toString().split('').reduce((a,b) => Number(a) + Number(b)), power);
//     results[[num, power]] = powerSum;
//     return powerSum;
//   }
// }

// much faster, just calculate a bunch of results with a few for loops and store them if it is a match! simple

function powerSumDigTerm(num){
  let array = [];
  for (let i = 2; i < 400; i++) {
    for (let j = 2; j < 10; j++) {
      let powerSum = Math.pow(i, j);
      if (sumDigits(powerSum) === i) {
        array.push(powerSum);
        if (array.length === 50) {
          break;
        }
      }
    }
  }
  array.sort((a, b) => a - b);
  return array[num - 1];
}

function sumDigits(num){
  let sum = 0;
  let numCopy = num;
  while (numCopy > 0){
    sum += numCopy % 10;
    numCopy = Math.floor(numCopy/10);
  }
  return sum;
}


console.log(powerSumDigTerm(1));
console.log('Expected: ' + 81);

console.log(powerSumDigTerm(2));
console.log('Expected: ' + 512);

console.log(powerSumDigTerm(3));
console.log('Expected: ' + 2401);

console.log(powerSumDigTerm(4));
console.log('Expected: ' + 4913);








