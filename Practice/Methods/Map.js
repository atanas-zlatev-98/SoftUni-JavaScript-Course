/*
- creates a new array by applying a function to every element
*/

let array = [10, 20, 30, 40, 50];
console.log(array.map((x) => x * 2));
console.log("---------------");

function map(arr, func) {
  let result = [];

  for (let elements of arr) {
    let newElement = func(elements);
    result.push(newElement);
  }

  return result;
}

console.log(map(array, (x) => x * 2));

console.log("---------------");

let findOff = array.map((x) => x % 2 !== 0);
console.log(findOff);

console.log("---------------");
