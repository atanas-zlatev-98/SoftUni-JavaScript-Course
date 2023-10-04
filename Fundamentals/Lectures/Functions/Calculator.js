const calculator = (num1, num2, operator) => {
  switch (operator) {
    case "multiply":
      multiply(num1, num2);
      break;
    case "divide":
        divide(num1, num2);
      break;
    case "add":
      add(num1, num2);
      break;
    case "subtract":
        subtract(num1, num2);
      break;
    default:
      break;
  }
};

const multiply = (num1, num2) => {
  console.log(num1 * num2);
};

const divide = (num1, num2) => {
  console.log(num1 / num2);
};

const add = (num1, num2) => {
  console.log(num1 + num2);
};
const subtract = (num1, num2) => {
  console.log(num1 - num2);
};

calculator(5, 5, "multiply");
calculator(40,8,'divide');
calculator(12,19,'add');
calculator(50,13,'subtract');
