function bit(number, position) {
  let shiftedNumber = number >> position;
  let lsb = shiftedNumber & 1;
  console.log(lsb);
}
bit(2145,5);
bit(512,0);