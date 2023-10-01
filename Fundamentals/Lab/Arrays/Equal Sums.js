function equalSums(arr) {
  let result;

  for (let i = 0; i < arr.length; i++) {
    let leftSide = 0;
    let rightSide = 0;
    for (let j = 0; j < i; j++) {
      leftSide += arr[j];
    }

    for (let k = arr.length - 1; k > i; k--) {
      rightSide += arr[k];
    }

    if (leftSide == rightSide) {
      result = i;
      break;
    }else {
        result ='no';
    }
  }
  console.log(result);
}

equalSums([1, 2, 3, 3]);
equalSums([1, 2]);
equalSums([1]);
equalSums([1,2,3]);
