
function calculator(a, b, operator){

let multiply = (a, b) => {return a * b};
let divide = (a, b) => {return a / b};
let add = (a, b) => {return a + b};
let subtract = (a, b) => {return a - b};

  let result;
  switch (operator) {
    case "multiply":
      result = multiply(a, b);
      break;
    case "divide":
      result = divide(a, b);
      break;
    case "add":
      result = add(a, b);
      break;
    case "subtract":
      result = subtract(a, b);
      break;
    default:
      break;
  }
  console.log(result);
}

calculator(5, 5, "multiply");
/*calculator(40,8,'divide');
calculator(12,19,'add');
calculator(50,13,'subtract');*/
