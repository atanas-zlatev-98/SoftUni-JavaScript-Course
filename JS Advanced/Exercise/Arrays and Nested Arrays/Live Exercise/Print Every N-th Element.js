function printEveryNthElement(arr, n) {
  let result = [];
  for (let i = 0; i < arr.length; i += n) {
    result.push(arr[i]);
  }
  return result;
}

printEveryNthElement(["5", "20", "31", "4", "20"], 2);
printEveryNthElement(["dsa", "asd", "test", "tset"], 2);
printEveryNthElement(["1", "2", "3", "4", "5"], 6);
