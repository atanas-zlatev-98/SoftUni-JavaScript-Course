function magicMatrices(matrix) {
    
  for (let i = 0; i < matrix.length - 1; i++) {
    let rowOne = matrix.reduce((acc, value) => {
      acc += value[i]
      return acc;
    }, 0);

    let rowTwo = matrix.reduce((acc, value) => {
      acc += value[i + 1];
      return acc;
    }, 0);

    let colOne = matrix[i].reduce((acc, value) => acc + value);
    let colTwo = matrix[i + 1].reduce((acc, value) => acc + value);

    if(rowOne !== rowTwo || colOne !== colTwo){
        return false;
    }

  }
  return true;
}

console.log(magicMatrices([
  [4, 5, 6],
  [6, 5, 4],
  [5, 5, 5],
]));
/*magicMatrices([
  [11, 32, 45],
  [21, 0, 1],
  [21, 1, 1],
]);
magicMatrices([
  [1, 0, 0],
  [0, 0, 1],
  [0, 1, 0],
]);*/
