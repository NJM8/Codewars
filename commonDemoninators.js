// 5 kyu - Common denominators

// You will have a list of rationals in the form

//  { {numer_1, denom_1} , ... {numer_n, denom_n} }

// or

//  [ [numer_1, denom_1] , ... [numer_n, denom_n] ]

// or

//  [ (numer_1, denom_1) , ... (numer_n, denom_n) ]

// where all numbers are positive ints.

// You have to produce a result in the form

//  (N_1, D) ... (N_n, D)

// or

//  [ [N_1, D] ... [N_n, D] ]

// or

//  [ (N_1', D) , ... (N_n, D) ]

// or

// {{N_1, D} ... {N_n, D}}

// depending on the language (See Example tests)

// in which D is as small as possible and

//  N_1/D == numer_1/denom_1 ... N_n/D == numer_n,/denom_n.

// Example:

// convertFracs [(1, 2), (1, 3), (1, 4)] `shouldBe` [(6, 12), (4, 12), (3, 12)]


function convertFrac(lst){
  let returnString = '';
  let convertedArray = findGCD(lst);

  for (let i = 0; i < convertedArray.length; i++) {
    returnString += `(${convertedArray[i][0]},${convertedArray[i][1]})`;
  }
  return returnString;
}

function findGCD(array){
  let denominators = [];
  array.forEach(element => denominators.push(element[1]));
  let returnList = Array.from(array);
  
  while (!allEqual(denominators)) {
    let smallestIndex = denominators.indexOf(Math.min(...denominators));
    denominators[smallestIndex] += returnList[smallestIndex][1];
  }

  denominators.forEach((element, index) => {
    returnList[index][0] *= denominators[index] / returnList[index][1];
    returnList[index][1] = denominators[index];
  })
  
  return returnList;
}

function allEqual(array){
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== array[0]) {
      return false;
    }
  }
  return true;
}








