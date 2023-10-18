function numbers(arr) {

  let numbers = arr.split(" ").map(Number);
  let averageValue = numbers.reduce((a, b) => a + b) / numbers.length;
  let newArray = [];

  for (let i = 0; i < numbers.length; i++) {

    if (numbers[i] > averageValue) {
      newArray.push(numbers[i]);
    }
    
  }

  if (newArray.length > 0 && newArray.length < 5) {

    console.log(newArray.sort((a, b) => b - a).splice(0, 5).join(" "));

  } else if (newArray.length == 0) {

    console.log("No");

  } else {

    console.log(newArray.sort((a, b) => b - a).splice(0, 5).join(" "));
  }
}
