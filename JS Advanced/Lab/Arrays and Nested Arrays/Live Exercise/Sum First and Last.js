function negativePositive(arr) {
  const result = [];

  for (let num of arr) {
    if (num < 0) {
      result.unshift(num);
    } else {
      result.push(num);
    }
  }
  for (let num of result) {
    console.log(num);
  }
}
negativePositive([7, -2, 8, 9]);
