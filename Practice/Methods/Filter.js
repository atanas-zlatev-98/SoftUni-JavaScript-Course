/*
Checks is a given value is stored in the array or not.
 - Requires parameter
 - Returns value
 - Creates a new array from elements matching predicate

*/
let array = [10, 30, 5, 10, 20, 40];

function filter(arr, n) {

  for (let element of arr) {

    if (element === n) {
      return true;
    }

  }

  return false;
}

console.log(filter(array, 30));


console.log('-------------------');

let arrayTwo = [10, 30, 5, 10, 20, 40]

let newArr = arrayTwo.filter((number) => number < 10);
console.log(newArr)



console.log('-------------------');

let arrayThree = ['Atanas', 'Nikola', 3,'3'];

let filtered = arrayThree.filter((element) => typeof element === 'number');
console.log(filtered);


console.log('-------------------');

let arrayFour = ['Atanas', 'Nikola', 'Zlatev','Georgiev'];

let filteredFour = arrayFour.filter(word => word.length > 6);
console.log(filteredFour);