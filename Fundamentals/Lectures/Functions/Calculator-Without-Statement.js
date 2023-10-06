
function calculator(a, b, operator) {
  let operations = [
    (a, b) => a * b,
    (a, b) => a / b,
    (a, b) => a + b,
    (a, b) => a - b,
  ];

  let operatorNames = ["multiply", "divide", "add", "subtract"];

  let index;

  for (let i = 0; i < operatorNames.length; i++) {
    if (operatorNames[i] == operator) {
      index = i;
    }
  }
  let operation = operations[index];
  console.log(operation(a, b));
}
calculator(3, 5, "add");
