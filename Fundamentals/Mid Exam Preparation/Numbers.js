function numbers(arr) {
  let numbers = arr.split(" ").map(Number);
  let averageSum = (numbers.reduce((a, b) => a + b) / numbers.length).toFixed(
    2
  );

  let modifiedArray = [];

  for (let i = 0; i < numbers.length; i++) {
    let currentNumber = numbers[i];

    if (currentNumber > averageSum) {
      modifiedArray.push(currentNumber);
    }
  }

  if (modifiedArray.length > 0 && modifiedArray < 5) {

    console.log("less than 5 numbers");

  } else if (modifiedArray.length == 0) {

    console.log("No");

  } else {
    console.log(modifiedArray.sort((a,b)=>b-a).splice(0, 5).join(' '));
  }
}

numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51');
numbers('-1 -2 -3 -4 -5 -6');
numbers("1");
