function mathOperation(num1, num2, operation) {
  let result;
  switch (operation) {
    case "+":
      result = addition(num1, num2);
      break;
    case "-":
      result = subtraction(num1, num2);
      break;
    case "*":
      result = multi(num1, num2);
      break;
    case "/":
      result = devide(num1, num2);
      break;
    case "%":
      result = percent(num1, num2);
      break;
    case "**":
      result = pow(num1, num2);
      break;
      default:
        break;
  }

  console.log(result);

  function addition(numOne, numTwo) {
    return Number(numOne + numTwo);
  }
  function subtraction(numOne, numTwo) {
    return Number(numOne - numTwo);
  }
  function devide(numOne, numTwo) {
    return Number(numOne / numTwo);
  }
  function multi(numOne, numTwo) {
    return Number(numOne * numTwo);
  }
  function pow(numOne, numTwo) {
    return Number(numOne ** numTwo);
  }
  function percent(numOne, numTwo) {
    return Number(numOne % numTwo);
  }
}

mathOperation(5, 6, '+');
mathOperation(3, 5.5, '*');