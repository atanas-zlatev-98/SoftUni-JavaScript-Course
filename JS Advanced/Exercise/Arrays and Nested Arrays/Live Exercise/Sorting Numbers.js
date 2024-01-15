function sortingNumbers(arr) {
  let result = [];
  arr.sort((a, b) => a - b);
  //let length = arr.length;
  let i = 0;

  while (arr.length > 0) {
    if (i % 2 === 0) {
      result.push(arr.shift());
    } else {
      result.push(arr.pop());
    }
    i++
  }

  /*for (let i = 0; i < Math.floor(length / 2); i++) {
    result.push(arr[i]);
    result.push(arr[length - (i + 1)]);

    if (length % 2 !== 0 && i + 1 === Math.floor(length / 2)) {
      result.push(arr[length - (i + 2)]);
    }
   
  }*/
  
  return result;
}

/*sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
sortingNumbers([22, 9, 63, 3, 2, 19, 54, 11, 21, 18]);
sortingNumbers([1]);*/

console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
console.log(sortingNumbers([22, 9, 63, 3, 2, 19, 54, 11, 21, 18]));
console.log(sortingNumbers([1]));
