function extract(arr) {
  let result = [];
  let currentBiggest = 0;

  for (let i = 0; i < arr.length; i++) {
    let currentNumber = arr[i];

    if(currentNumber >= currentBiggest){
        currentBiggest = currentNumber;
        result.push(currentBiggest);
    }
  }
  return result;
}
extract([1, 3, 8, 4, 10, 12, 3, 2, 24]);
extract([1, 2, 3, 4]);
extract([20,3,2,15,6,1]);

