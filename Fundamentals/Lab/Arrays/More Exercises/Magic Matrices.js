function magicMatrices(arr) {

  let isPositive = true;

  let sum = arr[0].reduce((a, b) => a + b, 0);
  
  for (let i = 0; i < arr.length; i++) {
    let rowSum = arr[i].reduce((a, b) => a + b, 0);
    let columnSum = arr.map((row) => row[i]).reduce((a, b) => a + b, 0);

    if (rowSum != sum || columnSum !== sum) {
      isPositive = false;
      break;
    }
  }
  console.log(isPositive);
}

magicMatrices([
  [4, 5, 6],
  [6, 5, 4],
  [5, 5, 5],
]);
magicMatrices([
  [1, 0, 0],
  [0, 0, 1],
  [0, 1, 0],
]);
magicMatrices([
  [11, 32, 45],
  [21, 0, 1],
  [21, 1, 1],
]);
