function evenOdd(arr) {
  let sumOfEven = 0;
  let sumOfOdd = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumOfEven += Number(arr[i]);
    } else {
      sumOfOdd += Number(arr[i]);
    }
  }

  console.log(sumOfEven - sumOfOdd);
}

evenOdd([1, 2, 3, 4, 5, 6]);
evenOdd([3, 5, 7, 9]);
evenOdd([2, 4, 6, 8, 10]);
