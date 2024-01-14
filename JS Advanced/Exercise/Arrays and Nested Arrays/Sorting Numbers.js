function sortingNumbers(arr) {
  let result = [];

  while (arr.length > 0) {
    let currMin;
    let currMax;
    if (arr.length == 1) {

      currMin = Math.min(...arr);
      result.push(currMin);
      arr.splice(arr.indexOf(currMin), 1);

    } else {

      currMax = Math.max(...arr);
      currMin = Math.min(...arr);

      result.push(currMin, currMax);

      arr.splice(arr.indexOf(currMax), 1);
      arr.splice(arr.indexOf(currMin), 1);
    }
  }

  return result
}
//sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
//sortingNumbers([22, 9, 63, 3, 2, 19, 54, 11, 21, 18])
//sortingNumbers([1]);
sortingNumbers([1]);

/*let sorted = arr.sort((a,b) => a - b);

  let smallest = sorted.slice(0,arr.length / 2);
  let biggest = sorted.slice(arr.length / 2).reverse();
 
  for(let i = 0;i<arr.length / 2;i++){
    result.push(smallest[i],biggest[i]);
  }*/
