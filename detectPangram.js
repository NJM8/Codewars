// 6 kyu - A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string){
  let letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  let regex = new RegExp(/[^a-z], 'gi'/);
  let cleanString = string.replace(regex, '');
  cleanString = cleanString.toLowerCase();
  for (let i = 0; i < letters.length; i++) {
    if (!cleanString.includes(letters[i])) {
      return false;
    }
  }
  
  return true;
}