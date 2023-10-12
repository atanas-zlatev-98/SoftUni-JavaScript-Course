/*
Checks is a given value is stored in the array or not.
 - Requires parameter
 - Returns value
*/
let array = [10, 30, 5, 10, 20, 40];

function includes(arr, n) {

  for (let element of arr) {

    if (element === n) {
      return true;
    }

  }

  return false;
}

console.log(includes(array, 30));


console.log('-------------------');

let arrayTwo = [10, 30, 5, 10, 20, 40]

let newArr = arrayTwo.includes(10);
console.log(newArr)



console.log('-------------------');

let arrayThree = ['Atanas', 'Nikola', 3,'3'];

let filtered = arrayThree.includes('Atanas');
console.log(filtered);


console.log('-------------------');

let arrayFour = ['Atanas', 'Nikola', 'Zlatev','Georgiev'];

let filteredFour = arrayFour.includes('Peter');
console.log(filteredFour);