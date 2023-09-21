function sumOfDigits(number) {
  let num = String(number);
  let sum = 0;

  for (let i = 0; i < num.length; i++) {
    let currentNumber = num[i];
    sum += Number(currentNumber);
  }
  console.log(sum);
}

sumOfDigits(245678);
sumOfDigits(97561);
sumOfDigits(543);

/*   Alternative   */
