function magicSum(arr, number) {

  for (let i = 0; i < arr.length; i++) {
    let currentNumber = Number(arr[i]);

    for (let j = i + 1; j < arr.length; j++) {
      let nextNumber = Number(arr[j]);

      let sumNumbers = currentNumber + nextNumber;

      if (sumNumbers == number) {
       console.log(currentNumber,nextNumber);
      }
    }
  }

}

//magicSum([1, 7, 6, 2, 19, 23],8);
//magicSum([14, 20, 60, 13, 7, 19, 8],27);
magicSum([1, 2, 3, 4, 5, 6],6);
