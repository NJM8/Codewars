// 7 kyu - Given an array of strings representing a list of usernames, return true only if all usernames comply with your company's guidelines. Return false otherwise.

// The guidelines say that the username is valid only if:

//     it is between 6-10 characters long;
//     contains at least 1 lowercase letter;
//     contains at least 1 number;
//     contains only numbers and lowercase letters.

// Examples of arrays that will be tested:

// const usernames1 = ['john123', 'alex222', 'sandra1']; // returns true

// const usernames2 = ['john123', 'alex222', 'sandraW']; // returns false because sandraW has no number

// const usernames3 = ['john_123', 'alex222', 'sandra1']; // returns false because john_123 contains an invalid character

// Notes:

//     You will always be given an array with at least 1 string to check.

function authList(arr) {
  let regex = new RegExp(/^(?=.*\d+)(?=.*[a-z]+)[a-z\d]{6,10}$/, 'g');
  let results = arr.reduce((array, name) =>{
    array.push(name.match(regex));
    return array;
  }, []);
  
  for (let i = 0; i < results.length; i++) {
    if (!results[i]) {
      return false;
    }
  }
  
  return true;
}