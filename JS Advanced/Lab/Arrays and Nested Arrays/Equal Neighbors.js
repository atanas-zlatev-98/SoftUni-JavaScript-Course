function equalNeighbors(arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    
    let currentArr = arr[i];
    let nextArr = arr[i + 1];

    if(currentArr[i] == currentArr[i + 1]){
        count += 1;
    }

    if (typeof nextArr !== "undefined") {

      for (let k = 0; k < nextArr.length; k++) {

        if (currentArr[k] == nextArr[k]) {
          count += 1;
        }

        if(nextArr[k] == nextArr[k + 1]){
            count += 1;
        }
      }
    }
  }
  return count
}

equalNeighbors([
  ["test", "yes", "yo", "ho"],
  ["well", "done", "yo", "6"],
  ["not", "done", "yet", "5"],
]);

equalNeighbors([
  ["2", "3", "4", "7", "0"],

  ["4", "0", "5", "3", "4"],

  ["2", "3", "5", "4", "2"],

  ["9", "8", "7", "5", "4"],
]);

equalNeighbors([
  [2, 2, 5, 7, 4],
  [4, 0, 5, 3, 4],
  [2, 5, 5, 4, 2],
]);
