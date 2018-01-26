// 5 kyu - You need to write regex that will validate a password to make sure it meets the following criteria:

//     At least six characters long
//     contains a lowercase letter
//     contains an uppercase letter
//     contains a number

// Valid passwords will only be alphanumeric characters.


function validate(password) {
  if (/^[a-z0-9]+$/gi.test(password)) {
    let length = (/.{6}/).test(password);
    let lowercaseLetter = /[a-z]/g.test(password);
    let uppercaseLetter = /[A-Z]/g.test(password);
    let number = /[0-9]/g.test(password);

    if (length && lowercaseLetter && uppercaseLetter && number) {
      return true;
    }
  }
  return false;
}