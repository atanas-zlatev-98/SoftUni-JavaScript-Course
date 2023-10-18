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

    let sortedArr = newArray.sort((a, b) => b - a);
    let splitedArr = sortedArr.splice(0,5);
    let joinedArr = splitedArr.join(' ');

    console.log(joinedArr);

    //Alternative
    //console.log(newArray.sort((a, b) => b - a).splice(0, 5).join(" "));

  } else if (newArray.length == 0) {

    console.log("No");

  } else {

    console.log(newArray.sort((a, b) => b - a).splice(0, 5).join(" "));
  }
}

numbers(`10 20 30 40 50`);
numbers("5 2 3 4 -10 30 40 50 20 50 60 60 51");
numbers("-1 -2 -3 -4 -5 -6");
numbers("1");
