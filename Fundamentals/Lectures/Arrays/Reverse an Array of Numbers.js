function reverse(n, arr) {
  let newArr = [];
  let reversed = [];

  for (let i = 0; i < n; i++) {
    newArr.push(arr[i]);
  }

  for (let i = newArr.length - 1; i >= 0; i--) {
    reversed.push(newArr[i]);
  }

  console.log(reversed.join(" "));
}

reverse(2, [66, 43, 75, 89, 47]);
reverse(4, [-1, 20, 99, 5]);
reverse(3, [10, 20, 30, 40, 50]);
