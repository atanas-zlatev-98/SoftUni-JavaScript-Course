/*
- creates a new array from elements matching predicate
-  Predicate is a function returning a Boolean value (true or false)
*/

let array = [10, 20, 30, 40, 50];

console.log(array.filter((x) => true)); // returns orginal value;

console.log(array.filter((x) => x % 20 == 0)); // returns 20,40

console.log("-----------------");

function filter(arr, predicate) {
  // predicate = function x => x % 20 == 0
  let result = [];

  for (let elements of arr) {
    if (predicate(elements)) {
      result.push(elements);
    }
  }

  return result;
}

console.log(filter(array, (x) => x % 20 == 0));

console.log("-----------------");

console.log(array.filter((number) => number <= 10));
console.log(filter(array, (x) => x < 30));
