function sameNumber(input) {
  let numAsStr = String(input);
  let isSame;

  for (let i = 0; i < numAsStr.length; i++) {
    let currentNumber = numAsStr[i];
    if (currentNumber != numAsStr[0]) {
      isSame = false;
      break;
    } else {
      isSame = true;
    }
  }

  let sum = numAsStr
    .split("")
    .map(Number)
    .reduce((acc, curr) => acc + curr);
  console.log(isSame + "\n" + sum);
}

sameNumber(1234);
