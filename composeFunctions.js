// Let's make a function called compose that accepts a value as a parameter, as well as any number of functions as additional parameters.

// The function will return the value that results from the first parameter being used as a parameter for all of the accepted function parameters in turn. So:

// var doubleTheValue = function(val) { return val * 2; }
// var addOneToTheValue = function(val) { return val + 1; }

// compose(5, doubleTheValue) // should === 10
// compose(5, doubleTheValue, addOneToTheValue) // should === 11

// If only a single parameter is passed in, return that parameter.


var compose = function(){
  let args = Array.from(arguments);
  let num = args[0];
  let functions = args.slice(1);

  return functions.reduce((total, func) => {
    return func(total);
  }, num);
};



let addOne = val => val + 1;
let double = val => val * 2;
let triple = val => val * 3;
let divide = val => val / 2;

console.log(compose(5, double));
console.log('Expected: ' + 10);

console.log(compose(5, triple));
console.log('Expected: ' + 15);

console.log(compose(5, addOne, double));
console.log('Expected: ' + 12);

console.log(compose(5, triple, addOne, divide, addOne, double));
console.log('Expected: ' + 18);


