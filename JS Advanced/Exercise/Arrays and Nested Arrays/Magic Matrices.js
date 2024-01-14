function magicMatrices(arr) {

  let resultRow = [];
  let resultCol = [];

  let isSame = true;

  for (let i = 0; i < arr.length; i++) {

    let currRowValue = arr[i].reduce((acc, curr) => acc + curr);
    resultRow.push(currRowValue);

    let currColValue = 0;

    for (let j = 0; j < arr.length; j++) {
      let curr = arr[j][i];
      currColValue += curr;
    }

    resultCol.push(currColValue);
  }

  let mergedResults = [...resultRow, ...resultCol];

  for (let i = 0; i < mergedResults.length; i++) {

    if (mergedResults[i] !== mergedResults[0]) {
      isSame = false;
    }
    
  }

  return isSame;
}
magicMatrices([
  [4, 5, 6],
  [6, 5, 4],
  [5, 5, 5],
]);
magicMatrices([
  [11, 32, 45],
  [21, 0, 1],
  [21, 1, 1],
]);
magicMatrices([
  [1, 0, 0],
  [0, 0, 1],
  [0, 1, 0],
]);
