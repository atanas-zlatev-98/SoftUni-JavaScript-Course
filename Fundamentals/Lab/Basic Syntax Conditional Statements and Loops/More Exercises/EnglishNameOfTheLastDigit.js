function englishNameOfTheLastDigit(input) {

  let number = String(input);
  let lastDigit = 0;
  let printDigit = '';

  for (let i = 0; i < number.length; i++) {

    let currentNumber = number[i];
    lastDigit = currentNumber;
    
  }

  if (lastDigit == 1) {
    printDigit = 'one';
  } else if (lastDigit == 2) {
    printDigit = 'two';
  } else if (lastDigit == 3) {
    printDigit = 'three';
  } else if (lastDigit == 4) {
    printDigit = 'four';
  } else if (lastDigit == 5) {
    printDigit = 'five';
  } else if (lastDigit == 6) {
    printDigit = 'six';
  } else if (lastDigit == 7) {
    printDigit = 'seven';
  } else if (lastDigit == 8) {
    printDigit = 'eight';
  } else if (lastDigit == 9) {
    printDigit = 'nine';
  } else {
    printDigit = 'zero';
  }

  console.log(printDigit);
}

englishNameOfTheLastDigit(512);
englishNameOfTheLastDigit(1643);
englishNameOfTheLastDigit(1);
