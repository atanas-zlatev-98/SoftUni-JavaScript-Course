function binaryDigits(number, digit) {
  let count = 0;
  while (number > 0) {
    let remainer = number % 2;
    number = Math.floor(number / 2);

    if (remainer === digit) {
      count++;
    }
  }
  console.log(count);
}

binaryDigits(20,0);
binaryDigits(15,1);
binaryDigits(10,0);


