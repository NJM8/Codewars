// 6 kyu - There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

// It’s guaranteed that array contains more than 3 numbers.

// The tests contain some very huge arrays, so think about performance.



function findUniq(arr) {
  let firstNumFound = [arr[0],0];
  let secondNumFound = [0,0]
  
  for (let i = 0, end = arr.length; i < end; i++) {
    if (arr[i] === firstNumFound[0]) {
      firstNumFound[1] += 1;
    } else if (arr[i] === secondNumFound[0]) {
      secondNumFound[1] += 1;
    } else {
      secondNumFound[0] = arr[i];
    }
  }
  
  return firstNumFound[1] > secondNumFound[1] ? secondNumFound[0] : firstNumFound[0];
}