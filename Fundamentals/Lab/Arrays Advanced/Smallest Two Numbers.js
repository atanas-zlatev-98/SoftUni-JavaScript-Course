function smallestTwoNumbers(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  console.log(arr.slice(0, 2).join(" "));

  /*let sorted = arr.sort((a,b)=> a - b);
    console.log(sorted.slice(0,2).join(' '));*/
}

smallestTwoNumbers([30, 15, 50, 5]);
