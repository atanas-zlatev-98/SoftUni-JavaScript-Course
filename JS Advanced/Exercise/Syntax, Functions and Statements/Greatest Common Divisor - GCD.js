function greatestDivisor(x, y) {
  while (y) {
    let temp = y;
    y = x % y;
    x = temp;
  }
  console.log(x);
}

greatestDivisor(2154, 458);
