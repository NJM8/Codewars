// 7 kyu -  Remove all exclamation marks from the end of words. Words are separated by spaces in the sentence.
// Examples

// remove("Hi!") === "Hi"
// remove("Hi!!!") === "Hi"
// remove("!Hi") === "!Hi"
// remove("!Hi!") === "!Hi"
// remove("Hi! Hi!") === "Hi Hi"
// remove("!!!Hi !!hi!!! !hi") === "!!!Hi !!hi !hi"

function remove(s){
  let regex = new RegExp(/\b!*/,'g');
  return s.replace(regex, ''); 
}