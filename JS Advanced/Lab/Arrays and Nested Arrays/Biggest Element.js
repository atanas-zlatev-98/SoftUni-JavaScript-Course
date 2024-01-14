function biggestElement(arr) {
  let biggestNumber;

  for (let i = 0; i < arr.length; i++) {
    let currentArray = arr[i];

    for (let i = 0; i < currentArray.length; i++) {
      let currentNumber = currentArray[i];

      if(typeof biggestNumber === 'undefined'){
        biggestNumber = currentNumber;
      }

      if (currentNumber >= biggestNumber) {
        biggestNumber = currentNumber;
      }

     
    }
  }
  return biggestNumber
}

biggestElement([
  [20, 50, 10],
  [8, 33, 145],
]);

biggestElement([
  [3, 5, 7, 12],
  [-1, 4, 33, 2],
  [8, 3, 0, 4],
]);

biggestElement([
  [-3, -5, -7, -12],
  [-1, -4, -33, -2],
  [-8, -3, -145, -4],
]);
