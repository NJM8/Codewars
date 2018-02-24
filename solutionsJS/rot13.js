// 5 kyu - ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

// Please note that using "encode" in Python is considered cheating.


function rot13(message){
  let result = '';

  for (let i = 0; i < message.length; i++) {
    if (!message[i].match(/[a-zA-Z]/)) {
      result += message[i];
      continue;
    }
    let thisCharCode = message.charCodeAt(i);

    thisCharCode > 64 && thisCharCode < 91 ?
      thisCharCode > 77 ? thisCharCode -= 13 : thisCharCode += 13 :
      thisCharCode > 109 ? thisCharCode -= 13 : thisCharCode += 13;

    result += String.fromCharCode(thisCharCode);
  }

  return result;
}