function oddNumbers(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if(i % 2 !== 0){
        result.push(arr[i] * 2);
    }
  }

  console.log(result.reverse().join(" "));
}

oddNumbers([10, 15, 20, 25]);
oddNumbers([3, 0, 10, 4, 7, 3]);
