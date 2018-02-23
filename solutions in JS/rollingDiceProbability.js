// 5 kyu - When we throw 2 classical dice (values on each side from 1 to 6) we have 36 (6 * 6) different results.

// We want to know the probability of having the sum of the results equals to 11. For that result we have only the combination of 6 and 5. So we will have two events: {5, 6} and {6, 5}

// So the probability for that result will be:

// P(11, 2) = 2/(6*6) = 1/18    (The two is because we have 2 dice)

// Now, we want to calculate the probability of having the sum equals to 8. The combinations for that result will be the following: {4,4}, {3,5}, {5,3}, {2,6}, {6,2} with a total of five combinations.

// P(8, 2) = 5/36

// Things may be more complicated if we have more dices and sum values higher.

// We want to know the probability of having the sum equals to 8 but having 3 dice.

// Now the combinations and corresponding events are:

// {2,3,3}, {3,2,3}, {3,3,2}
// {2,2,4}, {2,4,2}, {4,2,2}
// {1,3,4}, {1,4,3}, {3,1,4}, {4,1,3}, {3,4,1}, {4,3,1}
// {1,2,5}, {1,5,2}, {2,1,5}, {5,1,2}, {2,5,1}, {5,2,1}
// {1,1,6}, {1,6,1}, {6,1,1}

// A total amount of 21 different combinations

// So the probability is:
// P(8, 3) = 21/(6*6*6) = 0.09722222222222222

// Summarizing the cases we have seen with a function that receives the two arguments

// rolldice_sum_prob(11, 2) == 0.0555555555 # or 1/18
// rolldice_sum_prob(8, 2) ==  0.13888888889# or 5/36
// rolldice_sum_prob(8, 3) == 0.0972222222222  # or 7/72

// And think why we have this result:

// rolldice_sum_prob(22, 3) == 0

// Create the function rolldice_sum_prob() for this calculation.

// Have a nice time!

// (You do not have to round the results)


function rolldiceSumProb(num, dice){
  if (num > dice * 6) {
    return 0;
  }
  let combinations = [];

  for (let i = 0; i < Math.pow(6, dice); i++) {
    combinations.push([]);
  }

  combinations = createDiceArrays(dice, combinations);

  combinations = combinations.reduce((array, element) => {
    let sum = element.reduce((a, b) => a + b);
    if (sum === num) {
      array.push(element);
    }
    return array;
  }, []);

  return combinations.length / Math.pow(6, dice);
}

function createDiceArrays(num, array){
  if (num === 0) {
    return array;
  } else {
    let countOne = 1;
    let countTwo = 1;
    let limit =  Math.pow(6, num - 1) + 1;
    array.map(element => {
      element.push(countOne);
      countTwo += 1;
      if (countTwo === limit) {
        countOne += 1;
        countTwo = 1;
      }
      if (countOne === 7) {
        countOne = 1;
        countTwo = 1;
      }
    })
    return createDiceArrays(num - 1, array);
  }
}


console.log(rolldiceSumProb(11, 2));
console.log('Expected answer: 0.055555555555');

console.log(rolldiceSumProb(8, 2));
console.log('Expected answer: 0.13888888889');

console.log(rolldiceSumProb(8, 3));
console.log('Expected answer: .0972222222222');



// clever answer from evk, niweic

// function rolldiceSumProb(arr, totalSides){
//     if (arr<totalSides || arr>totalSides*6) return 0;
//     if (totalSides===0) return 1;
//     let p = 0;
//     for (let i=1; i<=6; i++) p += rolldiceSumProb(arr-i, totalSides-1);
//     return p/6;
// }

// description: What it does is basically dynamic programming:

// Let's say there are k ways to get a n dice sum of x. Consider the last dice: It can have 6 possibilities: 1,2,3,4,5,6.

// So we consider in each case: How many ways can we get a n-1 dice sum of x-1 to x-6? Then we add them all up together, and this is the sum we want (since we already considered all the possible results for our last dice).

// We do this until we run out of dices (which is a possibility, so we return 1), or the dice sub-sum becomes impossible to achieve (which is a dead end, so we return 0).

// Finally, we divide by 6 for each dice to turn the number of possibilities into probabilities.



