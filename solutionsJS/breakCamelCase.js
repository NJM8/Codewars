// Complete the solution so that the function will break up camel casing, using a space between words.
// Example

// solution('camelCasing') // => should return 'camel Casing


function solution(string) {
  let splitString = string.split(/[A-Z]/);
  let capitals = string.match(/[A-Z]/g);
  return splitString.reduce((array, element, index) => {
    index === 0 ? array.push(element) : array.push(capitals[index - 1] += element);
    return array;
  }, []).join(' ');
}



console.log(solution('camelCasing'));
console.log('Expected: camel Casing');