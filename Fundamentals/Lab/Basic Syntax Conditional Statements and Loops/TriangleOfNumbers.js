function triangleOfNumbers(number) {
  for (let row = 1; row <= number; row++) {
    let currentRow = "";

    for (let column = 1; column <= row; column++) {
      currentRow += row + " ";
    }

    console.log(currentRow);
  }
}

triangleOfNumbers(6);
