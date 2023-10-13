function distinct(arr) {
  let uniqueNumber = [];

  for (let number of arr) {

    if (!uniqueNumber.includes(number)) {
      uniqueNumber.push(number);
    }

  }

  console.log(uniqueNumber.join(" "));
}

distinct([7, 8, 9, 7, 2, 3, 4, 1, 2]);
