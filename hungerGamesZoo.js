// Story

// A freak power outage at the zoo has caused all of the electric cage doors to malfunction and swing open...

// All the animals are out and some of them are eating each other!
// It's a Zoo Disaster!

// Here is a list of zoo animals, and what they can eat

//     antelope eats grass
//     big-fish eats little-fish
//     bug eats leaves
//     bear eats big-fish
//     bear eats bug
//     bear eats chicken
//     bear eats cow
//     bear eats leaves
//     bear eats sheep
//     chicken eats bug
//     cow eats grass
//     fox eats chicken
//     fox eats sheep
//     giraffe eats leaves
//     lion eats antelope
//     lion eats cow
//     panda eats leaves
//     sheep eats grass

// Kata Task
// INPUT

// A comma-separated string representing all the things at the zoo
// TASK

// Figure out who eats who until no more eating is possible.
// OUTPUT

// A list of strings (refer to the example below) where:

//     The first element is the initial zoo (same as INPUT)
//     The last element is a comma-separated string of what the zoo looks like when all the eating has finished
//     All other elements (2nd to last-1) are of the form X eats Y describing what happened

// Notes

//     Animals can only eat things beside them

//     Animals always eat to their LEFT before eating to their RIGHT

//     Always the LEFTMOST animal capable of eating will eat before any others

//     Any other things you may find at the zoo (which are not listed above) do not eat anything and are not edible

// Example
//   INPUT 
// "fox,bug,chicken,grass,sheep"
// 1 fox can't eat bug 
// "fox,bug,chicken,grass,sheep"
// 2 bug can't eat anything  
// "fox,bug,chicken,grass,sheep"
// 3 chicken eats bug  
// "fox,chicken,grass,sheep"
// 4 fox eats chicken  
// "fox,grass,sheep"
// 5 fox can't eat grass 
// "fox,grass,sheep"
// 6 grass can't eat anything  
// "fox,grass,sheep"
// 7 sheep eats grass  
// "fox,sheep"
// 8 fox eats sheep  
// "fox"
//   OUTPUT  
// ["fox,bug,chicken,grass,sheep", "chicken eats bug", "fox eats chicken", "sheep eats grass", "fox eats sheep", "fox"]

let animalsObj = {
  'antelope': ['grass'],
  'big-fish': ['little-fish'], 
  'bug': ['leaves'], 
  'bear': ['big-fish', 'bug', 'chicken', 'cow', 'leaves', 'sheep'],
  'chicken': ['bug'],
  'cow': ['grass'],
  'fox': ['chicken', 'sheep'],
  'giraffe': ['leaves'],
  'lion': ['antelope', 'cow'],
  'panda': ['leaves'],
  'sheep': ['grass'],

  canEat : function(animal){
    return this[animal];
  }
}

var whoEatsWho = function(zoo) {
  let zooSplit = zoo.split(',');
  let result = [zoo];
  let someoneIsEdible = true;
  let whoCanIEat = undefined;

  while (someoneIsEdible) {
    for (let i = 0; i < zooSplit.length; i++) {
      if (animalsObj.hasOwnProperty(zooSplit[i])){
        whoCanIEat = animalsObj.canEat(zooSplit[i]);
      } else {
        continue;
      }
      if (whoCanIEat.includes(zooSplit[i - 1])) {
        result.push(`${zooSplit[i]} eats ${zooSplit[i - 1]}`);
        zooSplit.splice(i - 1, 1);
        break;
      } else if (whoCanIEat.includes(zooSplit[i + 1])) {
        result.push(`${zooSplit[i]} eats ${zooSplit[i + 1]}`);
        zooSplit.splice(i + 1, 1);
        break;
      }
    }

    if (!isAnyoneEdible(zooSplit)) {
      someoneIsEdible = false;
    }
  }

  result.push(zooSplit.join(','));

  return result;
}

let isAnyoneEdible = function(animals){
  let whoICanEat = undefined;
  let result = false;
  let leftAnimal;
  let rightAnimal;

  animals.forEach((animal, index) => {
    if (animalsObj.hasOwnProperty(animal)) {
      whoICanEat = animalsObj.canEat(animal);
      leftAnimal = animals[index - 1];
      rightAnimal = animals[index + 1];
      if (leftAnimal) {
        if (whoICanEat.includes(leftAnimal)) {
          result = true;
        }
      }
      if (rightAnimal) {
        if (whoICanEat.includes(rightAnimal)) {
          result = true;
        }
      }
    } 
  });

  return result;
}


var input = "fox,bug,chicken,grass,sheep";
var expected =  [
  "fox,bug,chicken,grass,sheep", 
  "chicken eats bug", 
  "fox eats chicken", 
  "sheep eats grass", 
  "fox eats sheep", 
  "fox"
  ];
let inputTwo = 'chicken,fox,leaves,bug,grass,sheep';
let inputThree = 'grass,grass,cow,leaves,bug,big-fish,leaves,bear';

console.log(whoEatsWho(inputThree));
// console.log('Expected: ' + expected);






