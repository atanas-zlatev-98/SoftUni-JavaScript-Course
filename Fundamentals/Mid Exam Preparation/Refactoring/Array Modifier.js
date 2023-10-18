function arrayModifier(arr) {

  let arrayToModify = arr.shift().split(" ").map(Number);

  for (let i = 0; i < arr.length; i++) {
    
    let tokens = arr[i].split(" ");

    let command = tokens[0];
    let firstIndex = Number(tokens[1]);
    let secondIndex = Number(tokens[2]);

    if (command == "swap") {

      let idxOne = arrayToModify[firstIndex];
      let idxTwo = arrayToModify[secondIndex];

      arrayToModify[firstIndex] = idxTwo;
      arrayToModify[secondIndex] = idxOne;

    } else if (command == "multiply") {

      let sumOfIdx = arrayToModify[firstIndex] * arrayToModify[secondIndex];
      arrayToModify[firstIndex] = sumOfIdx;

    } else if (command == "decrease") {

      let decreasedElements = arrayToModify.map((element) => element - 1);
      arrayToModify = decreasedElements;

    } else if (command == "end") {

      console.log(arrayToModify.join(", "));
      return;

    }
  }
}

arrayModifier([
  "23 -2 321 87 42 90 -123",
  "swap 1 3",
  "swap 3 6",
  "swap 1 0",
  "multiply 1 2",
  "multiply 2 1",
  "decrease",
  "end",
]);
