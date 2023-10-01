function maxSeq(arr) {

  let newArr = [];
  let counter = 0;

  for (let i = 0; i < arr.length; i++) {

    let currentNumber = arr[i];
    let currentSequence = [];
    currentSequence.push(currentNumber);

    for (let j = i + 1; j < arr.length; j++) {
      let nextNumber = arr[j];

      if (currentNumber == nextNumber) {
        currentSequence.push(nextNumber);
      } else {
        break;
      }

    }

    if (currentSequence.length > newArr.length) {
      newArr = [];
      for (let j = 0; j < currentSequence.length; j++) {
        newArr.push(currentSequence[j]);
      }

    } else if (currentSequence.length === newArr.length) {
      if (i < counter) {
        counter = i;
      }
    }
  }

  console.log(newArr.join(" "));
}

//maxSeq([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
maxSeq([0, 1, 1, 5, 2, 2, 6, 3, 3]);
