let array = [5, 2, 6, 1, 10, 20, 4];
let loopCounter = 0;
console.log(array);
bubbleSort(array);
console.log(array);


function bubbleSort(arr) {
  for (let j = 0; j < arr.length - 1; j++) {

    for (let i = 0; i < arr.length - 1 - j; i++) {
        loopCounter++;
      if (compare(arr[i], arr[i + 1])) {
        swap(arr, i, i + 1);
      }
    }

  }
  console.log(loopCounter);
}

function swap(arr, i, j) {
  let temporary = arr[i];
  arr[i] = arr[j];
  arr[j] = temporary;
}

function compare(a, b) {
  return a > b;
}
