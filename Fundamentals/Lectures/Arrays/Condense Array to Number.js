function condense(arr) {
  while (arr.length > 1) {
    let consended = [arr.length - 1];

    for (let i = 0; i < arr.length - 1; i++) {
      consended[i] = arr[i] + arr[i + 1];
    }

    arr = consended;
  }

  console.log(arr[0]);
}
//condense([2, 10, 3]);
condense([5, 0, 4, 1, 2]);
