function math(number, power) {
  //console.log(Math.pow(number,power));
  let result = 1;
  for (let i = 1; i <= power; i++) {
    result *= number;
  }
  console.log(result);
}

math(2, 8);
math(3,4);
