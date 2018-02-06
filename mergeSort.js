// In this excercise, we will implement the "merge" function from MergeSort.

// MergeSort is often taught in Computer Science as the canonical example of the "Divide and Conquer" algorithm. The strategy of MergeSort is both simple and profound, leveraging two simple-to-prove mathematical facts (1. That every list of 1 element is "sorted" ... and 2. It is much easier to combine two already-sorted lists into 1 sorted list than it is to sort a big list all at once) to yield an algorithm with a worst-case complexity of O(n log n).

// Basically, MergeSort works like this:

//     If we get a list of size 1, then it's already sorted: we're done. Just return that value.
//     Otherwise; break the list you have to sort in half: 2a. MergeSort the first half. 2b. MergeSort the second half. 2c. "Merge" the two sorted lists for 2a and 2b together. Voila: sorted.

// 2c is where the MergeSort "merge" function comes in. It takes two already-sorted lists (arrays, in this example) and returns one large sorted list.

// The name of the function in this example is "mergesorted". It should return a big sorted array from two smaller sorted arrays: e.g.

// mergesorted([1,2],[3,4]) //should: [1,2,3,4]

// mergesorted([1,2],[3]) //should: [1,2,3]

// mergesorted([1],[2, 3]) //should: [1,2,3]

// Since this function is being used in an algorithm, try to optimize for speed and browse the solutions when you're done to see how others approached the problem.

// TODO: implement 'mergesorted'
// test ensures: a and b are both arrays, consisting entirely of integers...
//...,both arrays are sorted and contain at least 1 integer.
// ALSO: the Array.sort function has been disabled for this excercise.

function mergesorted(left, right){
  let newArr = [];
  let leftCount = 0;
  let rightCount = 0;

  while (leftCount < left.length && rightCount < right.length){
    if (left[leftCount] < right[rightCount]){
      newArr.push(left[leftCount++]);
    } else {
      newArr.push(right[rightCount++]);
    }
  }

  return newArr.concat(left.slice(leftCount)).concat(right.slice(rightCount));
}

console.log(mergesorted([1,2],[3,4]));
console.log([1,2,3,4]);

console.log(mergesorted([1,2],[3]));
console.log([1,2,3]);

console.log(mergesorted([1],[2,3]));
console.log([1,2,3])

// TODO: Replace examples and use TDD development by writing your own tests

// These are some CW specific test methods available:
//    Test.expect(boolean, [optional] message)
//    Test.assertEquals(actual, expected, [optional] message)
//    Test.assertSimilar(actual, expected, [optional] message)
//    Test.assertNotEquals(actual, expected, [optional] message)

// NodeJS assert is also automatically required for you.
//    assert(true)
//    assert.strictEqual({a: 1}, {a: 1})
//    assert.deepEqual({a: [{b: 1}]}, {a: [{b: 1}]})

// You can also use Chai (http://chaijs.com/) by requiring it yourself
// var expect = require("chai").expect;
// var assert = require("chai").assert;
// require("chai").should();

// describe("Solution", function(){
//   it("should test for something", function(){
//     Test.assertEquals(mergesorted([1,2],[3,4]), [1,2,3,4]);
//     Test.assertEquals(mergesorted([1,2],[3]), [1,2,3]);
//     Test.assertEquals(mergesorted([1],[2,3]), [1,2,3]);
//   });
// });








