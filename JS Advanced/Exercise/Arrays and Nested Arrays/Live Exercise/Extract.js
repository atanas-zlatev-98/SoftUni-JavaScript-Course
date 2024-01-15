function extract(arr) {
  let result = [];
  let biggestOne = arr.shift();

  result.push(biggestOne);

  arr.forEach((x) => {
    if (biggestOne <= x) {
      biggestOne = x;
      result.push(biggestOne);
    }
  });

  return result;
}

console.log(extract([1, 3, 8, 4, 10, 12, 3, 2, 24]));
console.log(extract([1, 2, 3, 4]));
console.log(extract([20, 20, 3, 2, 15, 6, 1]));

console.log("-------------");

function extract2(arr) {
  let biggestOne = arr[0];

  return arr.filter((x) => {
    if (x >= biggestOne) {
      biggestOne = x;
      return true;
    }
    return false;
  });
}

console.log(extract2([1, 3, 8, 4, 10, 12, 3, 2, 24]));
console.log(extract2([1, 2, 3, 4]));
console.log(extract2([20, 20, 3, 2, 15, 6, 1]));
